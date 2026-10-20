const express = require('express');
const app = express();
app.use(express.json());

let lastSignal = {
  ticker: "—", consenso: 0, simons: 0, druck: 0,
  cohen: 0, griffin: 0, tepper: 0, precio: 0, time: "—",
  updatedAt: null
};

app.post('/webhook', (req, res) => {
  lastSignal = { ...req.body, updatedAt: new Date().toISOString() };
  console.log('Señal recibida:', lastSignal);
  res.json({ ok: true });
});

app.get('/signal', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(lastSignal);
});

app.listen(process.env.PORT || 3000, () => console.log('QIS server running'));
