
 
  
  function convert() {
         
        let num = document.getElementById("text").value;
       
            let binary ="";
            while (num > 0) {
                binary = (num % 2) + binary;
                num = Math.floor(num / 2);
            }
            document.getElementById("show").innerHTML = binary || "0"; // Display "0" if binary is empty 
        }
       
  
 

 
 
    

 
 
 

 
