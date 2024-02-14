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
    var image1 =document.getElementById("profile1").checked;
    var image2 = document.getElementById("profile2").checked;
    var image3 = document.getElementById("profile3").checked;
    var image4 = document.getElementById("profile4").checked;
    

    var adding_image;
    if (image1) {
        adding_image = "../assets/mani.jpg"
    }
    if (image2) {
        adding_image = "../assets/manikanta.jpg"
    }
    if (image3) {
        adding_image = "../assets/gokul.jpg"
    }
    if (image4) {
        adding_image = "../assets/leela.jpg"
    }

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
    let data={
        image:adding_image,   
        name: a1,
        Gender:a5 ? "male" : "female",
        department:l,
        Salary:a2,
        Start_date:a3
    }

    console.log(data);
    
    var editId = getUrlParameter('editId');
    var method = editId ? 'PUT' : 'POST';
    var url = editId ? "http://localhost:3000/data/" + editId : "http://localhost:3000/data";
    
    $.ajax({        
        url: url,
        type: method,
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
          console.log(response);
          window.location.href="../pages/index1.html";
        },
        error: function(error) {
          console.log(error);
        }
      });

}

document.getElementById("cancel").addEventListener('click',func)