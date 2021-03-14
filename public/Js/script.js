let block = document.querySelector(".welcome");
let load = document.querySelector(".load");
let close = document.querySelector(".close");
let submit = document.querySelector(".submit");
let change = document.querySelector(".change");
let burgerNavBar = document.querySelector(".burger-nav");
let navBarSlide = document.querySelector(".nav-btn-slide")
let lat = document.querySelector("#lat");
let long = document.querySelector("#long");
let mess = document.querySelector(".mess");
let loadingAnime = document.querySelector(".loadingAnime");
let lists = document.querySelector(".lists");
let aboutDiv = document.querySelector(".about")
let graphDiv = document.querySelector(".graph")
// stats page

window.addEventListener("load", function () {
    burgerNavBar.addEventListener("click", burgerNav);

    submit.addEventListener("click", async function (e) {
        try {
            if (lat.value && long.value) {
                e.preventDefault();
                let formData = new FormData();
                formData.append("city1", lat.value);
                formData.append("city2", long.value);
                load.style.display = "none";
                loadingAnime.style.display = "flex";
                mess.innerHTML = "";
                let data = await axios.post("https://avekshaml.herokuapp.com/", formData)
                let cloudURL = data.data.url1;
                let graphURL = data.data.url2;
                data = data.data.row_data;
                console.log(data);
                let wrap = document.createElement("div");
                if (lists != null) {

                    for (let i = 0; i < data.length; i++) {
                        let pt = document.createElement("div");
                        pt.classList.add("pt");
                        let name = document.createElement("h3");
                        let atag = document.createElement("a");
                        atag.innerHTML = data[i][0];
                        atag.setAttribute("target", "_blank");
                        atag.setAttribute("href", `https://twitter.com/${data[i][0]}`)
                        name.appendChild(atag)
                        let location = document.createElement("h3");
                        location.innerHTML = data[i][1];
                        let hash = document.createElement("h3");
                        hash.innerHTML = data[i][4];
                        let tweet = document.createElement("h3");
                        tweet.innerHTML = data[i][3];
                        pt.appendChild(name);
                        pt.appendChild(location);
                        pt.appendChild(hash)
                        pt.appendChild(tweet);
                        wrap.appendChild(pt);
                    }

                    lists.append(wrap);
                }
                aboutDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${cloudURL.substring(1)})`
                graphDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${graphURL.substring(1)})`
                loadingAnime.style.display = "none";
                block.style.display = "flex";

            } else {
                mess.innerHTML = "Enter Longitude and Latitude";
            }

        } catch (err) {
            load.style.display = "flex";
            mess.innerHTML = "No tweets found";

        }

    })
    change.addEventListener("click", function () {
        window.location.reload();
    })
    close.addEventListener("click", function () {
        load.style.display = "none";
        block.style.display = "flex";
    })

    lat.addEventListener("keypress", async function (e) {
        try {
            if (lat.value && long.value) {
                e.preventDefault();
                let formData = new FormData();
                formData.append("city1", lat.value);
                formData.append("city2", long.value);
                close.innerHTML = "X";
                load.style.display = "none";
                loadingAnime.style.display = "flex";
                mess.innerHTML = "";
                let data = await axios.post("https://avekshaml.herokuapp.com/", formData)
                let cloudURL = data.data.url1;
                let graphURL = data.data.url2;
                data = data.data.row_data;
                let wrap = document.createElement("div");
                if (lists != null) {

                    for (let i = 0; i < data.length; i++) {
                        let pt = document.createElement("div");
                        pt.classList.add("pt");
                        let name = document.createElement("h3");
                        let atag = document.createElement("a");
                        atag.innerHTML = data[i][0];
                        atag.setAttribute("target", "_blank");
                        atag.setAttribute("href", `https://twitter.com/${data[i][0]}`)
                        name.appendChild(atag)
                        let location = document.createElement("h3");
                        location.innerHTML = data[i][1];
                        let hash = document.createElement("h3");
                        hash.innerHTML = data[i][4];
                        let tweet = document.createElement("h3");
                        tweet.innerHTML = data[i][3];
                        pt.appendChild(name);
                        pt.appendChild(location);
                        pt.appendChild(hash)
                        pt.appendChild(tweet);
                        wrap.appendChild(pt);
                    }

                    lists.append(wrap);
                }
                aboutDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${cloudURL.substring(1)})`
                graphDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${graphURL.substring(1)})`
                loadingAnime.style.display = "none";
                block.style.display = "flex";

            } else {
                mess.innerHTML = "Enter Longitude and Latitude";
            }

        } catch (err) {
            load.style.display = "flex";
            mess.innerHTML = "No tweets found";

        }

    })
    long.addEventListener("keypress", async function (e) {
        try {
            if (lat.value && long.value) {
                e.preventDefault();
                let formData = new FormData();
                formData.append("city1", lat.value);
                formData.append("city2", long.value);
                close.innerHTML = "X";
                load.style.display = "none";
                loadingAnime.style.display = "flex";
                mess.innerHTML = "";
                let data = await axios.post("https://avekshaml.herokuapp.com/", formData)
                let cloudURL = data.data.url1;
                let graphURL = data.data.url2;
                data = data.data.row_data;
                let wrap = document.createElement("div");
                if (lists != null) {

                    for (let i = 0; i < data.length; i++) {
                        let pt = document.createElement("div");
                        pt.classList.add("pt");
                        let name = document.createElement("h3");
                        let atag = document.createElement("a");
                        atag.innerHTML = data[i][0];
                        atag.setAttribute("target", "_blank");
                        atag.setAttribute("href", `https://twitter.com/${data[i][0]}`)
                        name.appendChild(atag)
                        let location = document.createElement("h3");
                        location.innerHTML = data[i][1];
                        let hash = document.createElement("h3");
                        hash.innerHTML = data[i][4];
                        let tweet = document.createElement("h3");
                        tweet.innerHTML = data[i][3];
                        pt.appendChild(name);
                        pt.appendChild(location);
                        pt.appendChild(hash)
                        pt.appendChild(tweet);
                        wrap.appendChild(pt);
                    }

                    lists.append(wrap);
                }
                aboutDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${cloudURL.substring(1)})`
                graphDiv.style.backgroundImage = `url(https://avekshaml.herokuapp.com/${graphURL.substring(1)})`
                loadingAnime.style.display = "none";
                block.style.display = "flex";

            } else {
                mess.innerHTML = "Enter Longitude and Latitude";
            }

        } catch (err) {
            load.style.display = "flex";
            mess.innerHTML = "No tweets found";

        }

    })
})


function burgerNav() {
    if (navBarSlide.classList.contains("activeBar")) {
        navBarSlide.classList.remove("activeBar");
    } else {
        navBarSlide.classList.add("activeBar");
    }

}


