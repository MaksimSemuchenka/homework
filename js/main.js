function blockA(element_id) {
    if (document.getElementById(element_id)) { 
         var obj = document.getElementById(element_id); 
         if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
         else obj.style.display = "none";
    }
 
}   
 
function blockB(element_id) {
    if (document.getElementById(element_id)) { 
         var obj = document.getElementById(element_id); 
         if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
         else obj.style.display = "none";
    }
 
} 

function blockC(element_id) {
    if (document.getElementById(element_id)) { 
         var obj = document.getElementById(element_id); 
         if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
         else obj.style.display = "none";
    }
 
}   
 
function blockD(element_id) {
    if (document.getElementById(element_id)) { 
         var obj = document.getElementById(element_id); 
         if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
         else obj.style.display = "none";
    }
 
} 

function blockE(element_id) {
    if (document.getElementById(element_id)) { 
         var obj = document.getElementById(element_id); 
         if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
         else obj.style.display = "none";
    }
 
}     

function validate(){
   var y = document.forms["form"]["email"].value;

   if (y.length == 1){
       document.getElementById('send').style.animation = 'RepColor 2s both';
        
      return false;
   }

   at=y.indexOf("@");
   dot=y.indexOf(".");
   
   if (at < 1 || dot < 1){
       document.getElementById('send').style.animation = 'RepColor 2s both';
    
      return false;
   }
   
}
   
