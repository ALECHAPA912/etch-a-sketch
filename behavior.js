const grid = document.querySelector("#grid");
const button = document.querySelector("button");
let numberLastGrid = 0;

function random(number) {   //  returns a number beetween 0 and the argument
    return Math.floor(Math.random() * (number + 1));
}

function deleteSquares() {
    for(let i = 0; i < numberLastGrid; i++) {
        let square = document.querySelector(".square");
        grid.removeChild(square);
    }
}

function createSquares(squaresPerSide) {
    let gridWidth = squaresPerSide * 16;
    let numberOfSquares = squaresPerSide * squaresPerSide;
    numberLastGrid = numberOfSquares;
    grid.style.width = gridWidth + "px";
    
    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        let squareOpacity = 1;
        let numberOfMouseOver = 0;

        square.addEventListener("mouseover", function() {
            if (numberOfMouseOver == 0) {
                let rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                square.style.backgroundColor = rndCol;
            }
            else if (numberOfMouseOver <= 10) {
                square.style.opacity = squareOpacity - (numberOfMouseOver * 0.1);
            }
            numberOfMouseOver++;
        });

    }

}

button.addEventListener("click", () => {
    let squaresPerSide = parseInt(prompt("how many squares per side do you want? (enter a value beetween 1-100)"));
    if (squaresPerSide > 0 && squaresPerSide <= 100) {
        if (numberLastGrid > 0) deleteSquares();
        createSquares(squaresPerSide);
    }

    else alert("please enter a correct value (beetween 1-100)");
});


  



