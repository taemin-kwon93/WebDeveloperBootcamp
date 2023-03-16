const input = document.querySelector('input');

input.addEventListener('keydown', function(){
  console.log('keydown');
  // console.log(e.key);
  // console.log(e.code);
})

input.addEventListener('keyup', function() {
  console.log('KEY UP!');
})