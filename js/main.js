let body = document.querySelector("body")
let moviesBtn = document.querySelector(".movies");
let pokemonsBtn = document.querySelector(".pokemons");
let bothBtn = document.querySelector(".both");
let clearBtn = document.querySelector(".clear");
let elList = document.querySelector(".list1");
let moviesSliced = movies.slice(0, 20);
let pokemonsSliced = pokemons.slice(0, 20);
elList.classList.add("list-unstyled", "d-flex", "flex-wrap", "w-75", "mx-auto", "mt-5");


moviesBtn.addEventListener("click", function() {
    moviesItems(moviesSliced)
    
    // logo.src = "https://w7.pngwing.com/pngs/327/703/png-transparent-cinema-film-moveis-logo-film-art-film.png"
})
pokemonsBtn.addEventListener("click", function() {
    pokemonsItems(pokemonsSliced)
})
bothBtn.addEventListener("click", function() {
    both(moviesItems(), pokemonsItems())
})
clearBtn.addEventListener("click", function() {
    elList.innerHTML = null;
    body.style = null
})

function moviesItems(movies) {
    for (let i = 0; i < movies.length; i++) {
        let newLi = document.createElement("li");
        elList.appendChild(newLi);
        newLi.classList.add("card", "col-3")
        
        for (let j = 0; j < 1; j++) {
            let img = document.createElement("img");
            let div = document.createElement("div");
            let bigDiv = document.createElement("div");
            let h3 = document.createElement("h5");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let ytLink = document.createElement("button");
            let bookmark = document.createElement("button");
            let info = document.createElement("button");
            newLi.appendChild(img);
            newLi.appendChild(h3);
            newLi.appendChild(bigDiv);
            bigDiv.appendChild(p1);
            bigDiv.appendChild(p2);
            bigDiv.appendChild(p3);
            bigDiv.appendChild(div);
            div.appendChild(ytLink);
            div.appendChild(bookmark);
            div.appendChild(info);
            img.src = movies[i]["ImageURL"];
            h3.textContent = movies[i]["Title"];
            p1.textContent = movies[i]["Categories"];
            p2.textContent = movies[i]["imdb_rating"];
            p3.textContent = movies[i]["movie_year"];
            ytLink.textContent = ["Trailer"];
            bookmark.textContent = ["Bookmark"];
            info.textContent = ["More Info"];
            img.style.width = "100%";
            img.height = 350;
            h3.classList.add("bg-primary", "text-white", "text-center", "d-flex", "align-items-center", "justify-content-center", "m-0", "mb-2")
            h3.style.height = "70px";
            p1.classList.add("m-0", "fw-semibold", "text-center")
            p2.classList.add("m-0", "fw-bold", "text-center")
            p3.classList.add("m-0", "fw-bold", "text-center", "mb-2")
            ytLink.classList.add("col-4", "border-danger", "text-danger", "rounded-1")
            bookmark.classList.add("col-4", "border-success", "text-success", "rounded-1")
            info.classList.add("col-4", "border-primary", "text-primary", "rounded-1")
            bigDiv.classList.add("p-3")
        }
        
    }
}

function pokemonsItems(pokemons) {
    body.style.backgroundColor = "#ffc107"
    elList.innerHTML = null
    for (let item of pokemons) {
        let newLi = document.createElement("li")
        elList.appendChild(newLi)
        newLi.classList.add("card", "col-3", "text-center", "mb-4", "boxshadow")

        let img = document.createElement("img")
        img.src = item.img
        img.width = 200
        img.classList.add("mx-auto")
        newLi.appendChild(img)
        let h3 = document.createElement("h3")
        h3.textContent = item.name
        newLi.appendChild(h3)
        let p1 = document.createElement("h5")
        p1.textContent = item.type
        newLi.appendChild(p1)
        let p2 = document.createElement("h5")
        p2.textContent = item.weight
        newLi.appendChild(p2)
        let p3 = document.createElement("h5")
        p3.textContent = item.height
        newLi.appendChild(p3)
        
    }
}

function both(array1, array2) {
    let newArray = array1.concat(array2)

    return newArray
}
