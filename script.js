// for showing fact
let btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', async()=>{
    let fact = await getfacts();
    let p = document.querySelector("#result1");
    // for image we do img.setAttribute('src', link);
    p.innerText = fact ;
})

let url1="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res= await axios.get(url1);
        return res.data.fact;
    }catch(e){

        return "No fact found";
    }
}


// for showing image
let btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', async()=>{
    let image = await showimage();
    let result2 = document.querySelector("#result2");
    // for image we do img.setAttribute('src', link);
    result2.setAttribute('src', image) ;
})

let url2="https://dog.ceo/api/breeds/image/random";
async function showimage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }catch(e){

        return "No fact found";
    }
}





