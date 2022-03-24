let pick = document.getElementById("pick") ;
let currentJ1 = document.getElementById("currentJ1") ;
let currentJ2 = document.getElementById("currentJ2") ;
let totalJ1 = document.getElementById("totalJ1") ;
let totalJ2 = document.getElementById("totalJ2") ;
let name1 = document.getElementById("name1") ;
let name2 = document.getElementById("name2") ;
let hold = document.getElementById("hold") ;
let game = document.getElementById("game") ;
let rules = document.getElementById("rules") ;   
let player1 = null ;
let player2 = null ;

let resultJ1 = 0 ;
let resultJ2 = 0 ;

let currentTotalJ1 = 0 ;
let currentTotalJ2 = 0 ;

let chiffre = 0 ;

let wins = "" ;

let tryJ1 = 0 ;
let tryJ2 = 0 ;

let tour = null ;

function error(){
    alert('vous devez d\'abord cliquez sur le bouton "Nouvelle partie".') ;
}

function name(){
    player1 = prompt('Quel est le nom du premier joueur ?') ;
    player2 = prompt('Quel est le nom du second joueur ?') ;
}

function winner(){
    if(resultJ1 >= wins){
        alert(`bravo ${player1} vous avez gagné en ${tryJ1} tentatives`) ;
    }else if(resultJ2 >= wins){
        alert(`bravo ${player2} vous avez gagné en ${tryJ2} tentatives`) ;
    }else{

    }
}
//fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
function win(){
                
    if(wins === ""){
        wins = 100 ;
        alert(`Le nombre de points nécessaire pour gagné est de ${wins}`) ;
    }else if(wins >= 6 && wins <= 10000){
        alert(`Le nombre de points nécessaire pour gagné est de ${wins}`) ;
    }else if(wins == null){
        player1 = null ;
        player2 = null ;
        alert('Vous n\'avez pas choisi le nombre de points pour gagné veuillez réappuyer sur le bouton "Nouvelle partie".') ; 
    }else{
        wins = prompt('Veuillez indiqué un chiffre valide,  entre 6 et 10000 :') ;
        win() ;
    }  
   
}

function nop(){
    alert('Veuillez ne pas appuyé ici') ;
}

rules.addEventListener('click', function(){
    alert('Régle du jeu : Ce jeu ce joue à deux joueur le but étant d\'atteindre un certaint nombre de points avant l\'autre joueur en lançant un dé à six faces. Attention si vous obtenez un "1" c\'est à l\'autre joueur de joué. Vous pouvez lancé le dé autant de fois que vous voulez ce qui vas additionner votre score courant et en appuyant sur le boutton "hold" vous l\'ajouterais au score total.') ;
}) ;


pick.addEventListener('click',function(){

    let random = Math.random() * (6 - 1) + 1 ;
    chiffre = Math.round(random) ;
    
    if(tour === true){
        if(resultJ1 >= wins){
            alert(`bravo ${player1} vous avez gagné en ${tryJ1} tentatives`) ;
        }else{
            if(chiffre == 1){
                alert(`${player1} Vous avez PERDU ce round`) ;
                currentTotalJ1 = 0 ;
                currentJ1.value = 0 ;
                tour = false ;
            }else{
                currentTotalJ1 += chiffre ;
                currentJ1.value = currentTotalJ1 ;
            }
            tryJ1++ ; 
        }
    }else if(tour === false){
        if(resultJ2 >= wins){
            alert(`bravo ${player2} vous avez gagné en ${tryJ2} tentatives`) ;
        }else{
            if(chiffre == 1){
                alert(`${player2} vous avez PERDU ce round`) ;
                currentTotalJ2 = 0 ;
                currentJ2.value = 0 ;
                console.log(tour) ;
                tour = true ;
                console.log(tour) ;
            }else{
                currentTotalJ2 += chiffre ;
                currentJ2.value = currentTotalJ2 ;
            }
            tryJ2++ ; 
        }
    }else{
        error() ; 
    }
});


hold.addEventListener('click', function(){
    if(tour === true){
        resultJ1 += currentTotalJ1 ; 
        totalJ1.value = resultJ1 ;   
        tour = false ;
        currentTotalJ1 = 0 ;
    }else if(tour === false) {
        resultJ2 += currentTotalJ2 ;          
        totalJ2.value = resultJ2 ;    
        tour = true ;
        currentTotalJ2 = 0 ;
    }else{
        error() ;
    }
    winner();
}) ;


game.addEventListener('click', function(){
    if(confirm('voulez-vous commencé une nouvelle partie')){

        player1 = null ;
        player2 = null ;
        resultJ1 = 0 ;
        resultJ2 = 0 ;
        
        chiffre = 0 ;
        tryJ1 = 0 ;
        tryJ2 = 0 ;
        tour = null ;
        currentJ1.value = null ;
        currentJ2.value = null ;

        alert('Vous allez commencé une nouvelle partie veuillez tout d\'abord indiqué le nom des deux joueurs') ;
        name() ;

        while(player1 === "" || player2 === ""){
            alert('vous devez rentré un nom pour chaqu\'un des joueurs !') ;
            name() ;
        }

        if(player1 == null || player2 == null ){
            alert('A bientôt') ;
        }else{
            name1.value = player1 ;
            name2.value = player2 ;

           wins = prompt('Veuillez indiqué le nombre de points nécessaire pour gagné (par défaut 100 points):') ;

           win() ;

            if(confirm(`${player1} voulez vous commencé le jeu ?`)){
                tour = true ;
            }else if(confirm(`${player2} voulez vous commencé le jeu ?`)){
                tour = false ;
            }else{
                name1.value = 'joueur 1' ;
                name2.value = 'joueur 2' ;
                alert('Vous n\'avez pas choisi qui commence veuillez réappuyer sur le bouton "Nouvelle partie".') ; 
            }
        }
    }
});

currentJ1.addEventListener('click', nop);

currentJ2.addEventListener('click', nop);

totalJ1.addEventListener('click', nop);

totalJ2.addEventListener('click', nop);

name1.addEventListener('click', nop);

name2.addEventListener('click', nop);