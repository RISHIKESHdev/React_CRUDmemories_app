import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//below code helps in prefixing //localhost:&{PORT}/posts
app.use("/posts", postRoutes);
/////////////////////////////////////////////////////////


// app.use(cors());

// const CONNECTION_URL =
//   "<username>:<password>@<mongo_url_copied_from_cluster>";
// const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Port:${process.env.PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false)
