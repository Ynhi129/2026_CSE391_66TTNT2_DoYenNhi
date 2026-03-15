//Truy cap phan tu
const inputName = document.getElementById("name");
const inputNumber = document.getElementById("number");
const inputDate = document.getElementById("date");
const inputAddress = document.getElementById("address");
const inputNote = document.getElementById("note");
const inputPayment = document.getElementById("payment");

const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

function calculateTotal(){
    const price = prices[product.value] || 0;
    const qty = parseInt(quantity.value) || 0;
    total.textContent = price * qty;
}

inputName.addEventListener("change", calculateTotal);
inputNumber.addEventListener("input", calculateTotal);

//const note = document.getElementById("note");
const charCount = document.getElementById("charCount");

note.addEventListener("input", function(){
    const length = note.value.length;
    charCount.textContent = length + "/200";

    if(length > 200){
        charCount.style.color = "red";
        document.getElementById("noteError").textContent =
        "Ghi chú không quá 200 ký tự";
    }else{
        charCount.style.color = "black";
        document.getElementById("noteError").textContent = "";
    }
});
function validateProduct(){
    if(product.value === ""){
        document.getElementById("productError").textContent =
        "Vui lòng chọn sản phẩm";
        return false;
    }
    document.getElementById("productError").textContent="";
    return true;
}

function validateQuantity(){
    const qty = parseInt(quantity.value);

    if(isNaN(qty) || qty < 1 || qty > 99){
        document.getElementById("quantityError").textContent =
        "Số lượng từ 1-99";
        return false;
    }
    document.getElementById("quantityError").textContent="";
    return true;
}

function validateDate(){
    const inputDate = new Date(deliveryDate.value);
    const today = new Date();

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);

    if(inputDate < today){
        dateError.textContent = "Không được chọn ngày quá khứ";
        return false;
    }

    if(inputDate > maxDate){
        dateError.textContent = "Không quá 30 ngày";
        return false;
    }

    dateError.textContent="";
    return true;
}

function validateAddress(){
    const value = address.value.trim();

    if(value.length < 10){
        addressError.textContent =
        "Địa chỉ phải ≥ 10 ký tự";
        return false;
    }

    addressError.textContent="";
    return true;
}

function validatePayment(){
    const payment = document.querySelector('input[name="payment"]:checked');

    if(!payment){
        paymentError.textContent = "Vui lòng chọn phương thức";
        return false;
    }

    paymentError.textContent="";
    return true;
}

product.addEventListener("blur", validateProduct);
quantity.addEventListener("blur", validateQuantity);
deliveryDate.addEventListener("blur", validateDate);
address.addEventListener("blur", validateAddress);


const form = document.getElementById("orderForm");

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
<h3>Xác nhận đơn hàng</h3>
<p>Sản phẩm: ${product.value}</p>
<p>Số lượng: ${quantity.value}</p>
<p>Tổng tiền: ${total.textContent}</p>
<p>Ngày giao: ${deliveryDate.value}</p>

<button id="ok">Xác nhận</button>
<button id="cancel">Hủy</button>
`;

document.getElementById("ok").onclick = function(){
alert("Đặt hàng thành công!");
confirmBox.innerHTML="";
};

document.getElementById("cancel").onclick = function(){
confirmBox.innerHTML="";
};

}