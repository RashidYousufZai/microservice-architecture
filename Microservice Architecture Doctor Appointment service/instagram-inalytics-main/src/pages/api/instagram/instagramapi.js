export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Direct the user to the Instagram authorization endpoint
      res.writeHead(302, {
        Location: `https://api.instagram.com/oauth/authorize?client_id=1175082610605703&redirect_uri=https://www.opdagverden.dk/log-ind&scope=user_profile,user_media&response_type=code`
      });
      res.end();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
