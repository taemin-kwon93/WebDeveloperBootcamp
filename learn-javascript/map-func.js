const movies = [
  {
    title: 'some movie1',
    runTime: '2h10m',
  },
  {
    title: 'some movie2',
    runTime: '1h10m',
  },
  {
    title: 'some movie3',
    runTime: '5h10m',
  },
]

const titles = movies.map(movies => movies.title)
console.log('map: ', movies.map(movies => movies.title))
// map:  [ 'some movie1', 'some movie2', 'some movie3' ]
console.log('titles: ', titles)
// titles:  [ 'some movie1', 'some movie2', 'some movie3' ]
