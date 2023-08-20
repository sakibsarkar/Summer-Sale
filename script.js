let serial = 0;
let item_total = 0;
function addItems(thisCard) {
    document.querySelector('.purchase').disabled = "true"
    serial++;
    // variables
    let item_list = document.querySelector(".item_list");
    let total_price = document.querySelector("#total_price");
    let discount_total_price = document.querySelector("#discount_total_price");
    let discount_price = document.querySelector("#discount_price");

    // main logic start
    let item_name = thisCard.childNodes[3].childNodes[3].innerText;
    let per_item_price = parseFloat(thisCard.childNodes[3].childNodes[5].childNodes[0].innerText);
    
    item_total = item_total + per_item_price
    if (item_total > 0) {
        document.querySelector(".purchase").classList.remove("disabled")
        document.querySelector(".purchase").removeAttribute("disabled")
    }
    if (item_total >= 200) {
        document.querySelector(".apply").classList.remove("disabled");
        document.querySelector(".apply").removeAttribute("disabled")
        document.querySelector("#coupon").removeAttribute("readonly")

    }
    total_price.innerText = item_total + ".00"
    discount_total_price.innerText = total_price.innerText
    let ul = document.createElement("ul");
    ul.innerText = serial + ". " + item_name;
    item_list.appendChild(ul);

    document.querySelector(".apply").addEventListener("click",function(){
        let coupon_code = document.getElementById("coupon").value;
        if(coupon_code == "SELL200"){
            let my_discount = item_total * (20/100).toFixed(2)
            if(my_discount % 1 == 0){
                discount_price.innerText = my_discount  + ".00"
                discount_total_price.innerText = item_total - parseFloat(discount_price.innerText)
            }
            else{
                discount_price.innerText = my_discount.toFixed(2)
                discount_total_price.innerText = item_total - parseFloat(discount_price.innerText)
            }
        }
    })
}


// coupon function

function coupon() {

    let total_price = document.querySelector("#total_price");
    let discount_price = document.querySelector("#discount_price");
    let discount_total_price = document.querySelector("#discount_total_price");
    
    
    if(coupon_code == "SELL200"){
        discount_price.innerText = (parseFloat(total_price.innerText) * (20/100))
        discount_total_price.innerText = (parseFloat(total_price.innerText) - parseFloat(discount_price.innerText));
         
    }
    
}

// modal close
document.querySelector(".myBTN").addEventListener("click",function(){
    let item_list = document.querySelector(".item_list");
    let total_price = document.querySelector("#total_price");
    let discount_total_price = document.querySelector("#discount_total_price");
    let discount_price = document.querySelector("#discount_price");
    let coupon_code = document.getElementById("coupon");
    item_list.innerHTML = "";
    total_price.innerText = "00.00";
    discount_total_price.innerText = "00.00";
    discount_price.innerText = "00.00";
    coupon_code.value = ""
})