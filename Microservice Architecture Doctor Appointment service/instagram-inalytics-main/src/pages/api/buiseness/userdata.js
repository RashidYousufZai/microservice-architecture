import axios from "axios";

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BUISENESSID = process.env.BUISENESSID;

export default async function handler(req, res) {
  const {
    query: { username },
  } = req;

  try {
    const response = await axios.get(
      `https://graph.facebook.com/${BUISENESSID}?fields=business_discovery.username(${username}){followers_count,media_count,id,website,biography,profile_picture_url}&access_token=${ACCESSTOKEN}`
    );

    const userid = response.data.id;

    // Fetch media details based on userid
    const mediaData = await axios.get(
      `https://graph.facebook.com/${userid}?fields=business_discovery.username(${username}){media{comments_count,like_count,caption,permalink,id,timestamp,username,media_product_type,media_type,owner,media_url}}&access_token=${ACCESSTOKEN}`
    );

    // Combine both sets of data into a single response object
    const combinedData = {
      businessDetails: response.data,
      mediaDetails: mediaData.data,
    };

    // Return the combined data as JSON response
    return res.status(200).json(combinedData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
}
