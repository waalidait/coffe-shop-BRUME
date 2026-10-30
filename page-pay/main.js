// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
    { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
    { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
    { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
    { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
    { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
    { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
    { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
    { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
    { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "../assets/img/cappuccino.png" },
    { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];

let add = document.querySelector(".add-cart")

/**============================== */
/**afficher les produits*/
/**============================== */
function afficherprd() {

    coffeeCart.forEach(i => {
        let div = document.createElement("div");
        div.classList.add("coffee-item");
        div.innerHTML = `
    <div class="line"></div>

    <div class="product-content">
        <div class="coffee-image">
            <img src="${i.image}" alt="${i.name}">
        </div>

        <div class="coffee-info">
            <span>${i.name} :</span>
            <span>${i.price} DH</span>
            <div class = "operation">
               quantité : <button class = "moins">-</button>   <span class = "q-number">${i.quantity} </span> <button class = "plus">+</button>
            </div>
        </div>
    </div>
     
`;
        add.appendChild(div);

    })

    /**============================== */
    /**ajouter le total */
    /**============================== */
    let total = document.createElement("p")
    total.innerHTML = `Total : <span class ="DH">  </span>`;
    add.appendChild(total);

    /**============================== */
    /**ajouter btn  */
    /**============================== */
    let btnajouter = document.createElement("button")
    btnajouter.classList.add('ajouter')
    btnajouter.innerHTML = "ajouter"
    add.appendChild(btnajouter)

    let close = document.querySelector(".x")
    let poupup = document.querySelector(".popup");
    let blur = document.querySelector(".blur");
    close.addEventListener("click", function () {
        poupup.style.display = "none";
        blur.style.display = "none";
    })
    btnajouter.addEventListener("click", function () {
        poupup.style.display = "block";
        blur.style.display = "block";
    });
}

let v = document.querySelector(".recherch")
let container = document.querySelector(".div")
container.innerHTML = "";
function search() {
    let input = v.value;
    // if (input === "") {
    //     return;
    // }
    coffeeProducts.forEach(index => {
        if (index.name.includes(input)) {
            container.innerHTML += `<button class= "click">${index.name}</button> <br><br> `
        }
    })
}
v.addEventListener("input", search)
/**============================== */
/**calculer le total */
/**============================== */


function calculerTotal() {
    let total1 = 0;
    let num = document.querySelector(".DH")
    coffeeCart.forEach(e => {
        total1 += e.price * e.quantity;
    })
    num.textContent = total1 + " DH"
}


/**============================== */
/**ajouter quantite */
/**============================== */
function ajouterquantite() {
    let operation = document.querySelectorAll(".operation")

    operation.forEach((index, i) => {
        let plus = index.querySelector(".plus")
        let moins = index.querySelector(".moins")
        let num_span = index.querySelector(".q-number");


        plus.addEventListener('click', function () {
            num_span.textContent++;

            coffeeCart[i].quantity = num_span.textContent
            console.log(coffeeCart);
            calculerTotal()

        })


        moins.addEventListener('click', function () {
            if (num_span.textContent > 1) {
                num_span.textContent--;
                coffeeCart[i].quantity = num_span.textContent
                calculerTotal()
            }

        })

    })
}


/**============================== */
/**les function */
/**============================== */
afficherprd()
ajouterquantite()
calculerTotal()