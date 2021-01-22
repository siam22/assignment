// https://github.com/siam22/assignment


function kilometerToMeter(distance){
    var kilomieter = distance;
    var meter = kilomieter * 1000;
    if (kilomieter  < 0){
        return ('distance cannot be negative')
        // shows only when the input is negative.
    }
    return meter;
    // returns the value in meter.
}


function budgetCalculator(watch, phone, laptop){
    var finalAmount = 0;
    // primary amount is 0.
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var LaptopPrice = laptop * 500;
    var finalAmount = watchPrice + phonePrice + LaptopPrice;
    // sums the total cost of watch, phone, laptop.
    if (watch, phone, laptop < 0) {
        return ("invalid amount");
    }
    return finalAmount;
}


function hotelCost(days){
    var totalCost = 0;
    // primary cost starts from 0.
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

    


function megaFriend(name){
    var longestName = name[0];
    for (var i = 0; i < name.length; i++){
        if (name[i].length > longestName.length){
            longestName = name[i];
        }
        if (name.length <= 0){
            return ('enter a valid name');
        }
    }
     return longestName;
    // returns the longest name from the array.
}


