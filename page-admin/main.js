let name = document.querySelector("#name");
let price = document.querySelector("#nbr");
let desc = document.querySelector("#desc");

let errorName = document.querySelector("#errorName");
let errorPrice = document.querySelector("#errorPrice");
let errorDesc = document.querySelector("#errorDesc");

let btn = document.querySelector("#next");

let div1 = document.querySelector("#form-1")
let div2 = document.querySelector("#form-2")

btn.addEventListener("click",function(e){
 e.preventDefault()
 let valid = true

if(name.value ===""){
        errorName.innerHTML = "le nom est obligatoire"
        errorName.classList.remove("hidden")
        valid = false;
    }
else if (/[0-9]/.test(name.value)) {
    errorName.textContent = "Le nom ne doit pas contenir des chiffres";
    errorName.classList.remove("hidden");
     valid = false;
}
 if(price.value === ""){
    errorPrice.innerHTML = "il faut ecrir les chiffres"
    errorPrice.classList.remove("hidden");
     valid = false;
}
if(desc.value === ""){
    errorDesc.textContent = "il faut ecrire les ";
    errorDesc.classList.remove("hidden");
     valid = false;
}
if(valid){
   div1.classList.add("hidden")
   div2.classList.remove("hidden")
}
})