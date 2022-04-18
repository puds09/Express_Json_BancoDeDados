import express from "express"
import routes from "./routes/index.js"
// import server

const app = express();
app.use(express.json());
// const port = 3000
routes(app);


export default app;