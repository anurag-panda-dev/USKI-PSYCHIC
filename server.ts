import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing support
  app.use(express.json());

  // API proxy routes
  app.get("/api/killers", async (req, res) => {
    try {
      console.log("Proxying request: GET /api/killers");
      const response = await fetch("https://uski-api-6f7f009f.fastapicloud.dev/killers");
      if (!response.ok) {
        console.error(`Backend API error on /killers: ${response.status}`);
        return res.status(response.status).json({ error: `Backend API returned status ${response.status}` });
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error(`Backend API returned non-JSON response with content-type: ${contentType}`);
        return res.status(500).json({ error: "Backend API returned non-JSON response" });
      }
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error("Error proxying /api/killers:", error);
      res.status(500).json({ error: error.message || "Internal server error proxying /killers" });
    }
  });

  app.get("/api/killers/:id", async (req, res) => {
    try {
      console.log(`Proxying request: GET /api/killers/${req.params.id}`);
      const response = await fetch(`https://uski-api-6f7f009f.fastapicloud.dev/killers/${req.params.id}`);
      if (!response.ok) {
        console.error(`Backend API error on /killers/${req.params.id}: ${response.status}`);
        return res.status(response.status).json({ error: `Backend API returned status ${response.status}` });
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error(`Backend API returned non-JSON response with content-type: ${contentType}`);
        return res.status(500).json({ error: "Backend API returned non-JSON response" });
      }
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error(`Error proxying /api/killers/${req.params.id}:`, error);
      res.status(500).json({ error: error.message || "Internal server error proxying /killers/:id" });
    }
  });

  app.get("/api/killers/:id/score", async (req, res) => {
    try {
      console.log(`Proxying request: GET /api/killers/${req.params.id}/score`);
      const response = await fetch(`https://uski-api-6f7f009f.fastapicloud.dev/killers/${req.params.id}/score`);
      if (!response.ok) {
        console.error(`Backend API error on /killers/${req.params.id}/score: ${response.status}`);
        return res.status(response.status).json({ error: `Backend API returned status ${response.status}` });
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error(`Backend API returned non-JSON response with content-type: ${contentType}`);
        return res.status(500).json({ error: "Backend API returned non-JSON response" });
      }
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error(`Error proxying /api/killers/${req.params.id}/score:`, error);
      res.status(500).json({ error: error.message || "Internal server error proxying /killers/:id/score" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
