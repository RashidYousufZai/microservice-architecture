const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/registration",
  createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
  console.log(`Proxying requests to http://localhost:3000`);
});
