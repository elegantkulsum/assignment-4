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

