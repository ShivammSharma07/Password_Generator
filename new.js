let str = "";
function generateChar() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const randomIndex = Math.floor(Math.random() * characters.length);

  const randomChar = characters.charAt(randomIndex);
  return randomChar;
}

for (let i = 0; i < 6; i++) {
  let calling = generateChar();
  // console.log(calling);
  str = str.concat(calling);
}
console.log(str);
