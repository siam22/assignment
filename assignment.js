

function kilometerToMeter(distance){
    var kilomieter = distance;
    var meter = kilomieter * 1000;
    if (kilomieter  < 0){
        return ('distance cannot be negative')
    }
    return meter;

}
var kew = kilometerToMeter(-5);
console.log(kew);


function budgetCalculator(watch, mobile, laptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalWatchPrice = watchPrice * watch;
    var totalMobilePrice = mobilePrice * mobile;
    var totalLaptopPrice = laptopPrice * laptop;
    var finalAmount = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
    if (watch, mobile, laptop < 0) {
        return ("invalid amount");
    }
    return finalAmount;
}
var ulala = budgetCalculator(8, 9, 2);
console.log(ulala);


function hotelCost(days){
    var totalCost = 0;
    if (days <= 10){
        cost = days * 100;  
    } else if (days <= 20){
        var firstPart = 10 * 100;
        var remainingDays = days - 10;
        var secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;
    } else {
     var firstPart = 10 * 100;
     var secondPart = 10 * 80;
     var remainingDays = days - 20;
     var thirdPart = remainingDays * 50;
     var totalCost = firstPart + secondPart + thirdPart;
    }
    if (days < 0){
        return ("invalid amount");
    }
    return totalCost;
}
var kala = hotelCost(-3);
console.log(kala);

    


function megaFriend(name){
    
}
