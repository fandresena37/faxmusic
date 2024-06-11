document.querySelector("#username").value = ""
let dataLogin = null
async function getLogin(){
    const data = await fetch("../json/login.json")
    const dataSplit = await data.json()
    return dataSplit
}
getLogin()
.then((data)=>{
    dataLogin = data
})
.catch(()=>{
    console.error("erreur")
})
let access = false
function Connexion(){
    let userValue = document.querySelector("#username").value
    let passValue = document.querySelector("#password").value
    dataLogin.forEach(element => {
        if(userValue == element.username && passValue == element.password){
            localStorage.setItem("user",userValue)
            window.location.href="./index.html"
            access = true
        }
    })
    if(!access){
    let template = document.getElementById("incorrect")
    let items = template.content.cloneNode(true)
    document.body.appendChild(items)
    }
}
function removeMenu(){
    document.body.removeChild(document.querySelector(".div-float"))
}

