// variavies e seleção de elementos

const apikey = "3xuMHCCjNQ51kQwmSY3nLo8UHFOycjm3STizuheg"

const data = document.querySelector("#input-date");
const btn = document.querySelector("#search");

const titleApi = document.querySelector("#title");
const textApi = document.querySelector("#description");

const imageApi = document.querySelector("#image");
const videoApi = document.querySelector("#video");

const classHide = document.querySelector("#hide");

const date = new Date;


const day = date.getDate();   
const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth()
const year = date.getFullYear();         

// if (month < 10){
//     const today = year + "-" + "0" + month + "-" + day;
//     data.setAttribute ("max", today);
// }else{
//     const today = year + "-" + month + "-" + day;
//     data.setAttribute ("max", today);
// }
const today = year + "-" + month  + "-" + day 

data.setAttribute ("max", today);

// funções

const getInformationFromAPI = async (inputDate) => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${inputDate}&api_key=${apikey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        console.log(today)
        console.log(data);
        console.log(data.title)
        console.log(data.url.substring(30,41))

        
        titleApi.innerText = data.title;
        textApi.innerText = data.explanation;
        

        if (data.media_type !== "image"){
            
            console.log (data.url);
            // videoApi.setAttribute("src", data.url)//`https://www.youtube.com/embed/=${data.url.substring(30,41)}`);
            videoApi.setAttribute ("src", data.url)
            imageApi.classList.add("hide");
        
        }else {

            imageApi.setAttribute("src", data.url);
            videoApi.classList.add("hide");
        }
        classHide.classList.remove("hide");
        return data
    })
}



// eventos no botão

btn.addEventListener("click", () => {
    inputDate = data.value;
    console.log(inputDate);
    console.log (today)
    getInformationFromAPI(inputDate);
})
