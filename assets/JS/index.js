let chooseCart=document.querySelector(".choose-carts")
let menuIcon =document.querySelector(".bi-list")
let responsMenu = document.querySelector(".respons-menu")
menuIcon.addEventListener("cliclk", ()=>{
    responsMenu.style.height=responsMenu.scrollHeight() +"px"
})
showData()
function showData(){
    fetch(`http://localhost:3000/choose`)
    .then(res=>res.json())
    .then(respons=>{
        respons.map((element=>{
            chooseCart.innerHTML+=`
            <div class="cart">
            <p>WRIST BAND</p>
            <h3>${element.name}</h3>
            <span>$${element.price}</span>
            <div class="image">
                <img src="${element.image}" alt="picture">
            </div>
        </div>
            `
        }))
    })
}