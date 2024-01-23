let image=document.querySelector(".image")
let cartName = document.querySelector(".name")
let cartprice = document.querySelector(".price")
let newImage = document.querySelector(".newimage")
let form =document.querySelector("form")
let search = document.querySelector(".search")
let tbody = document.querySelector("tbody")
let arr_1=[]
let arr_2=[]
let sort = document.querySelector("#sort")
getData()
search.addEventListener("input",(e)=>{
    console.log("Salam");
    arr_1=arr_2
    arr_1=arr_1.filter((elemment)=>{
        return elemment.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    getData()
})
function getData(){
    fetch(`http://localhost:3000/choose`)
    .then(res=>res.json())
    .then(respons=>{
        arr_2=respons
        tbody.innerHTML=""
        arr_1=arr_1.length || search.value ? arr_1 : respons;
        arr_1.map((elemment)=>{
            tbody.innerHTML+=`
            <tr>
                    <td>${elemment.id}</td>
                    <td>${elemment.name}</td>
                    <td>${elemment.price}</td>
                    <td><button onclick="deleteData(${elemment.id})">Delete</button></td>
                    <td><a href="./details.html?id=${elemment.id}"><button>Details</button></a></td>

            </tr>
            `
        })
    })
}

sort.addEventListener("change", (e)=>{
    if(e.target.value=="asc"){
        arr_1=arr_1.sort((a,b)=>a.price - b.price)
    }
    else if(e.target.value=="dsc"){
        arr_1=arr_1.sort((a,b)=>b.price - a.price)
    }
    else{
        arr_1=[]
    }
    getData()
})
function deleteData(id){
    axios.delete(`http://localhost:3000/choose/${id}`)
    .then(res=>{
        window.location.reload()

    })
}
image.addEventListener("input", (e)=>{
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=function(){
            newImage.src=reader.result
        }
    }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(image.value!="" && cartName.value!="" && cartprice.value!=""){
        axios.post(`http://localhost:3000/choose`,{
            name: cartName.value,
            price: cartprice.value,
            image: newImage.src
        })
        .then(res=>{
            window.location.reload()
        })
    }else{
        document.querySelector("p").style.opacity="1"
    }
})