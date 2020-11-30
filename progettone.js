//here I define all what I need later

document.querySelector('#buttonYes').addEventListener('click', yesLike);
document.querySelector('#buttonNo').addEventListener('click', noLike);
document.querySelector('#buttonReset').addEventListener('click', resetLike);

let cakes = ["Broccoli","ChocolateCake","Cheesecake","JamTart"];
let messages = ["ok", "Excellent Choice!", "Great Choice!", "Fantastic choice!"];
let recipes = ["ok",
"Ingredients:\n 225g plain flour \n 350g caster sugar \n 85g cocoa powder \n baking powder, \n 2 free-range eggs \n 250ml milk \n 125ml vegetable oil \n vanilla extract",
"Ingredients: \n 250g digestive biscuits,\n 100g butter, melted, \n vanilla pod \n 600g full fat soft cheese \n 100g icing sugar \n 284ml pot of double cream \n For the topping: \n 400g punnet of strawberries, halved \n 25g icing sugar",
"Ingredients: \n 250g plain flour \n 125g butter \n 1 medium egg \n 1 vanilla pod \n 100g jam of your choice"];
const awwSound = new Audio ('sounds/aww.mp3');

let noChoice = false;
let yesChoice = false;
let selecty = false;

//Button functions 
function noLike() {
    if (yesChoice === false){
        noChoice = true;
        document.querySelector('#writeMe').textContent='Very sorry for you, enjoy your broccoli...';
        awwSound.play();
        //IT'S NOT SHORTER BUT MORE COHERENT. DOES IT MAKE SENSE?
        let im = document.createElement('img');
        im.src = `images/${cakes[0]}.jpeg`;
        document.querySelector('#writeMe2').appendChild(im);

        // let broccoli= document.createElement('img');
        // broccoli.src = 'images/broccolo.png'
        // broccoli.style.width = 150;
        // broccoli.style.height = 150;
        // document.querySelector('#writeMe2').appendChild(broccoli);
    }
}

function yesLike(){
    if (noChoice === false){
        yesChoice = true;
        selecty = true;
        document.querySelector('#writeMe').textContent='Which cake do you like the best?';
        let cakeSelector = document.createElement('select');
        cakeSelector.setAttribute("onchange", "cakeChange(this)");
        
        document.querySelector('#writeMe2').appendChild(cakeSelector);
        var option = document.createElement("option");
            option.value = "Cakes";
            option.text = "Cakes";
            cakeSelector.appendChild(option);

        for (let i = 1; i < cakes.length; i++) {
            //add the options
            var option = document.createElement("option");
            option.value = cakes[i];
            option.text = cakes[i];
            cakeSelector.appendChild(option);
            //add the images
            let im = document.createElement('img');
            im.src = `images/${cakes[i]}.jpeg`;
            document.querySelector('#writeMe2').appendChild(im);
        }
    }
}
//FIRST TRY:
// let optionsCake = ["Chocolate cake","Cheesecake","Jam tart"];
// for (let i = 0; i < optionsCake.length; i++) {
//     var option = document.createElement("option");
//     option.value = optionsCake[i];
//     option.text = optionsCake[i];
//     cakeSelector.appendChild(option);
// }

// for(i=1; i<cakes.length; i++){
//         let im = document.createElement('img');
//         im.src = `images/${cakes[i]}.jpeg`
//         im.style.width = 150;
//         im.style.height = 150;
//         document.querySelector('#writeMe2').appendChild(im);
//     }

// let chocCake = document.createElement('img');
// chocCake.src = 'images/choc.jpeg'
// chocCake.style.width = 150;
// chocCake.style.height = 150;
// document.querySelector('#writeMe2').appendChild(chocCake);
// let cheeseC = document.createElement('img');
// cheeseC.src = 'images/cheese.jpeg'
// cheeseC.style.width = 150;
// cheeseC.style.height = 150;
// document.querySelector('#writeMe2').appendChild(cheeseC);
// let jamTart = document.createElement('img');
// jamTart.src = 'images/jam.jpeg'
// jamTart.style.width = 150;
// jamTart.style.height = 150;
// document.querySelector('#writeMe2').appendChild(jamTart);


function resetLike(){
    document.querySelector('#writeMe').textContent=' ';
    if (yesChoice=== true){
        if(selecty ===true){
            console.log('patata');
            removeYes();
            yesChoice = false;
        } else {
            removeChoice();
            yesChoice = false;
        }

    } else if (noChoice=== true){
        console.log('brocc');
        let broccoli = document.querySelector('#writeMe2').querySelector('img');
        broccoli.remove();

        noChoice = false;

    }

 
}

//back-end

function cakeChange(yourChoice){
    selecty = false;
    for(i=0; i<cakes.length; i++){
        if (yourChoice.value === cakes[i]){
            document.querySelector('#writeMe').textContent=messages[i];
            document.querySelector('#writeMe3').textContent = recipes[i];   
            removeYes();
            let cake = document.createElement('img');
            cake.src = `images/${yourChoice.value}.jpeg`;
            document.querySelector('#writeMe2').appendChild(cake);
        
        }
    }
}
//FIRST TRY:
// }
// if (yourChoice.value === "Cheesecake"){
//     document.querySelector('#writeMe').textContent='Good Choice!'
//     removeYes()
//     let cheesy = document.createElement('img');
//     cheesy.src = 'images/Cheesecake.jpeg'
//     document.querySelector('#writeMe2').appendChild(cheesy);
//     document.querySelector('#writeMe3').textContent = 'Ingredients: \n 250g digestive biscuits,\n 100g butter, melted, \n1 vanilla pod \n 600g full fat soft cheese \n 100g icing sugar \n 284ml pot of double cream \n For the topping: \n 400g punnet of strawberries, halved \n 25g icing sugar'
// }
// if (yourChoice.value === "ChocolateCake"){
//     document.querySelector('#writeMe').textContent='Excellent Choice!'
//     console.log('yee');
//     removeYes()
//     let cheesy = document.createElement('img');
//     cheesy.src = 'images/Cheesecake.jpeg'
//     document.querySelector('#writeMe2').appendChild(cheesy);
//     document.querySelector('#writeMe3').textContent = 'Ingredients: \n 250g digestive biscuits,\n 100g butter, melted, \n1 vanilla pod \n 600g full fat soft cheese \n 100g icing sugar \n 284ml pot of double cream \n For the topping: \n 400g punnet of strawberries, halved \n 25g icing sugar'
// }
// if (yourChoice.value === "Cheesecake"){
//     document.querySelector('#writeMe').textContent='Good Choice!'
//     console.log('yuhuu');
//     removeYes()
//     let cheesy = document.createElement('img');
//     cheesy.src = 'images/Cheesecake.jpeg'
//     document.querySelector('#writeMe2').appendChild(cheesy);
//     document.querySelector('#writeMe3').textContent = 'Ingredients: \n 250g digestive biscuits,\n 100g butter, melted, \n 1 vanilla pod \n 600g full fat soft cheese \n 100g icing sugar \n 284ml pot of double cream \n For the topping: \n 400g punnet of strawberries, halved \n 25g icing sugar'
// }


function removeYes(){
    let cakeSelector = document.querySelector('#writeMe2').querySelector('select');
    cakeSelector.remove();

    let allImages = document.querySelector('#writeMe2').querySelectorAll('img');
    for(i=0; i< allImages.length; i++){
        allImages[i].remove();
    }
}

function removeChoice (){
    let cakeRem = document.querySelector('#writeMe2').querySelector('img');
    document.querySelector('#writeMe3').textContent = ' ';
    cakeRem.remove();
}





//QUESTIONS: 
//is it ok to call broccoli a different variable in different places? I think yes, because I used "let"
//NOLIKE function
//why in cakeChange if I put the recipe at the end it doesn't work?
