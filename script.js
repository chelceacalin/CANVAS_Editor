// Settings 
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Global Variables -  Most of them are for square
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

//Global Variables- Cicle
let index_of_dragging_Shape_Circle;
let isDragging_Circle = false;
let indexSeen_Circle;
let CurrentObject_Circle;
let indexShape_Circle;

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
    },
    {
        left: 5 + indentare,
        top: 765 + indentareVerticala,
        width: 30,
        height: 30,
        color: "black"
    },
    {
        left: 40 + indentare,
        top: 765 + indentareVerticala,
        width: 30,
        height: 30,
        color: "white"
    },
    {
        left: 75 + indentare,
        top: 765 + indentareVerticala,
        width: 30,
        height: 30,
        color: "yellow"
    },
    {
        left: 110 + indentare,
        top: 765 + indentareVerticala,
        width: 30,
        height: 30,
        color: "Chocolate"
    },
    {
        left: 145 + indentare,
        top: 765 + indentareVerticala,
        width: 30,
        height: 30,
        color: "salmon"
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
    context.fillStyle = ColorToDraw;
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
    context.strokeStyle = ColorToDraw;
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


    //Black Color
    context.beginPath();
    context.fillStyle = "rgb(0,0,0)";
    context.roundRect(5 + indentare, 765 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //White Color
    context.beginPath();
    context.fillStyle = "rgb(255,255,255)";
    context.roundRect(40 + indentare, 765 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Blue Teal Color
    context.beginPath();
    context.fillStyle = "yellow";
    context.roundRect(75 + indentare, 765 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Brownish Color
    context.beginPath();
    context.fillStyle = "Chocolate";
    context.roundRect(110 + indentare, 765 + indentareVerticala, 30, 30);
    context.fill();
    context.closePath();

    //Salmon Color
    context.beginPath();
    context.fillStyle = "Salmon";
    context.roundRect(145 + indentare, 765 + indentareVerticala, 30, 30);
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

let menuDrawingCoordinatesCircle = [{
    marginLeft: 51,
    marginTop: 260,
    width: 70,
    height: 75,
    color: "blue"
}]

class Circle {
    constructor(marginLeft, marginTop, radius, startAngle, endAngle, color) {
        this.marginLeft = marginLeft;
        this.marginTop = marginTop;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color;
    }
}

class Circles {
    constructor() {
        this.circles = [];
    }

    addCircle(marginLeft, marginTop, radius, startAngle, endAngle, color) {
        let circ = new Circle(marginLeft, marginTop, radius, startAngle, endAngle, color);
        this.circles.push(circ);
    }


    get allCircles() {
        return this.circles;

    }

    removeItemAtPosition(position) {
        this.circles.splice(position, 1);
    }

    removeAllShapes() {
        this.circles = [];
        circles.addCircle(0, 0, 0, 0, 0, "red");
    }

    getCircleAtPosition(positition) {
        index = 0;
        for (let figura in circles.allCircles) {
            if (positition === 0) {
                return figura;
            } else {
                index = positition - 1;
                if (positition > 0) {
                    index++;
                    if (index === positition) {
                        return this.circles[index] != null ? this.circles[index] : new Circle(0, 0, 0, 0, 0, "white");
                    }
                }
            }

        }
    }

    drawCircles() {
        drawMenu();
        for (let obj of circles.allCircles) {
            context.beginPath();
            context.fillStyle = obj.color;
            context.arc(obj.marginLeft, obj.marginTop, obj.radius, obj.startAngle, obj.endAngle);
            context.fill();
            context.closePath();
        }
    }
}


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
let circles = new Circles();

shapes.addShape(0, 0, 0, 0, "red"); // keep this hidden ( you can't move it)
circles.addCircle(0, 0, 0, 0, 0, "red"); // keep this hidden ( you can't move it);
//Draw the shapes 
shapes.drawShapes();
circles.drawCircles();


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

let clicked_on_shape_circle = (clickedX, clickedY, circle) => {
    let cornerLeft = circle.marginLeft - circle.radius;
    let cornerRight = circle.marginLeft + circle.radius;
    let cornerTop = circle.marginTop - circle.radius;
    let cornerBottom = circle.marginTop + circle.radius;

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

    //Square
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

    //Circle
    indexShape_Circle = 0;
    indexSeen_Circle = 0;
    for (let elem of circles.allCircles) {
        if (clicked_on_shape_circle(mouseMarginLeft, mouseMarginTop, elem)) {
            indexSeenCircle = 1;
            index_of_dragging_Shape_Circle = indexShape_Circle;
            isDragging_Circle = true;
            return;
        }
        indexShape_Circle++;
    }
    if (indexSeen_Circle === 0) {
        // for (let elem of circles.allCircles) {
        //     console.log("My Controls:    ", mouseMarginLeft, mouseMarginTop, "\nActual Controls:\n");
        //  console.log(elem.marginLeft, elem.marginTop);
        // }
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
            circles.drawCircles();
        } else {
            // console.log("Mine:", posClickedX, posClickedY, "\n", "Actual:", obj.marginLeft, obj.marginTop);

        }
    }
    //Draw Shape When Clicked on Circle
    for (let obj of menuDrawingCoordinatesCircle) {
        if (posClickedX >= obj.marginLeft && posClickedX <= obj.marginLeft + obj.width &&
            posClickedY >= obj.marginTop && posClickedY <= obj.marginTop + obj.height) {
            circles.addCircle(obj.marginLeft + 250, obj.marginTop + 50, 50, 0, 2 * Math.PI, ColorToDraw);
            circles.drawCircles();

        } else {
            console.log("Mine:", posClickedX, posClickedY, "\n", "Actual:", obj.marginLeft, obj.marginTop);
        }
    }

    //Apasam pe eraser
    if (posClickedX >= imagineEraser.left + 10 && posClickedX <= imagineEraser.left + 10 + imagineEraser.width - 20 && posClickedY >= imagineEraser.top + 10 && posClickedY <= imagineEraser.top + 10 + imagineEraser.height - 25) {
        console.log("Apasat pe eraser");
        context.clearRect(0, 0, width, height);
        shapes.removeAllShapes();
        circles.removeAllShapes();
        ColorToDraw = "white"
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
        circles.drawCircles();
        //Ajustez Mouse La Noua Pozitie
        mouseMarginLeft = move_mouseMarginLeft;
        mouseMarginTop = move_mouseMarginTop;

        //Daca aduc obiectul in meniu il sterg
        if (CurrentObject.marginLeft < menuWidth) {
            console.log(shapes.getShapeAtPosition(index_of_dragging_Shape), index_of_dragging_Shape);
            shapes.removeItemAtPosition(index_of_dragging_Shape);
            shapes.drawShapes();
            circles.drawCircles();
        }
    } else if (isDragging_Circle) {

        let move_mouseMarginLeft = parseInt(action.x);
        let move_mouseMarginTop = parseInt(action.y);
        let deplasareLeft = move_mouseMarginLeft - mouseMarginLeft;
        let deplasareTop = move_mouseMarginTop - mouseMarginTop;
        CurrentObject_Circle = circles.getCircleAtPosition(index_of_dragging_Shape_Circle);
        // console.log(CurrentObject.toString());
        CurrentObject_Circle.marginLeft += deplasareLeft;
        CurrentObject_Circle.marginTop += deplasareTop;
        shapes.drawShapes();
        circles.drawCircles();

        //Ajustez Mouse La Noua Pozitie
        mouseMarginLeft = move_mouseMarginLeft;
        mouseMarginTop = move_mouseMarginTop;


        //Daca aduc obiectul in meniu il sterg
        if (CurrentObject_Circle.marginLeft < menuWidth) {
            console.log(circles.getCircleAtPosition(index_of_dragging_Shape_Circle), index_of_dragging_Shape_Circle);
            circles.removeItemAtPosition(index_of_dragging_Shape_Circle);
            shapes.drawShapes();
            circles.drawCircles();
        }

    } else return;
});



canvas.addEventListener("mouseup", (action) => {
    action.preventDefault();
    //Daca nu facem asta o sa ramana obiectul lipit de mouse

    if (isDragging)
        isDragging = false;
    else
    if (isDragging_Circle)
        isDragging_Circle = false;
    else
        return;




});

canvas.addEventListener("mouseout", (action) => {
    action.preventDefault();
    if (isDragging)
        isDragging = false;
    else
    if (isDragging_Circle)
        isDragging_Circle = false;
    else
        return;

});