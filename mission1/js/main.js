
    var ex1 = prompt("Введите Ваше имя:", "");
  if(ex1.replace(/\D/g, '')){
   document.write('Ваше имя: ' + ex1.toLowerCase());
} else{
	document.write('Ваше имя наобарот: ' + ex1.split("").reverse().join(""));

}