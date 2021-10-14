var canvas, backgroundImage;

var questions, Question1;

var question, contestant, quiz;

var input1, input2, inputo1, inputo2, inputo3, inputo4;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
