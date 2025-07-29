setInterval(() => {
  const Data = new Date();

  const horas = String(Data.getHours());
  const minutos = String(Data.getMinutes());
  const segundos = String(Data.getSeconds());

  console.clear();
  console.log(`🕛 ${horas}:${minutos}:${segundos}`);
}, 1000);