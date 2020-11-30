//here I define all what I need later

document.querySelector('#buttonYes').addEventListener('click', yesLike)
document.querySelector('#buttonNo').addEventListener('click', noLike)
document.querySelector('#buttonReset').addEventListener('click', resetLike)

let cakes = ["Broccoli","Chocolate cake","Cheesecake","Jam tart"];
console.log(cakes[1]);
const awwSound = new Audio ('sounds/aww.mp3');

let noChoice = false;
let yesChoice = false;

//Button functions 
function noLike() {
    if (yesChoice === false){
        noChoice = true;
        document.querySelector('#writeMe').textContent='Very sorry for you, enjoy your broccoli...';
        awwSound.play();

        //forse da qui si può accorciare
        let broccoli= document.createElement('img');
        broccoli.src = 'images/broccolo.png'
        broccoli.style.width = 150;
        broccoli.style.height = 150;
        document.querySelector('#writeMe2').appendChild(broccoli);
    }
}

function yesLike(){
    if (noChoice === false){
        yesChoice = true;
        document.querySelector('#writeMe').textContent='Which cake do you like the best?';
        let cakeSelector = document.createElement('select');
        cakeSelector.setAttribute("onchange", "cakeChange(this)");
        console.log(cakeSelector)
        let optionsCake = ["Chocolate cake","Cheesecake","Jam tart"];
        for (let i = 0; i < optionsCake.length; i++) {
            var option = document.createElement("option");
            option.value = optionsCake[i];
            option.text = optionsCake[i];
            cakeSelector.appendChild(option);
        }
        document.querySelector('#writeMe2').appendChild(cakeSelector);

        //da qui si può accorciare
    //     for(i=1; i<cakes.length; i++){
    //         let cakes[i] = document.createElement('img');
    //         cakes[i].src = 'images/choc.jpeg'
    //         cakes[i].style.width = 150;
    //         cakes[i].style.height = 150;
    //         document.querySelector('#writeMe2').appendChild(cakes[i]);
    //     }
    // }
       
        let chocCake = document.createElement('img');
        chocCake.src = 'images/choc.jpeg'
        chocCake.style.width = 150;
        chocCake.style.height = 150;
        document.querySelector('#writeMe2').appendChild(chocCake);
        let cheeseC = document.createElement('img');
        cheeseC.src = 'images/cheese.jpeg'
        cheeseC.style.width = 150;
        cheeseC.style.height = 150;
        document.querySelector('#writeMe2').appendChild(cheeseC);
        let jamTart = document.createElement('img');
        jamTart.src = 'images/jam.jpeg'
        jamTart.style.width = 150;
        jamTart.style.height = 150;
        document.querySelector('#writeMe2').appendChild(jamTart);
}



//when you press yes you can't press no until the reset and viceversa.OK
//when you press reset: reset! OK
// three options: 
// onclick all become the same cake
// THIS onclick there is just one cake and the recipe
// onclick it appears a button generatecake and you can generate as many cakes you like
// THIS random button
//reset button, not necessary!

function resetLike(){
    document.querySelector('#writeMe').textContent=' '
    if (yesChoice=== true){
        console.log('patata');
        let cakeSelector = document.querySelector('#writeMe2').querySelector('select');
        cakeSelector.remove();
    
        let allImages = document.querySelector('#writeMe2').querySelectorAll('img');
        for(i=0; i< allImages.length; i++){
            allImages[i].remove();
        }
        yesChoice = false;
    } else if (noChoice=== true){
        console.log('brocc');
        let broccoli = document.querySelector('#writeMe2').querySelector('img');
        broccoli.remove();
        noChoice = false;

    }

 
}

//back-end

function cakeChange(yourChoice){
    console.log('hey')
    if (yourChoice.value === "Cheesecake"){
        console.log('yuhuu')
    }
}


// function rpsFrontEnd(humanChoice, finalMessages, computerChoice){

//     var imagesDataBase = {
//         1 :document.getElementById('rock').src,
//         2 :document.getElementById('paper').src,
//         3 :document.getElementById('scissor').src
//     }
//     console.log(imagesDataBase[humanChoice]);
//     document.getElementById('rock').remove()
//     document.getElementById('paper').remove()
//     document.getElementById('scissor').remove()


//     //remove images
//     //image with id =yourChoice.id on the right with the blue hover
//     //image with id =comp on the right with the red hover
//     // message in the middle colore
//     var humanDiv = document.createElement('div');
//     var computerDiv = document.createElement('div');
//     var messageDiv = document.createElement('div');

//     humanDiv.innerHTML = "<img src='" +imagesDataBase[humanChoice] +"'height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
//     messageDiv.innerHTML = "<h1 style='color:" + finalMessages['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessages['message'] + "</h1>"
//     computerDiv.innerHTML = "<img src='" +imagesDataBase[computerChoice] +"'height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

//     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
//     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
//     document.getElementById('flex-box-rps-div').appendChild(computerDiv);

// }




//QUESTIONS: is it ok to call broccoli a different variable in different places? I think yes, because I used let