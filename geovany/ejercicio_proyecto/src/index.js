// index.js
import createApp from "./createApp";
import someRoutes from "./routes/someRoutes";

const app = createApp();

// Usar las rutas definidas en someRoutes
app.use("/api", someRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
