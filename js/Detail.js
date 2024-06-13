let MonPanier = null
let Detail = null
let index = null
let valueOrigin = 1
let urlParams = new URLSearchParams(window.location.search);
if(!urlParams.get("index")){
    window.location.href="./index.html"
}
index = ""+urlParams.get("index");
if(localStorage.getItem("panier")!=null){
    MonPanier = JSON.parse(localStorage.getItem("panier"))
    NbItteration()
}
else{
    MonPanier = []
}


async function getData(json){
    let data = await fetch(json)
    let dataSplit = data.json()
    return dataSplit;
}
getData("../json/Description.json")
.then((data)=>{
    Detail = data
    insertData(Detail)
    removeChargement()
})

function removeChargement(){
    const delay = setTimeout(()=>{
        let divPrinc = document.querySelector(".chargement-princ")
        document.body.removeChild(divPrinc)
        setTimeout(delay)
    },2500)
}

function insertData(data){
    for(let i=0;i<data.length;i++){
        if(data[i].id===index){
            let img = document.querySelector(".img-detail")
            img.src = "../Img/"+data[i].src
            let name = document.querySelector(".name")
            name.textContent = data[i].desc
            let price = document.querySelector(".price")
            price.textContent = "$"+data[i].price.toFixed(2)
            document.querySelector(".number").value = 1
            let desc = document.querySelector(".description")
            desc.textContent = data[i].description
            let list = document.querySelector(".list-caract")
            data[i].features.forEach((elt)=>{
                let li = document.createElement("li")
                li.textContent = elt
                list.appendChild(li)
            })
            data[i].nb = 0
            let number = document.querySelector(".number")
            number.value = 1
            let button = document.querySelector("main .btn-achat")
            button.addEventListener('click',()=>addCart(data[i],number.value))
            break
        }
    }
}


function verifieValue(input){
    if(input.value === ""){
        input.value = ""
    }
    else if(isNaN(parseInt(input.value)) || parseInt(input.value)===0){
         input.value = 1
    }  
}

function addCart(data,number){
    let exit = false
    let donnee = data
    delete donnee.description
    delete donnee.features
    if(MonPanier.length!=0){
        MonPanier.forEach(element=>{
            if(element.id == donnee.id){
                element.nb+=parseInt(number)
                exit = true
            }
        })
        if(!exit){
            donnee.nb = parseInt(number)
            MonPanier.push(donnee)
        }
    }
    else{
        donnee.nb = parseInt(number)
        MonPanier.push(donnee)
    }
    localStorage.setItem("panier",JSON.stringify(MonPanier))
    NbItteration()
}



function showCart(){
    if(MonPanier.length!=0){
    let panier = document.getElementById("monpanier")
    let panierClone = panier.content.cloneNode(true)
    let items = panierClone.querySelector(".panier-produit .prod-princ .prod-items")
    let princ = panierClone.querySelector(".prod-princ")
    let labelTotal = panierClone.querySelector(".total")
    let total = 0
    princ.innerHTML=""
    MonPanier.forEach(element=>{
        let itemsClone = items.cloneNode(true)
        let img = itemsClone.querySelector("img")
        img.src = "../Img/"+element.src
        let desc = itemsClone.querySelector(".desc")
        desc.innerText = element.desc
        let nb = itemsClone.querySelector("input")
        nb.addEventListener("change",()=>ChangeNb(element.id,nb))
        nb.addEventListener('input',()=>verifieValue(nb))
        nb.value = element.nb
        let price = itemsClone.querySelector(".panier-price")
        price.innerText = "$"+(element.price * element.nb).toFixed(2)
        let remove = itemsClone.querySelector(".delete")
        remove.addEventListener('click',()=>removeProduit(element.id))
        total+=(element.price * element.nb)
        princ.appendChild(itemsClone)
    })
    labelTotal.innerText = "TOTAL : $"+total.toFixed(2)
    document.body.appendChild(panierClone)
    }
    else{
        let panier = document.getElementById("panier-vide")
        let panierClone = panier.content.cloneNode(true)
        document.body.appendChild(panierClone)
    }
    document.body.style="overflow:hidden"
}


/// supprimer le panier

function hiddenCart(){
    document.body.removeChild(document.body.querySelector(".panier-float"))
    document.body.style="overflow:scroll"
}

/// change le nombre de produit dans le panier

function ChangeNb(index,element){
    if(element.value === ""){
        element.value = 1
    }
    MonPanier.forEach(elt=>{
        if(elt.id == index){
            elt.nb = parseInt(element.value)
        }
    })
    localStorage.setItem("panier",JSON.stringify(MonPanier))
    hiddenCart()
    showCart()
    NbItteration()
}

/// change le nombre visisble sur le panier

function NbItteration(){
    let CartNb = document.querySelector(".cart-nb")
    let nb = 0
    if(MonPanier.length!=0){
    MonPanier.forEach(elt=>{
        nb+=parseInt(elt.nb)
    })
    CartNb.style="display:flex"
    CartNb.innerHTML = nb
    }
    else{
        CartNb.style="display:none"
    }
}

/// supprime un produit dans le panier

function removeProduit(index){
    const MonPanierTmp = MonPanier.filter(element=>element.id!==index)
    MonPanier = MonPanierTmp
    localStorage.setItem("panier",JSON.stringify(MonPanier))
    hiddenCart()
    showCart()   
    NbItteration()
}


function deconnexion(){
    localStorage.setItem("user","")
    window.location.href="./login.html"
}

function showMenu(){
    let menu = document.querySelector(".menu-slide")
    menu.style = "top:0px"
}
function hiddenMenu(){
    let menu = document.querySelector(".menu-slide")
    menu.style = "top:-500px"
}

