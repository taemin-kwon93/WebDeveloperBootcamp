fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("Resolved!",res);
  })
  .catch((e) => {
    console.log("error: ",e)
  })

const loadStartWarsPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/1/")
  const data = res.json();
  console.log(data)
}

loadStartWarsPeople()
console.log('process.version: ',process.version);