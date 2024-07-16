// pages/api/instagram/loginapi.js
import User from "@/model/instagramModel";
import dbConnect from "@/utils/dbconnect";
import axios from "axios";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.body;

  try {
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

    console.log(access_token, user_id);

    const token = Cookies.set("testing", "Hello World");
    console.log(token);

    const user = await User.findOneAndUpdate(
      { instagramId: user_id },
      { accessToken: access_token },
      { new: true, upsert: true }
    );
    console.log(user);

    res.setHeader(
      "Set-Cookie",
      `accessToken=${access_token}; Max-Age=${
        30 * 24 * 60 * 60
      }; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return res.status(200).json({ success: true, access_token });
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response ? error.response.data : error.message
    );
    return res.status(500).json({ error: "Failed to fetch access token" });
  }
}
