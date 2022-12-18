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


let array = [1, 2, 3, 4, 5, 6, 7]
let result = []
// for (let i = 0; i < array.length; i++)
// {
//   if (result < array[i])
//     result = array[i];
// }
    
for (let i = 2; i<=9; i++) {
    for (j=1; j<=10; j++) {
        result.push(j*i)
    }
    console.log(result);
    result = []

}    