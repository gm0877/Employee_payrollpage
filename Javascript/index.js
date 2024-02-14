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

    let l=[]
    if(d1){
        l.push('HR')
    }
    if(d2){
        l.push('Sales')
    }
    if(d3){
        l.push('Finance')
    }
    if(d4){
        l.push('Engineer')
    }
    if(d5){
        l.push('Others')
    }
    
    let obj={
        "name":a1,
        "Gender":a5 ? "male" : "female",
        "department":l,
        "Salary":a2,
        "Start_date":a3
    }
 
    console.log(obj);
 


}
document.getElementById("cancel").addEventListener("click",function(){
    func();
});








