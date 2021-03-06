import express from "express";
import cors from "cors";
import { routers } from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3333, () => {
    console.log('HTTP server running!');
});