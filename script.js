// Fist task
function radianToDegree(radian){
  return radian * (180 / Math.PI)
}
let getResult = radianToDegree(25)

console.log( getResult.toFixed(2), '\n')

// Second task
// let fileName = 'app.js';
function JavaScriptFile(String){  
    if(String === 'index.js'){
        return true
    }else{
        return false
    }
}
let getJavaScriprFile = JavaScriptFile('index.js')
console.log(getJavaScriprFile, '\n')

// Third task

function oilPrice(diesel, petrol, octen ){
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octenPricePerLiter = 135;

    const dieselPrice = dieselPricePerLiter * diesel;
    const petrolPrice = petrolPricePerLiter * petrol;
    const octenPrice = octenPricePerLiter * octen;
    const totalOilCost = dieselPrice + petrolPrice + octenPrice;
    return totalOilCost;

}
const showOilCost = oilPrice(5,3,4)
console.log(showOilCost , '\n')

