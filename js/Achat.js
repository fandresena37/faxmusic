function insertData(){
    let MonPanier = JSON.parse(localStorage.getItem("panier"))
    let template = document.getElementById("items")
    let container = document.querySelector(".container-prod")
    let total = document.querySelector(".total-price")
    let nbTotal = 0
    MonPanier.forEach(element => {
        let items = template.content.cloneNode(true)
        let img = items.querySelector("img")
        img.src = "../Img/"+element.src
        let desc = items.querySelector(".desc")
        desc.innerText = element.desc
        let nb = items.querySelector(".number")
        nb.innerText = "nb : "+element.nb
        let price = items.querySelector(".price")
        price.innerText = "$"+(element.price * element.nb).toFixed(2)
        nbTotal+=(element.price * element.nb)
        container.appendChild(items)
    });
    total.innerText = "$"+nbTotal.toFixed(2)
}
insertData()
removeChargement()
function removeChargement(){
    const delay = setTimeout(()=>{
        let divPrinc = document.querySelector(".chargement-princ")
        document.body.removeChild(divPrinc)
        setTimeout(delay)
    },2500)
}

let form = document.getElementById("formulaire").addEventListener('submit',function(e){
    e.preventDefault()
    ValideAchat()
})

function ValideAchat(){
    let template = document.getElementById("valide")
    document.body.appendChild(template.content)
    document.body.style="overflow:hidden"
    let timer = setTimeout(()=>{
        localStorage.setItem("panier",JSON.stringify([]))
        clearInterval(timer)
        window.location.href="./index.html"
    },2000)
}
