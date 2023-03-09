/**
 * validUserNames: 이름이 열글자가 넘는 사람들을 반환하는 함수
 * @param people 사람들 이름의 목록을 배열로 받음
 * @returns filter 메소드를 사용
 * 이름이 10글자가 넘을 경우
 * 해당 인원의 이름을 배열에 담아 return
 */
const validUserNames = (people) => {
  const people2 = people.map((person) => {
    return person.length > 10
  })
  const people3 = people.filter(person => person.length > 10)
  const people4 = people.forEach(person => {
    return person.length > 10
  })

  console.log('people2: ', people2)
  console.log('people3: ', people3)
  console.log('people4: ', people4)

  /** 위 log의 결과
   *
   * map은 콜백함수 연산 결과값을 리턴하여 people2에 담음
   * people2:  [ false, true, true, false, false ]
   *
   * filter는 콜백함수 연산 결과값에 해당하는 값을 리턴하여 people3에 담음
   * people3:  [ 'staceysmom1978', 'q29832128238983' ]
   *
   * forEach는 반환하여 변수에 값을 담지 않음
   * people4:  undefined
   */

  return people.filter(person => person.length > 10)
}

const people = validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
console.log(people) // [ 'staceysmom1978', 'q29832128238983' ]

