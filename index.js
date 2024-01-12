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

document.getElementById('topsAll').onclick = function showAll() { //Montrer tout
    var elements = document.getElementsByClassName('hidden');
    while(elements.length){
        elements[0].classList.remove('hidden');
    }
}

document.getElementById('topsLudPrat').onclick = function showLudPrat() { //Montrer ludique pratique
    var elements = document.getElementsByTagName('article');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')!= true){
            elements[i].classList.add('hidden');
        }
    }
    elements = document.getElementsByClassName('ludPrat');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')== true){
            elements[i].classList.remove('hidden');
        }
    }
}

document.getElementById('topsLudSpo').onclick = function showLudSpo() { //Montrer ludique sportive
    var elements = document.getElementsByTagName('article');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')!= true){
            elements[i].classList.add('hidden');
        }
    }
    elements = document.getElementsByClassName('ludSport');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')== true){
            elements[i].classList.remove('hidden');
        }
    }
}

document.getElementById('topsPrat').onclick = function showPrat() { //Montrer pratique
    var elements = document.getElementsByTagName('article');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')!= true){
            elements[i].classList.add('hidden');
        }
    }
    elements = document.getElementsByClassName('prat');
    statLength = elements.length;
    for(let i =0; i<statLength; i++){
        if(elements[i].classList.contains('hidden')== true){
            elements[i].classList.remove('hidden');
        }
    }
}