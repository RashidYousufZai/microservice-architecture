import axios from 'axios';

const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID;
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        res.status(400).json({ error: 'Authorization code is missing' });
        return;
    }

    try {
        const tokenResponse = await axios({
            method: 'post',
            url: `https://api.instagram.com/oauth/EAAJt6zscz2gBOZClRCZADPwKCaZC60iigferUhBOhhe4abLSZCD9IscAz3b8iutcVfsqdG682RczhA8EZBukB58ISEkZBwdGstwd1siklFqvCzKuvZCalMZAZC9ByFokrXTQ3kaAn6iN7PvCg2qrPE4OfyhltQVlTSXkZAEleCF1QmRaaZCuN4ZBHvOPAHiZC15IenBeEZAosDUl14TydFkzQqh5bcZBzwAQrINAP5KKD17V3dyXMfshKZBJjTqZCOUMZD`,
            data: {
                client_id: process.env.CLIENTID,
                client_secret: process.env.APPSECRET,
                grant_type: 'authorization_code',
                redirect_uri: process.env.REDIRECT_URI,
                code,
            },
        });
        console.log(tokenResponse);

        const { access_token, user_id } = tokenResponse.data;

        const userMediaResponse = await axios.get(
            `https://graph.instagram.com/${user_id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${access_token}`
        );

        res.status(200).json(userMediaResponse.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch access token or user media', details: error.response.data });
    }
}
