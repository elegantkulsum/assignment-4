function radianToDegree(radian){
  return radian * (180 / Math.PI)
}
let getResult = radianToDegree(25)
console.log( getResult.toFixed(2) )