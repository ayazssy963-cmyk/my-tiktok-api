const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/download', async (req, res) => {
    const { videoUrl } = req.body;

    const options = {
        method: 'POST',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-key': 'eb3b10193emshc7693a0ca82b2aap146cb8jsnf1068b743f78',
            'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        },
        data: new URLSearchParams({ url: videoUrl })
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'خطأ في جلب البيانات' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

