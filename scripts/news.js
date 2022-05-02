// Ude Import export (MANDATORY)
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