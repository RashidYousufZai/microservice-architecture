// pages/api/webhooks.ts
import crypto from "crypto";

const APP_SECRET = process.env.INSTAGRAM_APP_SECRET;

export default async (req, res) => {
  if (req.method === "GET") {
    // Verification challenge request
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (
      mode &&
      token &&
      mode === "subscribe" &&
      token === process.env.INSTAGRAM_VERIFY_TOKEN
    ) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.status(403).end();
    }
  } else if (req.method === "POST") {
    const signature = req.headers["x-hub-signature-256"];
    const body = JSON.stringify(req.body);

    const hash = crypto
      .createHmac("sha256", APP_SECRET)
      .update(body)
      .digest("hex");

    const expectedSignature = `sha256=${hash}`;

    if (signature === expectedSignature) {
      console.log("Webhook payload:", req.body);
      res.status(200).end();
    } else {
      res.status(403).end();
    }
  } else {
    res.status(405).end();
  }
};
