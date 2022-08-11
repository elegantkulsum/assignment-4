// Fist task
function radianToDegree(radian) {
    return radian * (180 / Math.PI)
}
let getResult = radianToDegree(25)

console.log(getResult.toFixed(2), '\n')

// Second task
// let fileName = 'app.js';
function JavaScriptFile(String) {
    if (String === 'index.js') {
        return true
    } else {
        return false
    }
}
let getJavaScriprFile = JavaScriptFile('index.js')
console.log(getJavaScriprFile, '\n')

// Third task

function oilPrice(diesel, petrol, octen) {
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octenPricePerLiter = 135;

    const dieselPrice = dieselPricePerLiter * diesel;
    const petrolPrice = petrolPricePerLiter * petrol;
    const octenPrice = octenPricePerLiter * octen;
    const totalOilCost = dieselPrice + petrolPrice + octenPrice;
    return totalOilCost;

}
const showOilCost = oilPrice(5, 3, 4)
console.log(showOilCost, '\n')

// Four task
function publicBusFare() {

}

// Five task
function isBestFriend(friendMatch1, friendMatch2) {

    for (let i in friendMatch1) {
        for (let i in friendMatch2) {
            if (friendMatch1.name === friendMatch2.friend && friendMatch1.friend === friendMatch2.name) {
                return true
            } else {
                return false
            }
        }
    }



}
const friendOne = { name: "abul", friend: "babul" };
const friendTwo = { name: "babul", friend: "abul" };
const friendThird = { name: "abul", friend: "kabul" };
const friendFour = { name: "kabul", friend: "sabul" };
const friendFive = { name: "doe", friend: "alex" };
const friendSix = { name: "john", friend: "doe" };
 let getBestFriend = isBestFriend(friendThird, friendTwo)
console.log(getBestFriend, '\n')


