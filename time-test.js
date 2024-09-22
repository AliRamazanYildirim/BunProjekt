console.time("test");
let nummer;
for (let i = 0; i < 700000; i++) {
  nummer += i;
}
console.timeEnd("test");
