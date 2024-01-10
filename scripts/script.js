let mainActionButton = document.getElementById("main-action-button")
let products = document.getElementById("products")


mainActionButton.addEventListener("click", () => {
    products.scrollIntoView({behavior: "smooth"})
})

let buttons = document.getElementsByClassName("product-button")
let order = document.getElementById("order")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        order.scrollIntoView({behavior: "smooth"})
    })
}


let burger = document.getElementById("burger")
let name = document.getElementById("name")
let phone = document.getElementById("phone")
let orderAction = document.getElementById("order-action")

let inputs = [burger, name, phone]

orderAction.addEventListener("click", () => {
    let hasError = false

    inputs.forEach(item => {
        if(!item.value){
            item.parentElement.style.background = "red"
            hasError = true
        }else {
            item.parentElement.style.background = ""
        }
    });

    if(!hasError){
        [burger, name, phone].forEach(item => {
            item.value = ""
        })
        alert("Спасибо за заказ!")
    }
})  
    
let currency = document.getElementById("change-currency")
let prices = document.getElementsByClassName("products-item-price")

currency.addEventListener("click", (e) => {
    let currentCurrency = e.target.innerText

    let newCurrency = "$"
    let coefficient = 1

    if (currentCurrency == "$"){
        newCurrency = "₽"
        coefficient = 80
    }else if (currentCurrency == "₽"){
        newCurrency = "AMD"
        coefficient = 380
    }else if (currentCurrency == "AMD"){
        newCurrency = "BYN"
        coefficient = 3
    }else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency

    for (let i = 0; i < prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
})