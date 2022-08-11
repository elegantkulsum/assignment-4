// Fist task
function radianToDegree(radian) {
    if (radian * (180 / Math.PI)) {
        return radian
    } else {
        return ('Please Provide a number')
    }
}
let getResult = radianToDegree(45)

console.log('\n', getResult.toFixed(2), '\n')





// Second task
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
function publicBusFare(totalPersons) {
    let localTicketCost = 250;
    let busTotal = totalPersons - (totalPersons % 50);
    let microBusPerson = totalPersons - busTotal;
    let microBus = microBusPerson - (microBusPerson % 11);
    let localBusPerson = microBusPerson - microBus;
    let localBusCost = localBusPerson * localTicketCost;
    return localBusCost


}
let perLocalTicketCost = 698;
let showResult = publicBusFare(perLocalTicketCost)
console.log(showResult)
// publicBusFare(perLocalTicketCost)


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
console.log('\n', getBestFriend, '\n')

