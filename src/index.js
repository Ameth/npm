const mensaje = [
  "Ameth",
  "Elkin",
  "Maria",
  "Lineys",
  "Britney",
  "Vero",
  "Andres",
  "Victor",
  "Ronald",
  "Guilmar",
  "Kevin",
  "Juan",
];

const randomMsg = () => {
  const msg = mensaje[Math.floor(Math.random() * mensaje.length)];
  console.log(msg);
};

module.exports = { randomMsg };
