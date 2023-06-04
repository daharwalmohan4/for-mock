const accessKey ="RyQJA-DyrD530ZnqsBVhrnblorX3HTya10pl7qPMszI"

const formE1 = document.querySelector("form")
const inputE1  = document.getElementById("search-result")
const searchResult = document.querySelector("search-results")
const showMore  = document.getElementById("show-more-button")

let inputData= ""
let page  = 1;

 async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=&{accessKey}`

    const response   = await fetch(url)
    const data = await response.json();

    const results  = data.results;

    if(page===1){
        searchResults.innerHTML ="";
    }
    if(page===1){
        searchResult.innerHTML="";
    }

    results.map((results)=>{
        const imageWrapper = document.createElement("div");
       imageWrapper.classList.add("search-result");
       const image  = document.createElement("img");
       image.src = result.url.small;
    })
}