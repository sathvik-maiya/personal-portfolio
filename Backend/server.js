const express = require("express");
const cors = require("cors");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

//rest object
const app = express();

//midlewares
app.use(
  cors({
    origin: ["https://personal-portfolio-sathvik-maiya.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is working on http://localhost:${PORT}`);
});
