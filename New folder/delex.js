var myColor = document.getElementsByClassName("colors"),

    myColorFle = document.getElementsByName('color-flex'),

    myButtonP = document.getElementsByClassName('slider-content'),
    i , myLinks = document.links;
    console.log(myLinks.length)


for (i = 0 ; i< myColor.length; i+=1){
    switch (i){
        case 0:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].classList.add('change1');
                    myButtonP[j].children[2].removeAttribute('style');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = "#00bc95"
                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#00bc95';
                    })
                }
                myLinks[0].removeAttribute("style"); 
            }
            break;
            
        case 1:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#d13a7a');
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#d13a7a';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#d13a7a';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #d13a7a'); 
            }
            
            break; 

        case 2:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#e24348');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#e24348';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#e24348';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #e24348'); 
            } 
            break;
        case 3:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#1aace7');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#1aace7';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#1aace7';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #1aace7'); 
            } 
            break;
        case 4:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#6a5a8c');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#6a5a8c';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#6a5a8c';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #6a5a8c'); 
            } 
            break;
        case 5:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#F94c00');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#F94c00';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#F94c00';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #F94c00'); 
            } 
            break; 
        case 6:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#1f7f5c');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#1f7f5c';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#1f7f5c';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #1f7f5c'); 
            } 
            break;
        case 7:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#336699');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#336699';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#336699';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #336699'); 
            } 
            break;  
                
        case 8:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#Fbce43');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#Fbce43';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#Fbce43';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #Fbce43'); 
            } 
            break;
        case 9:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#a06081');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#a06081';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#a06081';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #a06081'); 
            } 
            break;  
        case 10:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#737f97');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#737f97';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#737f97';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #737f97'); 
            } 
            break;  
        case 11:
            myColor[i].onclick = function (){
                for ( j = 0 ; j<myButtonP.length; j++){
                    myButtonP[j].children[2].setAttribute('style', 'background-color:#9932cc');
                }
                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseover' , ()=> {
                        myLinks[l].style.color = '#9932cc';

                    })
                }

                for ( let l=0;l<myLinks.length; l+=1){
                    myLinks[l].addEventListener('mouseout' , ()=> {
                        myLinks[l].style.color = '#cacaca';
                        myLinks[0].style.color ='#9932cc';
                    })
                }

                myLinks[0].setAttribute("style", 'color: #9932cc'); 
            } 
            break;        
    }   
}

var myIconDiv = document.querySelectorAll('.icon'),
    myColorBox = document.querySelectorAll('.color-box');

myIconDiv[0].onclick = function (){
    myColorBox[0].classList.toggle("move");
}

var myLoading = document.querySelector('.loading');




window.onload = () => {

    this.setTimeout(()=> {
 
         myLoading.setAttribute('style',"opacity:0; visibility:hidden")
    }, 500)
 }

/* START TESTI MONIALS */
 let mybullets = document.querySelectorAll(".bullets"),
     testiContent = document.querySelectorAll('.testi-content'),
     testChild = document.querySelectorAll('.test-child'),
     testimon = document.querySelectorAll('.testimonials')


 for (let i = 0; i<mybullets.length; i+=1){

    mybullets[i].onclick = () => {

       switch(i) {
           case 0:
               mybullets[i].setAttribute('style', 'background-color:#869791');
               mybullets[1].removeAttribute('style', 'background-color:#869791');
               mybullets[2].removeAttribute('style', 'background-color:#869791');
               
               testChild[0].setAttribute('style' , "transform:translate(0px); transition: all 1s ease-in-out;")
               testChild[1].setAttribute('style' , "transform:translate(0px); transition: all 1s ease-in-out")
               testChild[2].setAttribute('style' , "transform:translate(0px); transition: all 1s ease-in-out")
               break;
           case 1: 
               mybullets[i].setAttribute('style', 'background-color:#869791');
               mybullets[0].removeAttribute('style', 'background-color:#869791');
               mybullets[2].removeAttribute('style', 'background-color:#869791');
               
               testChild[0].setAttribute('style' , "transform:translate(-1025px); transition: all 1s ease-in-out")
               testChild[1].setAttribute('style' , "transform:translate(-1025px); transition: all 1s ease-in-out")
               testChild[2].setAttribute('style' , "transform:translate(-1025px); transition: all 1s ease-in-out")
               
               break;
            case 2: 
               mybullets[i].setAttribute('style', 'background-color:#869791');
               mybullets[1].removeAttribute('style', 'background-color:#869791');
               mybullets[0].removeAttribute('style', 'background-color:#869791');
            
               testChild[0].setAttribute('style' , "transform:translate(-2050px); transition: all 1s ease-in-out")
               testChild[1].setAttribute('style' , "transform:translate(-2050px); transition: all 1s ease-in-out")
               testChild[2].setAttribute('style' , "transform:translate(-2050px); transition: all 1s ease-in-out")
            break;}
    }
   
 }


 /* END TESTI MONIALS */
 
 /* form field */

 let myInput = document.querySelectorAll('input');
 let myTextArea = document.querySelector('textarea')
    
 for (let p=0; p<myInput.length;p+=1){
    myInput[p].onfocus = ()=>{
      if (p === 0){
          myInput[p].value = "";

      } else {
          myInput[p].value =""
      }
    }
};

myInput[0].addEventListener ('blur', ()=> {
    myInput[0].value = "name";
})

myInput[1].addEventListener ('blur', ()=> {
    myInput[1].value = "e-mail"
}) 


myTextArea.addEventListener('focus', ()=> {
    myTextArea.textContent = ''
})

myTextArea.addEventListener('blur', ()=> {
    myTextArea.textContent = 'message'
})

window.onscroll = () => {
    
    document.querySelectorAll('nav')[0].style.backgroundColor = '#FFF'
    document.querySelectorAll('nav .header h1')[0].style.color = '#333'
    document.querySelectorAll('nav')[0].style.boxShadow = '0 0 10px #333'

    if (window.pageYOffset === 0) {
        document.querySelectorAll('nav')[0].style.backgroundColor = 'transparent'
        document.querySelectorAll('nav .header h1')[0].style.color = '#FFF'
        document.querySelectorAll('nav')[0].style.boxShadow = 'none'
    }
}

console.log(document.images[0])