let chooseCart=document.querySelector(".choose-carts")
let id = new URLSearchParams(window.location.search).get("id")
fetch(`http://localhost:3000/choose/${id}`)
.then(res=>res.json())
.then(respons=>{
    chooseCart.innerHTML=`
    <div class="cart">
            <p>WRIST BAND</p>
            <h3>${respons.name}</h3>
            <span>$${respons.price}</span>
            <div class="image">
                <img src="${respons.image}" alt="picture">
            </div>
        </div>
    `
})