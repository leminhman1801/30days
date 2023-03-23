// Multiplication table
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array = [1, 20, 31, 4, 5, 6, 7, 8, 9, 10];

// let resul = []
// var number = 7
// var from2toNumber = 9
// for (let i=2; i<=from2toNumber; i++){
//     for (let j=0; j<=arr.length-1; j++){
        
//         result.push(i*arr[j]);      
  
//     }
//     console.log(result)
//     result = []
// }

// for (i=0; i<=array.length-1; i++){

//     if (array[i] % 2 === 0){
        
        
//         result.push(array[i])
//     }
//     console.log(result)


// let array = [1, 2, 3, 4, 5, 6, 7]
// let result = []
// for (let i = 0; i < array.length; i++)
// {
//   if (result < array[i])
//     result = array[i];
// }
    
// for (let i = 2; i<=9; i++) {
//     for (j=1; j<=10; j++) {
//         result.push(j*i)
//     }
//     console.log(result);
//     result = []

// }    
// let root1, root2;

// let a = 3;
// let b = 4;
// let c = 5;

// let delta = b * b - 4 * a * c;
// console.log(delta)

// if (delta > 0) {
//     root1 = (-b + Math.sqrt(delta))/(2*a);
//     root2 = (-b - Math.sqrt(delta))/(2*a);


// }  
// if (delta == 0) {
//     root1 = root2 = -b/(2*a);
// }
// if (a-b+c == 0) {
//     root1 = -1;
//     root2 = -c/a;
// }
// if (delta <0) console.log('vo nghiem')

// console.log(root1, root2)
// console.log(typeof NaN)


// Creat Function 
// const calcAverage = (a, b, c) => (a + b + c)/3;
// const scoreDolphins = calcAverage(150, 150, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas)

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2*avgKoalas){
//         console.log(`Dolphins are the Winner (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas are the Winner (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins')
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// Dolphins are the Winner ('${avgDolphins}' vs. '${avgKoalas}')
// Dolphins are the Winner ('${avgDolphins}' vs. '${avgKoalas}')
// const = { 
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 1991,
//     job: 'teacher',
//     friends: ['Michael','Peter','Steven'],
//     hasDriverLicense: true,
    
// };
const bills = [125, 555, 44];
const tips = [];
    for (i=0; i<bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            tips.push(bills[i]*0.15);
            
        } else {
            tips.push(bills[i]*0.2);

        }
    }
    console.log(tips)



// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// };
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips)