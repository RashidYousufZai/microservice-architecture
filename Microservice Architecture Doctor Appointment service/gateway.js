const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy configuration
const proxyConfig = {
  "/registration": {
    target: "http://localhost:3000",
    changeOrigin: true,
    pathRewrite: { "^/registration": "" },
  },
  "/doctor": {
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: { "^/doctor": "" },
  },
  "/patient": {
    target: "http://localhost:3002",
    changeOrigin: true,
    pathRewrite: { "^/patient": "" },
  },
  "/appoinment": {
    target: "http://localhost:3003",
    changeOrigin: true,
    pathRewrite: { "^/appoinment": "" },
  },
};

// Use the proxy configurations
Object.keys(proxyConfig).forEach((context) => {
  app.use(context, createProxyMiddleware(proxyConfig[context]));
});

app.listen(8080, () => {
  console.log("API Gateway is running on http://localhost:8080");
});
