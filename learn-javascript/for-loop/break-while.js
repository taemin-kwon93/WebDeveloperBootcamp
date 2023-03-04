let input = prompt("Hey, say something~");

while(true) {
  input = prompt(input);
  if(input.toLowerCase() === "stop copy") break;
}

console.log("Well, good bye")