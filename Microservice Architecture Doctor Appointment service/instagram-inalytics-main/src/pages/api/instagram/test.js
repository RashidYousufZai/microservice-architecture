// api.js
import axios from 'axios';

const BASE_URL = 'https://graph.facebook.com/v20.0/';

export async function getFacebookProfile(accessToken) {
  try {
    const response = await axios.get(`${BASE_URL}me`, {
      params: {
        fields: 'id,name,picture,gender',
        access_token: accessToken
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Facebook profile');
  }
}
