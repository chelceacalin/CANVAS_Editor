// Settings 
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Global Variables
let width = canvas.width; // Width of canvas
let height = canvas.height; // Height of canvas
let mouseMarginLeft; // X coordinate
let mouseMarginTop; // Y coordinate
let index_of_dragging_Shape; // we want to see where the item is in the list
let isDragging = false; // if it found an item, we should let the user drag it where it eants
let indexSeen; // if it found at least one item in the canvas when clicked
let index; // get Shape a certain position ( get shape at position )
let CurrentObject; // the object that I am holding right now with dragging true
let indexShape; // same thing but for another function

//Arrange Colors In MenuDrawingCoordinates
let indentare = 5;
let indentareVerticala = 15;
let ColorToDraw = "white"; // We Will choose a color from the options
let menuWidth = 200;

//Get color to be able to paint desires color
let colors = [{
        left: 5 + indentare,
        top: 725 + indentareVerticala,
        width: 30,
        height: 30,
        color: "rgb(255,0,0)"
    },
    {
        left: 40 + indentare,
        top: 725 + indentareVerticala,
        width: 30,
        height: 30,
        color: "rgb(0,0,255)"
    },

    {
        left: 75 + indentare,
        top: 725 + indentareVerticala,
        width: 30,
        height: 30,
        color: "rgb(0,255,0)"
    },
    {
        left: 110 + indentare,
        top: 725 + indentareVerticala,
        width: 30,
        height: 30,
        color: "rgb(255, 165, 0)"
    },
    {
        left: 145 + indentare,
        top: 725 + indentareVerticala,
        width: 30,
        height: 30,
        color: "rgb(238, 130, 238)"
    }
];



let imagineEraser = {
    left: 38,
    top: 500,
    width: 100,
    height: 80,
};

//Draw Right Side Menu
function drawMenu() {
    context.fillStyle = "rgb(4, 59, 92)";
    context.beginPath();
    context.rect(0, 0, menuWidth, height);
    context.fill();

    //Background Rectangle
    context.beginPath();
    context.fillStyle = "rgb(90,90,90)";
    context.roundRect(38, 140, 100, 90);
    context.fill();
    context.closePath();

    // Blue Rectangle Drawing
    context.beginPath();
    context.fillStyle = ColorToDraw;
    context.rect(55, 155, 65, 65);
    context.fill();
    context.closePath();

    //Background Circle
    context.beginPath();
    context.fillStyle = "rgb(90,90,90)";
    context.roundRect(38, 255, 100, 90);
    context.fill();
    context.closePath();

    //Pink Circle Drawing
    context.beginPath();
    context.fillStyle = "magenta";
    context.arc(87, 300, 35, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    //Background Line
    context.beginPath();
    context.fillStyle = "rgb(90,90,90)";
    context.roundRect(38, 370, 100, 90);
    context.fill();
    context.closePath();

    //Red Line Drawing
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.moveTo(50, 390);
    context.lineTo(130, 450);
    context.stroke();
    context.closePath();

    //Draw Text for Color Picker
    context.fillStyle = "white";
    context.font = '24px serif';
    context.fillText('Choose a color', 25, 710);

    //Draw Color Options
    context.beginPath();
    context.fillStyle = "rgb(90,90,90)";
    context.roundRect(0, 730, 200, 90);
    context.fill();
    context.closePath();

    //Red Color
    context.beginPath();
    context.fillStyle = "rgb(255,0,0)";
    context.roundRect(5 + indentare, 725 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Blue Color
    context.beginPath();
    context.fillStyle = "rgb(0,0,255)";
    context.roundRect(40 + indentare, 725 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Green Color
    context.beginPath();
    context.fillStyle = "rgb(0,255,0)";
    context.roundRect(75 + indentare, 725 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Orange Color
    context.beginPath();
    context.fillStyle = "rgb(255, 165, 0)";
    context.roundRect(110 + indentare, 725 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();


    //Pink Color
    context.beginPath();
    context.fillStyle = "rgb(238, 130, 238)";
    context.roundRect(145 + indentare, 725 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Eraser
    //Draw Text for Color Picker


    context.beginPath();
    context.fillStyle = "rgb(50,50,120)";
    context.rect(imagineEraser.left + 10, imagineEraser.top + 10, imagineEraser.width - 20, imagineEraser.height - 25);
    context.fill();
    context.closePath();

    context.fillStyle = "white";
    context.font = '16 serif';
    context.fillText('Erase', imagineEraser.left + 25, imagineEraser.top + 45);

}





let menuDrawingCoordinatesSquare = [{
    marginLeft: 55,
    marginTop: 150,
    width: 65,
    height: 65,
    color: "blue"
}]





// Class for a single shape
class Shape {
    constructor(marginLeft, marginTop, width, height, color) {
        this.marginLeft = marginLeft;
        this.marginTop = marginTop;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    toString() {
        return `Shape: \nLeft: ${this.marginLeft}, Top: ${this.marginTop}, Width: ${this.width}, Height: ${this.height}, Color: ${this.color}`;
    }
}
// Class for array of shapes
class Shapes {
    constructor() {
        this.figuri = [];
    }

    addShape(marginLeft, marginTop, width, height, color) {
        let shape = new Shape(marginLeft, marginTop, width, height, color);
        this.figuri.push(shape);
        //console.log(this.figuri);
        //console.log(shapes.shapes[0]);
        this.marginLeft = marginLeft;

    }


    get allShapes() {
        return this.figuri
    }

    removeItemAtPosition(position) {
        this.figuri.splice(position, 1);
    }

    removeAllShapes() {
        this.figuri = [];
        shapes.addShape(0, 0, 0, 0, "red");
    }

    getShapeAtPosition(positition) {
        index = 0;
        for (let figura in shapes.allShapes) {
            if (positition === 0) {
                return figura;
            } else {
                index = positition - 1;
                if (positition > 0) {
                    index++;
                    if (index === positition) {
                        //console.log(index);
                        return this.figuri[index] != null ? this.figuri[index] : new Shape(0, 0, 0, 0, "white");
                    }
                }
            }

        }
    }

    drawShapes() {
        context.clearRect(0, 0, width, height); //curat tot
        drawMenu();
        for (let fig of this.figuri) {
            context.fillStyle = fig.color;
            context.fillRect(fig.marginLeft, fig.marginTop, fig.width, fig.height);
        }
    }


}
// il folosesc si pt getShapeAtPosition ( hoisting )
let shapes = new Shapes();
shapes.addShape(0, 0, 0, 0, "red"); // keep this hidden ( you can't move it)
//Draw the shapes 
shapes.drawShapes();

//for (let figura of shapes.allShapes) {
//   console.log(figura);
//}
//console.log(shapes.getShapeAtPosition(2));


// Boolean fuunction to determine if clicked on shape or not
let clicked_on_shape = (clickedX, clickedY, shapes) => {
    let cornerLeft = shapes.marginLeft;
    let cornerTop = shapes.marginTop;
    let cornerRight = shapes.marginLeft + shapes.width;
    let cornerBottom = shapes.marginTop + shapes.height;

    if (clickedX > cornerLeft && clickedX < cornerRight && clickedY > cornerTop && clickedY < cornerBottom) {
        return true;
    } else {
        return false;
    }
}

//console.log(clicked_on_shape(155, 55, shapes.getShapeAtPosition(1)));

//Event Listeners for the canvas
canvas.addEventListener('mousedown', (action) => {
    action.preventDefault();
    mouseMarginLeft = parseInt(action.x);
    mouseMarginTop = parseInt(action.y);

    let indexShape = 0;
    let indexSeen = 0;
    for (let elem of shapes.allShapes) {
        if (clicked_on_shape(mouseMarginLeft, mouseMarginTop, elem)) {
            indexSeen = 1;
            index_of_dragging_Shape = indexShape;
            isDragging = true;
            return;
        }
        indexShape++;
    }
    if (indexSeen === 0) {
        //     console.log("My Controls:    ", mouseMarginLeft, mouseMarginTop, "\nActual Controls:\n");
        for (let elem of shapes.allShapes) {
            //       console.log(elem.marginLeft, elem.marginTop);
        }
    }



    //Choose color and let the user draw more shapes
    let posClickedX = action.x;
    let posClickedY = action.y;
    for (let colorPicked of colors) {
        if (posClickedX >= colorPicked.left && posClickedX <= colorPicked.left + colorPicked.width && posClickedY >= colorPicked.top && posClickedY <= colorPicked.top + colorPicked.height) {
            ColorToDraw = colorPicked.color;
            drawMenu();
        }
    }
    //Draw Shape When Clicked on Square
    for (let obj of menuDrawingCoordinatesSquare) {
        if (posClickedX > obj.marginLeft && posClickedX < obj.marginLeft + obj.width &&
            posClickedY > obj.marginTop && posClickedY < obj.marginTop + obj.height) {
            shapes.addShape(obj.marginLeft + 250, obj.marginTop, obj.width, obj.height, ColorToDraw);
            shapes.drawShapes();
        } else {
            // console.log("Mine:", posClickedX, posClickedY, "\n", "Actual:", obj.marginLeft, obj.marginTop);

        }
    }



    //Apasam pe eraser
    if (posClickedX >= imagineEraser.left + 10 && posClickedX <= imagineEraser.left + 10 + imagineEraser.width - 20 && posClickedY >= imagineEraser.top + 10 && posClickedY <= imagineEraser.top + 10 + imagineEraser.height - 25) {
        console.log("Apasat pe eraser");
        context.clearRect(0, 0, width, height);
        shapes.removeAllShapes();
        drawMenu();

    } else {
        //console.log(posClickedX, posClickedY);
        // console.log(imagineEraser.left, imagineEraser.left + imagineEraser.width);

    }

});

canvas.addEventListener("mousemove", (action) => {
    action.preventDefault();
    if (isDragging) {
        let move_mouseMarginLeft = parseInt(action.x);
        let move_mouseMarginTop = parseInt(action.y);
        let deplasareLeft = move_mouseMarginLeft - mouseMarginLeft;
        let deplasareTop = move_mouseMarginTop - mouseMarginTop;
        //console.log(deplasareLeft, deplasareTop);

        CurrentObject = shapes.getShapeAtPosition(index_of_dragging_Shape);
        // console.log(CurrentObject.toString());
        CurrentObject.marginLeft += deplasareLeft;
        CurrentObject.marginTop += deplasareTop;
        shapes.drawShapes();

        //Ajustez Mouse La Noua Pozitie
        mouseMarginLeft = move_mouseMarginLeft;
        mouseMarginTop = move_mouseMarginTop;

        //Daca aduc obiectul in meniu il sterg
        if (CurrentObject.marginLeft < menuWidth) {
            console.log(shapes.getShapeAtPosition(index_of_dragging_Shape), index_of_dragging_Shape);
            shapes.removeItemAtPosition(index_of_dragging_Shape);
            shapes.drawShapes();
        }
    } else return;
});



canvas.addEventListener("mouseup", (action) => {
    action.preventDefault();

    if (isDragging)
        isDragging = false;
    else
        return;

});

canvas.addEventListener("mouseout", (action) => {
    action.preventDefault();

    if (isDragging)
        isDragging = false;
    else
        return;

});