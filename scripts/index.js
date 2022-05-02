// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {sidebar} from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

import {searchNews,appendData,getData} from "./fetch.js";


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

let s_bar = document.getElementById("sidebar").children;

function cSearch(){
    console.log(this.id);
    getData(this.id).then((data)=>{
        console.log(data);
        let results = document.getElementById("results");
        results.innerHTML = null;
        appendData(data.articles,results);

    });
}
for(let el of s_bar){
    el.addEventListener("click",cSearch);
}

