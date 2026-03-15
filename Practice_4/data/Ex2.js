const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const success = document.getElementById("success");

//ham hien thi loi

function showError(fieldId, message){
    document.getElementById(fieldId + "Error").textContent = message;
}

function clearError(fieldId){
    document.getElementById(fieldId + "Error").textContent = "";
}

//validate fullname

function validateFullname(){
    const value = fullname.value.trim();
    const regex = /^[A-Za-zÀ-ỹ\s]{3,}$/;

    if(!regex.test(value)){
        showError("fullname","Ten ≥ 3 ki tu va chi chua chu");
        return false;
    }

    clearError("fullname");
    return true;
}

//validate email

function validateEmail(){
    const value = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(value)){
        showError("email","Email khong hop le");
        return false;
    }

    clearError("email");
    return true;
}

//validate phone

function validatePhone(){
    const value = phone.value.trim();
    const regex = /^0\d{9}$/;

    if(!regex.test(value)){
        showError("phone","Sdt phai 10 so va bat dau bang so 0");
        return false;
    }

    clearError("phone");
    return true;
}

//validate password

function validatePassword(){
    const value = password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!regex.test(value)){
        showError("password","Mat khau >=8 ki tu, co chu hoa, chu thuong va so");
        return false;
    }

    clearError("password");
    return true;
}

//comfirm password

function validateConfirmPassword(){

    if(confirmPassword.value !== password.value){
        showError("confirmPassword","Mat khau khong khop");
        return false;
    }

    clearError("confirmPassword");
    return true;
}

//gender

function validateGender(){
    const gender = document.querySelector('input[name="gender"]:checked');

    if(!gender){
        showError("gender","Vui long chon gioi tinh");
        return false;
    }

    clearError("gender");
    return true;
}

//terms

function validateTerms(){

    if(!terms.checked){
        showError("terms","Ban phai dong y dieu khoan nay");
        return false;
    }

    clearError("terms");
    return true;
}
//submit

form.addEventListener("submit", function(e){

    e.preventDefault();

    let isValid =
        validateFullname() &
        validateEmail() &
        validatePhone() &
        validatePassword() &
        validateConfirmPassword() &
        validateGender() &
        validateTerms();

    if(isValid){

        form.style.display = "none";

        success.textContent =
        "Dang ki thanh cong! " + fullname.value;

    }

});


//bur validate

fullname.addEventListener("blur", validateFullname);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);


//input

fullname.addEventListener("input", ()=>clearError("fullname"));
email.addEventListener("input", ()=>clearError("email"));
phone.addEventListener("input", ()=>clearError("phone"));
password.addEventListener("input", ()=>clearError("password"));
confirmPassword.addEventListener("input", ()=>clearError("confirmPassword"));