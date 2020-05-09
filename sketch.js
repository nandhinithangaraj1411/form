var canvas;
var database;
var voter;
var form;


function setup(){
    database=firebase.database();
    canvas=createCanvas(800,600)
    form=new Form();
    voter=new Voter();
    
}
function draw(){
    form.display();
    voter.update();
}
