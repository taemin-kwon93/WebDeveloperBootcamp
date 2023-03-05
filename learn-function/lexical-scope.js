function bankRobbery() {
  console.log('bankRobbery')
  const heroes = ['Spider man', 'Wolverine', 'Black Panther', 'Black Widow'];
  function cryForHelp() {
    console.log('cryForHelp')
    function inner() {
      console.log('inner')
      for (let hero of heroes) {
        console.log(`Please Help Us, ${hero.toUpperCase()}`);
      }
    }
    inner()
  }
  cryForHelp()
}

bankRobbery()
/** console.log
 * bankRobbery
 * cryForHelp
 * inner
 * Please Help Us, SPIDER MAN
 * Please Help Us, WOLVERINE
 * Please Help Us, BLACK PANTHER
 * Please Help Us, BLACK WIDOW
 */

/**
 * 렉시컬 범위
 * 중첩된 함수나 내부 함수는 상위 몇 레벨위에 있든 상관 없이,
 * 부모 함수나 조부모 함수 등이 액세스하는 동일한 항목에 액세스 할 수 있다.
 */
