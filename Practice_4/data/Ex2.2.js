const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

function calculateTotal(){
    const price = prices[product.value] || 0;
    const qty = parseInt(quantity.value) || 0;
    total.textContent = price * qty;
}

product.addEventListener("change", calculateTotal);
quantity.addEventListener("input", calculateTotal);

const note = document.getElementById("note");
const charCount = document.getElementById("charCount");

note.addEventListener("input", function(){
    const length = note.value.length;
    charCount.textContent = length + "/200";

    if(length > 200){
        charCount.style.color = "red";
        document.getElementById("noteError").textContent =
        "Ghi chu kh qua 200 ki tu";
    }else{
        charCount.style.color = "black";
        document.getElementById("noteError").textContent = "";
    }
});
function validateProduct(){
    if(product.value === ""){
        document.getElementById("productError").textContent =
        "Vui long chon san pham";
        return false;
    }
    document.getElementById("productError").textContent="";
    return true;
}

function validateQuantity(){
    const qty = parseInt(quantity.value);

    if(isNaN(qty) || qty < 1 || qty > 99){
        document.getElementById("quantityError").textContent =
        "So luong tu 1 den 99";
        return false;
    }
    document.getElementById("quantityError").textContent="";
    return true;
}

function validateDate(){
    const inputDate = new Date(date.value);
    const today = new Date();

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);

    if(inputDate < today){
        dateError.textContent = "Khong duoc chon ngay qua khu";
        return false;
    }

    if(inputDate > maxDate){
        dateError.textContent = "Khong qua 30 ngay";
        return false;
    }

    dateError.textContent="";
    return true;
}

function validateAddress(){
    const value = address.value.trim();

    if(value.length < 10){
        addressError.textContent =
        "Dia chi phai lon hon 10 ki tu";
        return false;
    }

    addressError.textContent="";
    return true;
}

function validatePayment(){
    const payment = document.querySelector('input[name="payment"]:checked');

    if(!payment){
        paymentError.textContent = "Vui long chon phuong thuc";
        return false;
    }

    paymentError.textContent="";
    return true;
}

product.addEventListener("blur", validateProduct);
quantity.addEventListener("blur", validateQuantity);
date.addEventListener("blur", validateDate);
address.addEventListener("blur", validateAddress);


const form = document.getElementById("order-form");

form.addEventListener("submit", function(e){
e.preventDefault();

const valid =
validateProduct() &
validateQuantity() &
validateDate() &
validateAddress() &
validatePayment();

if(valid){
showConfirm();
}
});

function showConfirm(){

const confirmBox = document.getElementById("confirmBox");

confirmBox.innerHTML = `
<h3>Xac nhan don hang</h3>
<p>Sản phẩm: ${product.value}</p>
<p>Số lượng: ${quantity.value}</p>
<p>Tổng tiền: ${total.textContent}</p>
<p>Ngày giao: ${deliveryDate.value}</p>

<button id="ok">Xac nhan</button>
<button id="cancel">Huy</button>
`;

document.getElementById("ok").onclick = function(){
alert("Dat hang thanh cong!");
confirmBox.innerHTML="";
};

document.getElementById("cancel").onclick = function(){
confirmBox.innerHTML="";
};

}