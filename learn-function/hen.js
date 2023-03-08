const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount++
    return 'EGG';
  },
}

hen.layAnEgg();
hen.layAnEgg();
console.log(hen.eggCount);