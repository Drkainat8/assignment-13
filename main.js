//assignment 13 list you favourite transportaion and print a separate message for each like i would like to own a
var favouritemodeoftransportation = ['car', 'motorbike', 'aircraft', 'cruise', 'helicopter'];
//loop method
for (var i = 0; i < favouritemodeoftransportation.length; i++) {
    console.log("i would like to own a ".concat(favouritemodeoftransportation[i]));
}
//foreach method
favouritemodeoftransportation.forEach(function (traveling) {
    console.log("i would like to own a ".concat(traveling));
});
