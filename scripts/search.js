// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import {searchNews,appendData} from "./fetch.js";

let search = (eve) =>{
    if(eve.key==="Enter"){
        
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data)=>{
            console.log(data);
            let results = document.getElementById("results");
            results.innerHTML = null;
            appendData(data.articles,results);

        });
    }
}
document.getElementById("search_input").addEventListener("keydown",search);