const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  console.log(form.elements.query.value)
  const searchTerm = form.elements.query.value;
  const res = axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
  console.log('res: ', res)
})
