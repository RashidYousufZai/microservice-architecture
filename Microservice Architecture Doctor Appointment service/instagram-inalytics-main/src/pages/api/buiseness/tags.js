import axios from "axios";

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BUISENESSID = process.env.BUISENESSID;

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/${BUISENESSID}/tags?fields=id,username&access_token=EABnGJhHUd0kBOzRNZBye4UwtPXgrUMvXUnU8XGixLWZBEBSCZCYJA35KfiQlFA3ZCE99ctiQqtZC3IZC1R1I8gAZA5P3upy3QhONMxOl54JrJyYjr2AhE7yooUzNsQThJQAapRX7KEzIEZBZBf9SDMSBrpVLo32PaeUfzUb9QTekDoRafksf47ScFbE3G`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ error: error.message });
  }
}
