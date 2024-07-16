// pages/api/instagram/loginapi.js
import User from "@/model/instagramModel";
import dbConnect from "@/utils/dbconnect";
import axios from "axios";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.body;

  try {
    // Step 1: Exchange code for a short-lived access token
    const response = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      new URLSearchParams({
        client_id: "1175082610605703",
        client_secret: "9aa6ff4793844085505fc4338b09c7f2",
        grant_type: "authorization_code",
        redirect_uri: "https://plugged.app/auth/signin",
        code: code,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, user_id } = response.data;

    console.log("Short-lived access token:", access_token, "User ID:", user_id);

    // Step 2: Exchange short-lived token for long-lived token
    const longLivedResponse = await axios.get(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=9aa6ff4793844085505fc4338b09c7f2&access_token=${access_token}`
    );

    const { access_token: long_lived_access_token } = longLivedResponse.data;

    console.log("Long-lived access token:", long_lived_access_token);

    const updateData = long_lived_access_token
      ? { accessToken: long_lived_access_token }
      : { accessToken: access_token };


    // Step 3: Save long-lived access token to the database
    const user = await User.findOneAndUpdate(
      { instagramId: user_id },
      updateData,
      { new: true, upsert: true }
    );

    console.log("Updated user:", user);

    // Step 4: Create JWT token
    const token = jwt.sign({ userId: user_id }, "your_secret_key", {
      expiresIn: "30d",
    });

    res.setHeader(
      "Set-Cookie",
      `accessToken=${token}; Max-Age=${
        30 * 24 * 60 * 60
      }; Path=/; Secure; SameSite=Strict`
    );

    return res.status(200).json({ success: true, access_token: token });
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response ? error.response.data : error.message
    );
    return res.status(500).json({ error: "Failed to fetch access token" });
  }
}
