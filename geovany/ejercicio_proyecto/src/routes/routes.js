// routes/someRoutes.js
import express from "express";
import someController from "../controllers/someController";

const router = express.Router();

// Ruta GET para obtener datos
router.get("/some-route", someController.getSomeData);

export default router;
