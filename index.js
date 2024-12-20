function game() {
    var button = document.getElementsByClassName("actionBtn");
    button[0].addEventListener("click", (e)=>{
        var number1 = randomValue();
        var number2 = randomValue();
        
        attImage("img1",number1);
        attImage("img2",number2);
        winner(number1,number2);
    })

    reset();
}

function randomValue(){
    var random = Math.floor(Math.random() * 6);
    return random+1;
}

function attImage(nameClass,value){
    var image = document.getElementsByClassName(nameClass)[0];
    var newSrc = "images/dice"+value+".png";
    image.setAttribute("src",newSrc);
}

function winner(number1, number2){
    var title = document.querySelector("h1");

    switch (true){
        case number1 > number2:
            title.innerHTML = "Player 1 Wins"
            break;

        case number1 < number2:
            title.innerHTML = "Player 2 Wins"
            break;

        case number1 == number2:
            title.innerHTML = "Draw"
            break;
    }
}

function reset(){
    var button = document.getElementsByClassName("actionBtn");
    button[1].addEventListener("click", (e)=>{
        document.querySelector("h1").innerHTML = "Click Me"

        attImage("img1",6);
        attImage("img2",6);
    })
}

game();