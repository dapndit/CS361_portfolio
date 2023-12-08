import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(express.json());

// Enable CORS for all origins and allowed headers
app.use(cors());

app.post('/api/proxy', async (req, res) => {
  const { url, method, headers, body } = req.body;

  try {
    const response = await fetch(`http://localhost:4000${url}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Proxy request failed', error: error.message });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
