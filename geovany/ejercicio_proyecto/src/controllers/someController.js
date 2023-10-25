// controllers/someController.js
const someController = {
    getSomeData(req, res) {
      // Lógica para obtener datos
      const data = { message: "Hello from the controller!" };
      res.json(data);
    },
  };
  
  export default someController;
  