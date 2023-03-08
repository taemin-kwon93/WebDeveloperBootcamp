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

const movieStr1 = movies.map(movie => {
  return `영화제목: ${movie.title}, 상영시간: ${movie.runTime}`
})
console.log(movieStr1)

const movieStr2 = movies.map(movie => (
  `영화제목: ${movie.title}, 상영시간: ${movie.runTime}`))
console.log(movieStr2)

const movieStr3 = movies.map(movie => `영화제목: ${movie.title}, 상영시간: ${movie.runTime}`)
console.log(movieStr3)