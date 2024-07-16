// pages/api/instagram.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const accessToken = process.env.KEY;
    const endpoint = "https://graph.facebook.com/v15.0/1654469171673267";
    console.log(accessToken);

    try {
      const response = await axios.get(endpoint, {
        params: {
          access_token: accessToken,
        },
      });

      res.status(200).json("Error", response.data);
    } catch (error) {
      console.error(
        "Error fetching data from Instagram API:",
        error.response ? error.response.data : error.message
      );
      res.status(500).json({ error: "Error fetching data from Instagram API" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
