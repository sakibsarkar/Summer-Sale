let item_serial_number = 0;
let item_total = 0;
function addItems(thisCard) {
    document.querySelector('.purchase').disabled = "true"
    item_serial_number++;
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
    ul.innerText = item_serial_number + ". " + item_name;
    item_list.appendChild(ul);

    

}

function couponApply() {
    let coupon_code = document.getElementById("coupon").value;
    if (coupon_code == "SELL200") {
        document.getElementById("coupon").value = "";
        let my_discount = item_total * (20 / 100).toFixed(2);
        if (my_discount % 1 == 0) {
            discount_price.innerText = my_discount + ".00";
            discount_total_price.innerText = item_total - parseFloat(discount_price.innerText);
        }
        else {
            discount_price.innerText = my_discount.toFixed(2);
            discount_total_price.innerText = item_total - parseFloat(discount_price.innerText);
        }
    }

    else {
        alert("Wrong coupon code");
        document.getElementById("coupon").value = "";
    }

}


// modal close
document.querySelector(".myBTN").addEventListener("click", function () {
    window.location.href = "index.html";
    item_serial_number = 0;
    let item_list = document.querySelector(".item_list");
    let total_price = document.querySelector("#total_price");
    let discount_total_price = document.querySelector("#discount_total_price");
    let discount_price = document.querySelector("#discount_price");
    let coupon_code = document.getElementById("coupon");
    item_list.innerHTML = "";
    total_price.innerText = "00.00";
    discount_total_price.innerText = "00.00";
    discount_price.innerText = "00.00";
    coupon_code.value = "";
})