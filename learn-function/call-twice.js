function callTwice([...something], func) {
  func(...something);
  func(...something);
}

const callMyFreinds = ([...freinds]) => {
  console.log('const callMyFreinds')
  freinds.map((freind) => {
    console.log('freind: ', freind)
  })
}

function callMyFreinds2([...freinds]) {
  console.log('function callMyFreinds2')
  freinds.map((freind) => {
    console.log(freind)
  })
}

// callMyFreinds(['GPT', 'KTM', 'LSA'])
callTwice(['GPT', 'KTM', 'LSA'], callMyFreinds);
callTwice(['GPT', 'KTM', 'LSA'], callMyFreinds2);
