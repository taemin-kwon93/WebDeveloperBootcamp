axios.get("https://swapi.dev/api/people/1/").then((res) => {
  console.log(res)
})
.catch((e) => {
  console.log('error message: ',e)
});

