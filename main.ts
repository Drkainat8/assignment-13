//assignment 13 list you favourite transportaion and print a separate message for each like i would like to own a
let favouritemodeoftransportation : string[] = ['car', 'motorbike' , 'aircraft' , 'cruise', 'helicopter']
//loop method
for(let i =0; i < favouritemodeoftransportation.length; i++){
console.log(`i would like to own a ${favouritemodeoftransportation[i]}`)

}

//foreach method
favouritemodeoftransportation.forEach(traveling => {
    console.log(`i would like to own a ${traveling}`);
    
});