import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/proxy', async (req, res) => {
  const { url, method, headers, body } = req.body;

  try {
    console.log('Received Request Body:', req.body); // Log the received request body

    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });


    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Proxy Request Failed:', error);
    res.status(500).json({ message: 'Proxy request failed', error: error.message });
  }
});


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
