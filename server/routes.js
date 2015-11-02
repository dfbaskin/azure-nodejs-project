
import express from 'express';

let app = express();

app.use(express.static("src"));

export default app;

