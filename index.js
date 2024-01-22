//  alert('Noms : ' + document.getElementById('nom').value + ' et ' + document.getElementById('prenom').value);
/*document.getElementById('mon-bouton').onclick = function Calcul() {
    let res = parseInt(document.getElementById('premier-nombre').value) + parseInt(document.getElementById('deuxieme-nombre').value);
    //alert(res);
    document.getElementById('resultat').value = res;
};  */

/*var element = document.getElementById('second');
element.classList.remove('hidden');*/



/*document.getElementById('spoil-button').onclick = function hideSpoilers() {
    var elements = document.getElementsByClassName('spoiler');
    for(var i in elements){
        elements[i].classList.add('hidden');
    }
}*/

/*var element = document.getElementById('premier');
element.style.backgroundColor = 'red';

document.getElementById('second').onclick = function clickHighlight(){
    var element = document.getElementById('second');
    element.style.backgroundColor = 'yellow';
}*/

//Exercice 10.4
/*
document.getElementById('topsAll').onclick = function showAll() { //Montrer tout
    showCategory('all');
}

document.getElementById('topsLudPrat').onclick = function showLudPrat() { //Montrer ludique pratique
    showCategory('ludPrat');
}

document.getElementById('topsLudSpo').onclick = function showLudSpo() { //Montrer ludique sportive
    showCategory('ludSport');
}

document.getElementById('topsPrat').onclick = function showPrat() { //Montrer pratique
    showCategory('prat');
}

function showCategory(category) {
    if(category == 'all'){ 
        elements = document.getElementsByClassName('hidden');
        while(elements.length){
            elements[0].classList.remove('hidden'); //Enlève la classe 'hidden' de tous les éléments ayant la classe 'hidden' afin de tous les afficher
        }
    }
    else{
        elements = document.getElementsByTagName('article'); 
        for(let i =0; i<elements.length; i++){
            if(elements[i].classList.contains(category)){ //Si l'élément appartient à la classe définie, la classe 'hidden' lui est enlevée afin de l'afficher 
                elements[i].classList.remove('hidden');
            }
            else{ //Sinon, on ajoute l'élément 'hidden' afin de cacher l'élément
                elements[i].classList.add('hidden');
            }
        }
    }
}*/

//Exercice 11.1
/*function highlightDiv(event){
    event.currentTarget.parentNode.style.background ="yellow";
}

var buttonElements=document.querySelectorAll("button");
for(let i=0; i<buttonElements.length; i++){
    buttonElements[i].addEventListener("click", (event) => {
        highlightDiv(event);
    });
}*/
/*
var buttonElements=document.querySelectorAll("button");
for(let i=0; i<buttonElements.length; i++){
    buttonElements[i].onclick = function highlightDiv(event){
        event.currentTarget.parentNode.style.background ="yellow";
    }
}*/



//Exercice 11.2
/*
var inputField = document.createElement("input");
var button = document.createElement("button");
var buttonText = document.createTextNode("Vider le champ");
button.appendChild(buttonText);
document.body.appendChild(inputField);
document.body.appendChild(button);

document.querySelector("button").onclick = function removeText(){
    element = document.querySelector("input").value="";
};
*/

//Exercice 12.1
/*
var imgTab = ["https://www.cdiscount.com/pdt2/x/e/n/1/700x700/ls24a336nhuxen/rw/ecran-pc-samsung-s24a336nhu-24-fhd-dalle.jpg", 
"https://content.pearl.fr/media/cache/default/article_ultralarge_high_nocrop/shared/images/articles/K/KT8/clavier-usb-standard-avec-clavier-numerique-ref_KT8426_2.jpg", 
"https://img.20mn.fr/7gT-wskjStmbsXxztMROJyk/1200x768_les-souris-ne-rafolent-pas-du-fromage",
"https://media.carrefour.fr/medias/511e39c5a6cf36dea617fb9b7b3b54e7/p_1500x1500/3616473993380-photosite-20210921-165109-1.jpg"];
var curImg = document.querySelector("img");
curImg.src = imgTab[0];
document.getElementById("nextImgButton").onclick = function nextImg(){
    if(curImg.src != imgTab[imgTab.length-1]){
        curImg.src = imgTab[imgTab.indexOf(curImg.src)+1];    
    }
    else{
        curImg.src = imgTab[0];
    }
    swal("Hello world!");
}
*/

//Exercice 12.2
/*
var imgTab = ["https://www.cdiscount.com/pdt2/x/e/n/1/700x700/ls24a336nhuxen/rw/ecran-pc-samsung-s24a336nhu-24-fhd-dalle.jpg", 
"https://content.pearl.fr/media/cache/default/article_ultralarge_high_nocrop/shared/images/articles/K/KT8/clavier-usb-standard-avec-clavier-numerique-ref_KT8426_2.jpg", 
"https://img.20mn.fr/7gT-wskjStmbsXxztMROJyk/1200x768_les-souris-ne-rafolent-pas-du-fromage",
"https://media.carrefour.fr/medias/511e39c5a6cf36dea617fb9b7b3b54e7/p_1500x1500/3616473993380-photosite-20210921-165109-1.jpg"];
var imgElements = document.querySelectorAll("img");
for(let i = 0; i<imgElements.length; i++){
    imgElements[i].src = imgTab[i];
    console.log(imgElements);
}
document.getElementById("nextImgButton").onclick = function nextImg(){
    let maxIndex=-1;
    for(let i = 0; i<imgElements.length; i++){ //Permet de vérifier si la dernière image est affichée, et garde l'index de l'élément du carroussel qui est en train de l'afficher
        if(imgElements[i].src != imgTab[imgTab.length-1]){
                maxIndex=i;
        }
    }
    if(maxIndex != -1){
        for(let i = 0; i<imgElements.length; i++){
            imgElements[i].src = imgTab[imgTab.indexOf(imgElements[i].src)+1];
        }
    }
    else{
        for(let i = 0; i<imgElements.length; i++){
            if(i==maxIndex){
                imgElements[i]=imgTab[0];
            }
            else{
                imgElements[i].src = imgTab[imgTab.indexOf(imgElements[i].src)+1];
            }
        }
    }
}
*/
//Headers, horloge (potentiellement heure actuelle) fonctionnelle

 var sec;
 while(1){
    
 }