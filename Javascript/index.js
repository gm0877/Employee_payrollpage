function func(){
    let a1=document.getElementById("nameid").value;
    let a2=document.getElementById("salary1").value;
    let a3=document.getElementById("same6").value;
    let a4=document.getElementById("notes").value;
    let a5=document.getElementById("gcheck").checked;
    
    let d1=document.getElementById("same4").checked;
    let d2=document.getElementById("same12").checked;
    let d3=document.getElementById("same13").checked;
    let d4=document.getElementById("same14").checked;
    let d5=document.getElementById("same15").checked;

    l=[]
    if(d1){
        l.push('HR')
    }
    else if(d2){
        l.push('Sales')
    }
    else if(d3){
        l.push('Finance')
    }
    else if(d4){
        l.push('Engineer')
    }
    else{
        l.push('Others')
    }
    let obj={
        "name":a1,
        "Gender":a5 ? "male" : "female",
        "Salary":a2,
        "Start_date":a3,
        "Notes":a4,
        "department":l

        
    }
    console.log(obj)


}
document.getElementById("cancel").addEventListener("click",function(){
    func();
});














































































// document.getElementById("employeeForm").addEventListener("submit",function(event){
//     event.preventDefault();

// var name = document.querySelector('.name').value;


// var selectedPhoto = document.querySelector('input[name="profilePhoto"]:checked').value;


// var selectedGender = document.getElementById('option1').checked;

// var q=selectedGender? "male":"female";

// var selectedDepartments = [];
// var hr=document.getElementById('op1').checked;
// var sales=document.getElementById('op2').checked;
// var finance=document.getElementById('op3').checked;

// if (hr==true){





