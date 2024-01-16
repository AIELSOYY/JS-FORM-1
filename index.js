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
} 