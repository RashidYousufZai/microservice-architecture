import axios from "axios";

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BUISENESSID = process.env.BUISENESSID;

export default async function handler(req, res) {
  const { period } = req.query;
  let days;
  switch (period) {
    case "day":
      days = 1;
      break;
    case "week":
      days = 7;
      break;
    case "month":
      days = 30;
      break;
    default:
      days = 30;
  }

  try {
    const now = Math.floor(Date.now() / 1000);
    const startDate = now - days * 24 * 60 * 60;

    const response = await axios.get(
      `https://graph.facebook.com/v20.0/${BUISENESSID}/insights?since=${startDate}&until=${now}&metric=impressions,reach,profile_views,follower_count&period=day&access_token=EABnGJhHUd0kBOzRNZBye4UwtPXgrUMvXUnU8XGixLWZBEBSCZCYJA35KfiQlFA3ZCE99ctiQqtZC3IZC1R1I8gAZA5P3upy3QhONMxOl54JrJyYjr2AhE7yooUzNsQThJQAapRX7KEzIEZBZBf9SDMSBrpVLo32PaeUfzUb9QTekDoRafksf47ScFbE3G`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}
