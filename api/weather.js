export default async function handler(req, res) {
  const target = 'https://wttr.in/Bucuresti?format=j1'; // JSON meteo București

  try {
    const response = await fetch(target);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'API error' });
    }
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
