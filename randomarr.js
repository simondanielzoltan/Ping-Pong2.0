
let yArr = [];
let yArr2 = [];

const xRandom = () => {
  return Math.floor(Math.random() * 30 + 30);
};
const yRandom = () => {
  return Math.floor(Math.random() * 20 + 4);
};
let xMiddle = xRandom();
let xMiddle2 = xRandom();
let yMiddle = yRandom();
let yMiddle2 = yRandom();

if (xMiddle === xMiddle2) {
  xMiddle2 = xRandom();
}

yArr.push(yMiddle - 2, yMiddle - 1, yMiddle, yMiddle + 1);
yArr2.push(yMiddle2 - 3, yMiddle2 - 2, yMiddle2 - 1, yMiddle2, yMiddle2 + 1, yMiddle2 + 2, yMiddle2 + 3);
module.exports = { yArr, yArr2, xMiddle, xMiddle2, xRandom };
