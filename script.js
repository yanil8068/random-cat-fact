let btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', async()=>{
    let fact = await getfacts();
    let p = document.querySelector("#result");
    p.innerText = fact ;
})

let url1="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res= await axios.get(url1);
        return res.data.fact;
    }catch(e){
      
        return "No fact sound";
    }
}



