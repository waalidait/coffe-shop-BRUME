let product = {
    name: "",
    price: "",
    desc: "",
    image: "",

    origin: "",
    intensity: "",
    temperature: "",
    sizes: [],
    milk: [],
    supplements: []
};

let products = []

let name = document.querySelector("#name");
let price = document.querySelector("#nbr");
let desc = document.querySelector("#desc");

let errorName = document.querySelector("#errorName");
let errorPrice = document.querySelector("#errorPrice");
let errorDesc = document.querySelector("#errorDesc");
let imageInput = document.querySelector("#imageInput");

let btn = document.querySelector("#next");

let div1 = document.querySelector("#form-1")
let div2 = document.querySelector("#form-2")

let range_span = document.querySelector("#span-range");
let input_range = document.querySelector("#range");

/*=====================*/
/*validation de premier etap de form*/
/*=====================*/

function validateForm1() {
    let valid = true;

    errorName.classList.add("hidden");
    errorPrice.classList.add("hidden");
    errorDesc.classList.add("hidden");

    if (name.value === "") {
        errorName.textContent = "Le nom est obligatoire";
        errorName.classList.remove("hidden");
        valid = false;
    }
    else if (/[0-9]/.test(name.value)) {
        errorName.textContent = "Le nom ne doit pas contenir des chiffres";
        errorName.classList.remove("hidden");
        valid = false;
    }

    if (price.value === "") {
        errorPrice.textContent = "Il faut écrire le prix";
        errorPrice.classList.remove("hidden");
        valid = false;
    }

    if (desc.value === "") {
        errorDesc.textContent = "La description est obligatoire";
        errorDesc.classList.remove("hidden");
        valid = false;
    }
    else if (/[0-9]/.test(desc.value)) {
        errorDesc.textContent = "La description ne doit pas contenir des chiffres";
        errorDesc.classList.remove("hidden");
        valid = false;
    }

    return valid;
}


function saveTemperature() {
    let selected = document.querySelector('input[name="temperature"]:checked');

    if (selected) {
        product.temperature = selected.value;
    }

}

/*=====================*/
/*save information*/
/*=====================*/
function saveForm1() {
    product.name = name.value;
    product.price = price.value;
    product.desc = desc.value;
    product.image = imageInput.value;
}

/*=====================*/
/*por afficher range-input*/
/*=====================*/
function updateRange() {
    range_span.textContent = input_range.value;
}

input_range.addEventListener("input", updateRange);


btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (validateForm1()) {
        saveForm1();

        div1.classList.add("hidden");
        div2.classList.remove("hidden");

    }
});

/*=====================*/
/*partie-2 dans la form*/
/*=====================*/

let add_prd = document.getElementById("add-product");
let origin = document.querySelector("#origine")
let selected = document.querySelector('input[name="temperature"]:checked');

let sizes = document.querySelectorAll('input[name="sizes"]');
let milk = document.querySelectorAll('input[name="milk"');
let supplements = document.querySelectorAll('input[name="supplements"]');

add_prd.addEventListener('click', function (e) {
    e.preventDefault();

    // 1. Récupérer les choix actuels
    let selected = document.querySelector('input[name="temperature"]:checked');

    let selectedSizes = document.querySelectorAll('input[name="sizes"]:checked');
    let selectedMilk = document.querySelectorAll('input[name="milk"]:checked');
    let selectedSupplements = document.querySelectorAll('input[name="supplements"]:checked');


    let form = document.querySelector("#form");
    let productResult = document.querySelector("#product-result");
    // 2. Validation
    if (
        origin.value === "" ||
        !selected ||
        selectedSizes.length === 0 ||
        selectedMilk.length === 0 ||
        selectedSupplements.length === 0
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur !",
            text: "Veuillez remplir tous les champs obligatoires."
        });

        return;
    }

    // 3. Vider les anciens choix
    product.sizes = [];
    product.milk = [];
    product.supplements = [];

    // 4. Enregistrer les informations
    product.origin = origin.value;
    product.intensity = input_range.value;
    product.temperature = selected.value;

    for (let size of sizes) {
        if (size.checked) {
            product.sizes.push(size.value);
        }
    }

    for (let item of milk) {
        if (item.checked) {
            product.milk.push(item.value);
        }
    }

    for (let item of supplements) {
        if (item.checked) {
            product.supplements.push(item.value);
        }
    }
    console.log(product);

    Swal.fire({
        icon: "success",
        title: "Excellent !",
        text: "Le produit a été ajouté avec succès."
    }).then(() => {

    form.classList.add("hidden");

    productResult.classList.remove("hidden");

    productResult.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-40 h-40 object-cover">

        <h2>${product.name}</h2>
        <p>Prix : ${product.price} DH</p>
        <p>Description : ${product.desc}</p>
        <p>Origine : ${product.origin}</p>
        <p>Intensité : ${product.intensity}</p>
        <p>Température : ${product.temperature}</p>
        <p>Tailles : ${product.sizes.join(", ")}</p>
        <p>Lait : ${product.milk.join(", ")}</p>
        <p>Suppléments : ${product.supplements.join(", ")}</p>
    `;
});

    products.push(product);
    console.log(product);
});