fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("Resolved!",res);
  })
  .catch((e) => {
    console.log("error: ",e)
  })

constloadStartWarsPeople= async () => {
  const res = await fetch("https://swapi.dev/api/people/1/")



}