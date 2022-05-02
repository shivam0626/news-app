let searchNews = async(value) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }

}

let appendData = (data,results) =>{
    data.forEach(({urlToImage,title,description})=>{
    let box = document.createElement("div");
    box.setAttribute("id","box");
    let heading = document.createElement("h4");
    heading.innerText = title;

    let desc = document.createElement("p");
    desc.innerText = description;

    let img = document.createElement("img");
    img.src = urlToImage;

    box.append(img,heading,desc);
    results.append(box);

    });
}
let getData =async(code) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export {searchNews,appendData,getData};