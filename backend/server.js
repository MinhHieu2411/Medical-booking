import cors from "cors";
import "dotenv/config";
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";

//dns fix do loi dns tren may local
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
// localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API is abc");
});
//test


app.listen(port, () => console.log("Server started", port));
