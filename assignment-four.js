/*------------- Code For Converting Seer to mon --------------*/

function seerToMon(seerUnit) {
    if (seerUnit > 0) {
        var monUnit = seerUnit / 40;
        return monUnit;


    } else {
        return "The seer unit value can not be negative. Please put a positive value";
    }
}
var check = seerToMon(440);
console.log(check);


/*------------- Code For Calculating totalSales --------------*/


function totalSales(shirtQuantity, pantsQuantity, shoeQuantity) {
    if (shirtQuantity > 0) {
        var shirtSale = shirtQuantity * 100;
    } else {
        shirtSale = 0;
    }

    if (pantsQuantity > 0) {
        var pantsSale = pantsQuantity * 200;
    } else {
        pantsSale = 0;
    }

    if (shoeQuantity > 0) {
        var shoeSale = shoeQuantity * 500;
    } else {
        shoeSale = 0;
    }

    var totalSaleOfTheDay = shirtSale + pantsSale + shoeSale;
    return totalSaleOfTheDay;
}

var check = totalSales(1, 1, 1);
console.log(check);

/*------------- Code For Calculating Delivary Cost --------------*/


function deliveryCost(numberOfShirt) {
    var totalDelivaryCost = 0;
    if (numberOfShirt <= 100) {
        totalDelivaryCost = numberOfShirt * 100;
    } else if (numberOfShirt <= 200) {
        var maximumDelivaryCost = 100 * 100;
        var remainingShirt = numberOfShirt - 100;
        var mediumDelivaryCost = remainingShirt * 80;
        totalDelivaryCost = maximumDelivaryCost + mediumDelivaryCost;

    } else {
        maximumDelivaryCost = 100 * 100;
        mediumDelivaryCost = 100 * 80
        remainingShirt = numberOfShirt - 200;
        var minimumDelivaryCost = remainingShirt * 50;
        totalDelivaryCost = maximumDelivaryCost + mediumDelivaryCost + minimumDelivaryCost;
    }

    return totalDelivaryCost;


}
var check = deliveryCost(50);
console.log(check);


/*------------- code for Finding Parfect friend --------------*/


function perfectFriend(name) {
    var perfectFriendName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element.length == 5) {
            perfectFriendName = element;
            break;
        } else(element.length != 5)

        {
            perfectFriendName = "Alas! You don't have a perfect friend"
                // break;
        }


    }
    return perfectFriendName;
}
var friend = ["Mubasshira", "Arisa", "subasshira", "mim", "shoshe"];

var perfectName = perfectFriend(friend);
console.log(perfectName);