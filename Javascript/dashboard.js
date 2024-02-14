function fun(data){
    let d = document.getElementById("check1");
    for (let i = 0; i < data.length; i++) { 
        var row = document.createElement("tr");
        var emp = data[i];
        const del=document.createElement("button")
        del.id="del"
        del.textContent="Delete" 
        const edi=document.createElement("button");
    
        edi.id="edi"
        edi.textContent="Edit"
        var im;
        var imn;
        var img;
        
        for(var k in emp){
            

            if(k!=="id"){
                if(k==="image"){
               
                    var img = document.createElement("img");
                    img.className = "proImg";
                    img.src =emp[k];
                   
                    }
                else{
                    

                
                
                var cell = document.createElement("td");
                if(k==="name"){
                    var div = document.createElement("div");
                   imn=img+emp[k]
                
                    cell.textContent = img+emp[k];

                    row.appendChild(cell);
                }
                else{
                cell.textContent = emp[k];
                row.appendChild(cell);
                
                row.appendChild(del);
                row.appendChild(edi);}}
        }
    }
    
    
    d.appendChild(row);
    edi.addEventListener("click", function() {
        
        editRecord(emp.id);
        var editId = getUrlParameter('editId');
    
        $(document).on('click', '#edi', function() {
            
            
            editRecord(emp.id);
        });
    });
    
    del.addEventListener("click",function(){
        
        $.ajax({
            url: 'http://localhost:3000/data/' + emp.id,
            method: 'DELETE',
            success: function () {
              check1.removeChild(row);
            },
            error: function (xhr, status, error) {
              console.error('Error deleting employee data', error);
            },
          });
    }
        )
    
        
       
    }
}

$.getJSON("http://localhost:3000/data",function(data){
fun(data)
})


function editRecord(id) {
    // Redirect to the registration page with the ID of the record to be edited
    window.location.href = "index.html?editId=" + id;
}

function getUrlParameter(parameterName) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
}




