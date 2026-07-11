const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '¡Servidor Express funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});