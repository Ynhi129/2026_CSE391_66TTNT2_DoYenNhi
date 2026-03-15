const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const success = document.getElementById("success");

// ===== HÀM HIỂN THỊ LỖI =====

function showError(fieldId, message){
    document.getElementById(fieldId + "Error").textContent = message;
}

function clearError(fieldId){
    document.getElementById(fieldId + "Error").textContent = "";
}

// ===== VALIDATE FULLNAME =====

function validateFullname(){
    const value = fullname.value.trim();
    const regex = /^[A-Za-zÀ-ỹ\s]{3,}$/;

    if(!regex.test(value)){
        showError("fullname","Tên ≥ 3 ký tự và chỉ chứa chữ");
        return false;
    }

    clearError("fullname");
    return true;
}

// ===== VALIDATE EMAIL =====

function validateEmail(){
    const value = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(value)){
        showError("email","Email không hợp lệ");
        return false;
    }

    clearError("email");
    return true;
}

// ===== VALIDATE PHONE =====

function validatePhone(){
    const value = phone.value.trim();
    const regex = /^0\d{9}$/;

    if(!regex.test(value)){
        showError("phone","SĐT phải 10 số và bắt đầu bằng 0");
        return false;
    }

    clearError("phone");
    return true;
}

// ===== VALIDATE PASSWORD =====

function validatePassword(){
    const value = password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!regex.test(value)){
        showError("password","Mật khẩu ≥8 ký tự, có chữ hoa, chữ thường và số");
        return false;
    }

    clearError("password");
    return true;
}

// ===== VALIDATE CONFIRM PASSWORD =====

function validateConfirmPassword(){

    if(confirmPassword.value !== password.value){
        showError("confirmPassword","Mật khẩu không khớp");
        return false;
    }

    clearError("confirmPassword");
    return true;
}

// ===== VALIDATE GENDER =====

function validateGender(){
    const gender = document.querySelector('input[name="gender"]:checked');

    if(!gender){
        showError("gender","Vui lòng chọn giới tính");
        return false;
    }

    clearError("gender");
    return true;
}

// ===== VALIDATE TERMS =====

function validateTerms(){

    if(!terms.checked){
        showError("terms","Bạn phải đồng ý điều khoản");
        return false;
    }

    clearError("terms");
    return true;
}

// ===== SUBMIT =====

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
        "Đăng ký thành công! " + fullname.value;

    }

});


// ===== BLUR VALIDATE =====

fullname.addEventListener("blur", validateFullname);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);


// ===== INPUT CLEAR ERROR =====

fullname.addEventListener("input", ()=>clearError("fullname"));
email.addEventListener("input", ()=>clearError("email"));
phone.addEventListener("input", ()=>clearError("phone"));
password.addEventListener("input", ()=>clearError("password"));
confirmPassword.addEventListener("input", ()=>clearError("confirmPassword"));