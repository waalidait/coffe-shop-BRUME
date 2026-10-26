let label = document.querySelectorAll("option-name")

const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};

for (const confing_key in config) {
  for (const key in config[confing_key]) {
    const name1 = document.querySelector(`.${confing_key}-${key}-name`)
    name1.textContent = config[confing_key][key].name
    const price = document.querySelector(`.${confing_key}-${key}-price`)
    price.innerHTML = "<span>" + config[confing_key][key].price + "</span>"
    price.innerHTML += " <span> , 00 DH </span>"
  }
}


let objectTotal = {
  partie_1: null,
  partie_2: null,
  partie_3: null,
  partie_4: null,
  partie_5: null,
}

const radios = document.querySelectorAll("input");
let partie_4 = document.querySelector('.partie_4')
let partie_5 = document.querySelector('.partie_5')

const Inputcheckbox = document.querySelectorAll("input[type=checkbox]");

radios.forEach(radio => {

  radio.addEventListener('change', function () {
    const lbl = radio.parentElement;
    const prixTexte = lbl.lastElementChild.firstChild.innerHTML
    // objectTotal[radio.name] = Number(radio.parentElement.lastElementChild.firstChild.innerHTML);
    objectTotal[radio.name] = {
      price: Number(prixTexte),
      name: lbl.children[1].textContent
    };
    console.log(objectTotal);
    calculeTotal()
 
  })
})



Inputcheckbox.forEach(Element => {
  Element.addEventListener('change', () => {
    if (!partie_4.checked) {

      objectTotal["partie_4"] = null

    } if (!partie_5.checked) {
      objectTotal["partie_5"] = null
    }
    calculeTotal()
    console.log(objectTotal);

  })
})

function calculeTotal() {
  let total = 0;

  let num = document.querySelector(".num-dh")

  Object.keys(objectTotal).forEach(index => {
    if (objectTotal[index] != null) {
      total += (objectTotal[index].price)
    }
  })

  num.innerHTML = total + " <span> , 00 DH </span>"
}



let btn = document.querySelector(".btn");
let grid = document.querySelector(".grid");
let prix = document.querySelector(".prix");
let hidden = document.querySelector(".hidden");

btn.addEventListener("click", function () {
    grid.style.display = "none";
    prix.style.display = "none";
    hidden.style.display = "block";
    ressuTotal()
});
 

function ressuTotal(){
  let ressu1 = document.querySelector(".resu");
 let total = 0
 ressu1.innerHTML = ""

  Object.keys(objectTotal).forEach(t =>{
    let option = objectTotal[t]

    if(option !== null){
      total += option.price;

      let text = document.createElement("div")
      text.style.display = "flex";
      text.style.justifyContent = "space-between";
      text.style.padding = "10px";

      text.innerHTML=`
      <p>${option.name}</p>
      <p>${option.price}</p>
      `
      ressu1.appendChild(text);
    }
  })
  
  let totalElement = document.createElement("div");

    totalElement.style.display = "flex";
    totalElement.style.justifyContent = "space-between";
    totalElement.style.padding = "10px";
    totalElement.style.fontWeight = "bold";

    totalElement.innerHTML = `
        <p>Total</p>
        <p>${total},00 DH</p>
    `;

    ressu1.appendChild(totalElement);
}