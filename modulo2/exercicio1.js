var containerElement = document.querySelector('#app');
var buttonElement = document.createElement('button');
var textButton = document.createTextNode('Criar quadrado');
buttonElement.appendChild(textButton);
containerElement.appendChild(buttonElement);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonElement.onclick = function() {
    var quadrado = document.createElement('div');
    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = '#f00';
    
    quadrado.onmouseover =  function(){
        quadrado.style.backgroundColor = getRandomColor();
    }
    
    containerElement.appendChild(quadrado);
}