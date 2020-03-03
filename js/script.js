var cont = document.getElementById("container");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function goToSite(){ 
    location.href = 'http://tut.by' 
}

var defoultStyle = true;
function changeStyle(){
    if(defoultStyle == true){
        cont.style.backgroundColor = "#333";
        document.body.style.background = "#456762";
        cont.style.flexDirection = "column";
        defoultStyle = false;
    }else{
        cont.style.backgroundColor = "aqua";
        document.body.style.background = "none";
        cont.style.flexDirection = "row";
        defoultStyle = true;
    }
    
}

function layoutChange(){
    document.body.innerHTML = "";


    var box1 = document.createElement('section');
    
    var box2 = document.createElement('div');
    var box3 = document.createElement('div');
    var box4 = document.createElement('div');

    document.body.appendChild(box1);

    box1.classList.add('container');
    box1.id = 'container';
    

    box1.appendChild(box2);
    box1.appendChild(box3);
    box1.appendChild(box4);

    box2.classList.add('box');
    box2.id = 'box2';
    box3.classList.add('box');
    box3.id = 'box3';
    box4.classList.add('box');
    box4.id = 'box4';

    container.style.cssText = `
        display: flex; 
        justify-content: space-around;
        flex-direction: column;
    `;

    box2.style.cssText = `        
        background-color: yellow;    
        height: 100px;
        margin: 1%;
    `;
    box3.style.cssText = `        
        background-color: green;    
        height: 400px;
        margin: 1%;
    `;
    box4.style.cssText = `        
        background-color: red;    
        height: 100px;
        margin: 1%;
    `;
}

var term = {
    Belarus: 10,
    Denmark: 13,
    Norway: 22,
    Switzerland: 9,
    Portugal: 7,
    Spain: 50
}


function averageTerm(){
    let sum = 0;
    let amount = 0;
    for(key in term){
        sum += term[key];
        amount++;
    }
    let averageValue = sum/amount;
    alert("Average temperature: " + averageValue);
}

for (key in term){
    var max = term[key]; 
    break;
}

function maxTerm(term){
    
    for(key in term){
        if(max < term[key]){
            max = term[key];
        }
    }
    alert("Maximum temperature: " + max);
}

averageTerm();
console.log(max);
maxTerm(term);
    