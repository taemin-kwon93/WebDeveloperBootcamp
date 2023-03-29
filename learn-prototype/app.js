function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this)
  /**
   * new 연산자를 사용하게 되면
   * 1. 새로운 객체를 생성한 후
   * 2. this에 담겨있는 객체를 새 객체에 설정한다.
   * new 를 사용하지 않게 되면 Window objec를 참조한다
   */
}

Color.prototype.rgb = function() {
  const {r, g, b} = this;
  return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function() {
  const {r, g, b} = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);
