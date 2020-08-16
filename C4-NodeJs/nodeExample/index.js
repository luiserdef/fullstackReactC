let rect = require('./rectangle')

function solveRect(l,b){
rect(l,b,(err,rectangle)=>{
    if(err){
        console.log("ERROR:", err.message);
    }else{       
        console.log("The area of the rectangles is =: "+l+" and b= "+b+ " is "+rectangle.area())
        console.log("The area of the perimeter is = "+l+" and b= "+b+ " is "+rectangle.perimeter())
    }
});
console.log("this statement is after")
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,5)