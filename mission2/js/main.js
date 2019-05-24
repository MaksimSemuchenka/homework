// создание кнопки 1
var a ='https://drive.google.com/drive/folders/16IMutgp6bCGbhqAXnzGw2oF5VHm6qCfQ';
    
btn1=document.createElement( 'BUTTON'); 
 
btn1.id='cmd1';
 
btn1.textContent ='первая кнопка '; 
document.body.appendChild(btn1); 
 
btn1.onclick=function(){
 window.open(a);
} 

// создание кнопки 2
var 
btn2=document.createElement( 'BUTTON'); // 
 
btn2.id='cmd2';
 
btn2.textContent ='вторая кнопка '; 
 
document.body.appendChild(btn2);

btn2.onclick=function(){ 
document.getElementById('text').style.background = '#8b00ff';
document.getElementById('text2').style.background = '#19ff19';
document.getElementById('text3').style.background = '#ffff00';
document.getElementById('text').style.border = '5px solid #19ff19';
document.getElementById('text2').style.border = '5px solid #ffff00';
document.getElementById('text3').style.border = '5px solid #8b00ff';
document.getElementById('container').style.border = '20px solid';
}

// создание кнопки 3  
btn3=document.createElement( 'BUTTON');

btn3.id='cmd3';

btn3.textContent ='третья кнопка ';

document.body.appendChild(btn3);

btn3.onclick=function(){

//удаление старой разметки	
var elem = document.getElementById("container");

elem.parentNode.removeChild(elem);

//подгрузка html кода
document.body.innerHTML = `
		<div class="header" id="header">
			<div class="headerblock " id="headerblock">
				LOGO
			</div>
			<div class="headerblock" id="headerblock2">
				Блок поиска
			</div>
		</div>	
	<div class="nav" id="nav">
		<div class="navblock" id="navblock1">
			пункт 1
		</div>
		<div class="navblock" id="navblock2">
			пункт 2
		</div>
		<div class="navblock" id="navblock3">
			пункт 3
		</div>
		<div class="navblock" id="navblock4">
			пункт 4
		</div>
		<div class="navblock" id="navblock5">
			пункт 5
		</div>
		<div class="navblock" id="navblock6">
			пункт 6
		</div>
		<div class="navblock" id="navblock7">
			пункт 7
		</div>
	</div>
	<div class="content" id="content">
		<div class="menu" id="menu">
			<div class="menublock" id="menublock1">
				Блок 1
			</div>
			<div class="menublock" id="menublock2">
				Блок 2
			</div>
			<div class="menublock" id="menublock3">
				Блок 3
			</div>
			<div class="menublock" id="menublock4">
				Блок 4
			</div>
			<div class="menublock" id="menublock5">
				Блок 5
			</div>
		</div>
		<div class="rightblock" id="rightblock" >
		</div>
`
//стилизация header
document.getElementById('header').style.background = '#bbbbbb';
document.getElementById('header').style.display = 'flex';
document.getElementById('header').style.height = '70px';
document.getElementById('header').style.width = '100%';
//стилизация headerblock левый
document.getElementById('headerblock').style.background = '#5e9d9f';
document.getElementById('headerblock').style.lineHeight = '70px';
document.getElementById('headerblock').style.height = '100%';
document.getElementById('headerblock').style.width = '350px';
document.getElementById('headerblock').style.fontSize = '24pt';
document.getElementById('headerblock').style.margin = 'auto';
document.getElementById('headerblock').style.textAlign = 'center';
//стилизация headerblock правый
document.getElementById('headerblock2').style.background = '#5e9d9f';
document.getElementById('headerblock2').style.lineHeight = '70px';
document.getElementById('headerblock2').style.height = '100%';
document.getElementById('headerblock2').style.width = '350px';
document.getElementById('headerblock2').style.fontSize = '24pt';
document.getElementById('headerblock2').style.margin = 'auto';
document.getElementById('headerblock2').style.textAlign = 'center';
//стилизация nav 
document.getElementById('nav').style.display = 'flex';
document.getElementById('nav').style.background = '#f4f4dc';
document.getElementById('nav').style.height = '50px';
document.getElementById('nav').style.width = '100%';
//стилизация navblock1
document.getElementById('navblock1').style.flexBasis = '90px';
document.getElementById('navblock1').style.height = '80%';
document.getElementById('navblock1').style.background = '#5e9d9f';
document.getElementById('navblock1').style.fontSize = '16pt';
document.getElementById('navblock1').style.lineHeight = '40px';
document.getElementById('navblock1').style.textAlign = 'center';
document.getElementById('navblock1').style.margin = 'auto';
//стилизация navblock2 
document.getElementById('navblock2').style.flexBasis = '90px';
document.getElementById('navblock2').style.height = '80%';
document.getElementById('navblock2').style.background = '#5e9d9f';
document.getElementById('navblock2').style.fontSize = '16pt';
document.getElementById('navblock2').style.lineHeight = '40px';
document.getElementById('navblock2').style.textAlign = 'center';
document.getElementById('navblock2').style.margin = 'auto';
//стилизация navblock3
document.getElementById('navblock3').style.flexBasis = '90px';
document.getElementById('navblock3').style.height = '80%';
document.getElementById('navblock3').style.background = '#5e9d9f';
document.getElementById('navblock3').style.fontSize = '16pt';
document.getElementById('navblock3').style.lineHeight = '40px';
document.getElementById('navblock3').style.textAlign = 'center';
document.getElementById('navblock3').style.margin = 'auto';
//стилизация navblock4
document.getElementById('navblock4').style.flexBasis = '90px';
document.getElementById('navblock4').style.height = '80%';
document.getElementById('navblock4').style.background = '#5e9d9f';
document.getElementById('navblock4').style.fontSize = '16pt';
document.getElementById('navblock4').style.lineHeight = '40px';
document.getElementById('navblock4').style.textAlign = 'center';
document.getElementById('navblock4').style.margin = 'auto';
//стилизация navblock5
document.getElementById('navblock5').style.flexBasis = '90px';
document.getElementById('navblock5').style.height = '80%';
document.getElementById('navblock5').style.background = '#5e9d9f';
document.getElementById('navblock5').style.fontSize = '16pt';
document.getElementById('navblock5').style.lineHeight = '40px';
document.getElementById('navblock5').style.textAlign = 'center';
document.getElementById('navblock5').style.margin = 'auto';
//стилизация navblock6 
document.getElementById('navblock6').style.flexBasis = '90px';
document.getElementById('navblock6').style.height = '80%';
document.getElementById('navblock6').style.background = '#5e9d9f';
document.getElementById('navblock6').style.fontSize = '16pt';
document.getElementById('navblock6').style.lineHeight = '40px';
document.getElementById('navblock6').style.textAlign = 'center';
document.getElementById('navblock6').style.margin = 'auto';
//стилизация navblock7 
document.getElementById('navblock7').style.flexBasis = '90px';
document.getElementById('navblock7').style.height = '80%';
document.getElementById('navblock7').style.background = '#5e9d9f';
document.getElementById('navblock7').style.fontSize = '16pt';
document.getElementById('navblock7').style.lineHeight = '40px';
document.getElementById('navblock7').style.textAlign = 'center';
document.getElementById('navblock7').style.margin = 'auto';
//стилизация content
document.getElementById('content').style.display = 'flex';
document.getElementById('content').style.paddingTop = '20px';
document.getElementById('content').style.background = '#bbbbbb';
//стилизация menu
document.getElementById('menu').style.display = 'flex';
document.getElementById('menu').style.flexDirection = 'column';
document.getElementById('menu').style.justifyContent = ' flex-start';
document.getElementById('menu').style.width = '20%';
document.getElementById('menu').style.height = '700px';
//стилизация menublock1
document.getElementById('menublock1').style.width = '98%';
document.getElementById('menublock1').style.height = '25px';
document.getElementById('menublock1').style.background = '#5e9d9f';
document.getElementById('menublock1').style.marginBottom = '5%';
document.getElementById('menublock1').style.marginLeft = '2%';
document.getElementById('menublock1').style.lineHeight = '25px';
document.getElementById('menublock1').style.textAlign = 'left';
document.getElementById('menublock1').style.fontSize = '14pt';
document.getElementById('menublock1').style.fontWeight = '900';
//стилизация menublock2
document.getElementById('menublock2').style.width = '98%';
document.getElementById('menublock2').style.height = '25px';
document.getElementById('menublock2').style.background = '#5e9d9f';
document.getElementById('menublock2').style.marginBottom = '5%';
document.getElementById('menublock2').style.marginLeft = '2%';
document.getElementById('menublock2').style.lineHeight = '25px';
document.getElementById('menublock2').style.textAlign = 'left';
document.getElementById('menublock2').style.fontSize = '14pt';
document.getElementById('menublock2').style.fontWeight = '900';
//стилизация menublock3width
document.getElementById('menublock3').style.width = '98%';
document.getElementById('menublock3').style.height = '25px';
document.getElementById('menublock3').style.background = '#5e9d9f';
document.getElementById('menublock3').style.marginBottom = '5%';
document.getElementById('menublock3').style.marginLeft = '2%';
document.getElementById('menublock3').style.lineHeight = '25px';
document.getElementById('menublock3').style.textAlign = 'left';
document.getElementById('menublock3').style.fontSize = '14pt';
document.getElementById('menublock3').style.fontWeight = '900';
//стилизация menublock4
document.getElementById('menublock4').style.width = '98%';
document.getElementById('menublock4').style.height = '25px';
document.getElementById('menublock4').style.background = '#5e9d9f';
document.getElementById('menublock4').style.marginBottom = '5%';
document.getElementById('menublock4').style.marginLeft = '2%';
document.getElementById('menublock4').style.lineHeight = '25px';
document.getElementById('menublock4').style.textAlign = 'left';
document.getElementById('menublock4').style.fontSize = '14pt';
document.getElementById('menublock4').style.fontWeight = '900';
//стилизация menublock5
document.getElementById('menublock5').style.width = '98%';
document.getElementById('menublock5').style.height = '25px';
document.getElementById('menublock5').style.background = '#5e9d9f';
document.getElementById('menublock5').style.marginBottom = '5%';
document.getElementById('menublock5').style.marginLeft = '2%';
document.getElementById('menublock5').style.lineHeight = '25px';
document.getElementById('menublock5').style.textAlign = 'left';
document.getElementById('menublock5').style.fontSize = '14pt';
document.getElementById('menublock5').style.fontWeight = '900';
//стилизация menublock6
document.getElementById('menublock6').style.width = '98%';
document.getElementById('menublock6').style.height = '25px';
document.getElementById('menublock6').style.background = '#5e9d9f';
document.getElementById('menublock6').style.marginBottom = '5%';
document.getElementById('menublock6').style.marginLeft = '2%';
document.getElementById('menublock6').style.lineHeight = '25px';
document.getElementById('menublock6').style.textAlign = 'left';
document.getElementById('menublock6').style.fontSize = '14pt';
document.getElementById('menublock6').style.fontWeight = '900';
//стилизация menublock7
document.getElementById('menublock7').style.width = '98%';
document.getElementById('menublock7').style.height = '25px';
document.getElementById('menublock7').style.background = '#5e9d9f';
document.getElementById('menublock7').style.marginBottom = '5%';
document.getElementById('menublock7').style.marginLeft = '2%';
document.getElementById('menublock7').style.lineHeight = '25px';
document.getElementById('menublock7').style.textAlign = 'left';
document.getElementById('menublock7').style.fontSize = '14pt';
document.getElementById('menublock7').style.fontWeight = '900';
//стилизация rightblock
document.getElementById('rightblock').style.width = '100%';
document.getElementById('rightblock').style.display = 'flex';
document.getElementById('rightblock').style.padding = '0 100px';
}