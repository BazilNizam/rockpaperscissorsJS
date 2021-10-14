function rpsGame(yourchoice){

    console.log(yourchoice);
    var humanChoice, botchoice;
    humanChoice = yourchoice.id;
    botchoice = numbertochoice(randomtorpsInt());

    console.log('computerchoice:',botchoice);
    results = decideWinner(humanChoice,botchoice);

    console.log(results);
    message = finalmessage(results);
    console.log(message);  //u won

    rpsFrontEnd(yourchoice.id, botchoice, message);

}


function randomtorpsInt(){

        return Math.floor(Math.random() * 3);

}


function numbertochoice(number) {

    return  ['rock', 'paper', 'scissors'][number];
   
}

function decideWinner(yourchoice,computerChoice) {
    var rpsDatabase ={

        'rock': { 'scissors': 1, 'rock': 0.5 ,'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0}

        }


    var yourscore = rpsDatabase[yourchoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourchoice];

    return[yourscore, computerScore]

}


function finalmessage([yourscore, computerScore]){
    if(yourscore === 0){
        return {'message' : "YOU LOST", 'color': 'red'}

    }else if (yourscore === 0.5){
        return {'message': 'YOU TIE', 'color': 'yellow' }

    } else{
        return{'message': 'YOU WON', 'color': 'green'}
    }

}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

    var imagesDatabase = {

        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,

    }

    // remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] +"' height = 300 width = 300 >"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);




}