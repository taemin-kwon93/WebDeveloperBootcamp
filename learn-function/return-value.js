const rollDie1 = () => {
  return Math.floor(Math.random() * 6 ) + 1
}

// 암시적 반환, {} 중괄호가 아닌 () 괄호를 사용하면, return 키워드 생략이 가능하다
const rollDie2 = () => (
  Math.floor(Math.random() * 6) + 1
)

console.log(rollDie1())
console.log(rollDie2())