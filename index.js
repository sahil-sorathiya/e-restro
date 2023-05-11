
const btnNav = document.getElementsByClassName("btn-nav");
const dropDown = document.getElementsByClassName("dropdown");
const cardContainer = document.getElementById("card-container");
const sortList = document.getElementsByClassName("sort-list");
const filterList = document.getElementsByClassName("filter-list");

for (let i = 0; i <= 1; i++) {
    btnNav[i].addEventListener("click", function (e) {
        dropDown[i].classList.toggle("drop");;
    })
}


const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://e-restro-server.vercel.app/home', false);

xhr.onload = function () {
    const data = JSON.parse(this.response);
    // console.log(typeof data);
    const showItems = (array) => {
        cardContainer.innerHTML = ``;
        array.forEach((item) => {
            const color = item.isVeg ? "green" : "red";
            cardContainer.innerHTML += `
            <div class="card" style="background-image: url(${item.image});">
                <div class="icon" >
                    <div class="veg">
                        <div class="veg-border" style="border: 1px solid ${color};">
                            <div class="veg-circle" style="background-color: ${color};"></div>
                        </div>
                    </div>
                </div >
                <div class="content">
                    <h1 class="item-name">${item.itemName}</h1>
                    <div class="stats">
                        <h2 class="item-price">&#x20B9;${item.price}</h2>
                        <p class="item-ratings">&#9733;${item.ratings}</p>
                    </div>
                </div>
            </div >`

        })
    }

    showItems(data);

    sortList[0].addEventListener("click", (e) => {
        data.sort((a, b) => {
            return a.price - b.price;
        })
        showItems(data);
    })

    sortList[1].addEventListener("click", (e) => {
        data.sort((a, b) => {
            return b.price - a.price;
        })
        showItems(data);
    })

    sortList[2].addEventListener("click", (e) => {
        data.sort((a, b) => {
            return b.recommend - a.recommend;
        })
        showItems(data);
    })

    sortList[3].addEventListener("click", (e) => {
        data.sort((a, b) => {
            return b.ratings - a.ratings;
        })
        showItems(data);
    })


    filterList[0].addEventListener("click", (e) => {
        showItems(data);
    })

    filterList[1].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.isVeg;
        })
        showItems(filteredData);
    })

    filterList[2].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return !item.isVeg;
        })
        showItems(filteredData);
    })

    filterList[3].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.ratings >= 4;
        })
        showItems(filteredData);
    })

    filterList[4].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.price <= 100;
        })
        showItems(filteredData);
    })

    filterList[5].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.price >= 100 && item.price <= 200;
        })
        showItems(filteredData);
    })

    filterList[6].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.price >= 200 && item.price <= 300;
        })
        showItems(filteredData);
    })

    filterList[7].addEventListener("click", (e) => {
        const filteredData = data.filter((item) => {
            return item.price >= 300;
        })
        showItems(filteredData);
    })
}
xhr.send();

