function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
} // RGB 컬러를 16진수 색상으로 변환합니다.

function rgb(r, g, b){
  return `rgb(${r}, ${g}, ${b})`;
}

// console.log(hex(255, 255, 255)) #ffffff
// console.log(1 << 24) 16777216

function makeColor(r, g, b) {
  const color = {};
  console.log(`input rgb arguments : (${r}, ${g}, ${b})`)
  color.r = r + 1;
  color.g = g + 1;
  color.b = b + 1;
  color.rgb = function() {
    const {r, g, b} = this // destructure
    return console.log(`rgb(${r}, ${g}, ${b})`)
  }
  color.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + ((r - 1) << 16) + ((g - 1) << 8) + (b - 1)).toString(16).slice(1);
  }
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb();
console.log(firstColor.hex());
console.log(hex(35, 255, 150))