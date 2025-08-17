import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import { readFile } from 'fs/promises';
import cors from 'cors';



const app = express();
// const cors = cors();
const port = 3000;

//define the cros option 
const corsOption = {
    Credential: true,
    origin: ['http://localhost:4000', 'http://localhost:4200']
}

app.use(cors(corsOption));

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);


app.get('/products', async (req, res) => {
    try {
        const data = await readFile(path.join(__dirname, 'products.json'), 'utf-8');
        const products = JSON.parse(data);
        res.json(products);
    } catch (err) {
        res.status(500).json({error: 'could not read products file'
        });
    }
})

app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});