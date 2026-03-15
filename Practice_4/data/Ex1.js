//Lay cac phan tu can tac dong
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addButton = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");
//Gan su kien click cho nut "Them"
addButton.addEventListener("click",function(){
    const studentName = nameInput.value.trim();
    const studentScore = parseFloat(scoreInput.value);
    if(!studentName){
        alert("Vui long nhap ho ten");
        return;
    }
    if(isNaN(studentScore) || studentScore < 0 || studentScore > 10){
        alert("Vui long nhap diem tu 0 den 10");
        return;
    }
    //tao hang moi va them vao bang
    const newRow = document.createElement("tr");
    const sttCell = document.createElement("td");
    sttCell.textContent = "";
    const nameCell = document.createElement("td");
    nameCell.textContent = studentName;
    const scoreCell = document.createElement("td");
    scoreCell.textContent = studentScore.toFixed(1);
    const rankCell = document.createElement("td");
    rankCell.textContent = getRank(studentScore);
    //Boi vang sv diem duoi 5.0
    if(studentScore < 5){
        newRow.style.backgroundColor = "yellow";
    }
    const actionCell = document.createElement("td");
    //Tao nut xoa trong o trang thai
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "Xoa";
    deleteButton.addEventListener("click", function(){
        const rowToDelete = this.closest("tr");
        tableBody.removeChild(rowToDelete);
        updateStudentOrder();
        updateStats();
    });
    actionCell.appendChild(deleteButton);


    newRow.appendChild(sttCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(scoreCell);
    newRow.appendChild(rankCell);
    newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);
    //Cap nhat STT
    nameInput.value = "";
    scoreInput.value = "";
    updateStudentOrder();
    updateStats();
});
function updateStudentOrder(){
    const rows = tableBody.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++){
        rows[i].cells[0].textContent = i + 1;
    }
}
function getRank(score){
    if(score >= 8.5){
        return "Gioi";
    }else if(score >= 7.0){
        return "Kha";
    }else if(score >= 5.0){
        return "Trung binh";
    }else{
        return "Yeu";
    }    
}
function updateStats(){
    const rows = tableBody.getElementsByTagName("tr");
    const totalStudents = rows.length;
    let totalScore = 0;                     
    for(let i = 0; i < rows.length; i++){
        totalScore += parseFloat(rows[i].cells[2].textContent);
    }
    const averageScore = totalStudents > 0 ? (totalScore / totalStudents).toFixed(2) : 0;
    stats.textContent = `Tong so sinh vien: ${totalStudents} - Diem trung binh: ${averageScore}`;
}
//Nut enter de them sinh vien
scoreInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){      
        addButton.click();
    }
});           

