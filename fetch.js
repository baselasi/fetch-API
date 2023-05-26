const btn=document.getElementById("btn")
const listName=document.getElementById("list")
btn.addEventListener("click",async()=>{
    const data = await fetchData("https://swapi.dev/api/people?page=1");
    const list = data.results.map((objects)=>objects.name)
    console.log(list)
    creactList(list)
})
const fetchData= async (url)=>{
   const data= await fetch(url)
   const dataJs= await data.json()
   return dataJs

}
const creactList = (array) =>{
    listName.innerHTML=""
    array.forEach(element => {
        const li=document.createElement("li")
        li.append(element)
        listName.append(li)
    });
}