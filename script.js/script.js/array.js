// let arr=[1,2,3,4,5];
// //index  0 1 2 3 4
// console.log(arr);

// //this is value of index
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);


// //change the value of this index in array
// //don't the value change in strings
// arr[0]=5;
// console.log(arr);
// arr[4]="ashish";
// console.log(arr); //array ke andar koi bhi data type rakh sakte hai 


// console.log(arr.length); // total element of  in aray
// console.log(typeof arr); //type of array is object


let arr=[1,2,3,4,5];
console.log(arr);

// console.log(arr.toString()); //convert in array to string
// console.log(arr.join(" and ")); //convert the (,) to (and) and jagha ham kuch bhi name de sakte hai
// console.log(arr.pop());// pop = delete the last element
// console.log(arr);
// console.log(arr.push(8));//push = add the element in end
// console.log(arr);
// console.log(arr.push("ashish"));//array ke andar ham koi bhi data tyoe ko puch kar sakte hai
// console.log(arr);
// console.log(arr.shift());//shift = pop=delete the first value in array
// console.log(arr);
// console.log(arr.unshift("mahadev"));//unshift = push = add the element in first index
// console.log(arr);
// console.log(arr,delete arr[4]);//delete = ye items ko delete kar dete hai par iska space(index) rah jata hai in memory
// console.log(arr);
// console.log(arr.length);

// let brr=[1,2,3];//concat = joint the all element
// let crr=[4,5,6];
// let drr=[7,8,9];
// console.log(brr.concat(crr,drr));



// console.log(arr.splice(1,3));//delete the 1 to 3 index value
// console.log(arr);

// console.log(arr.splice(1,2,788,566));//delete the 1 to 2 index value and add the same index in 788 and 566
// console.log(arr);

// console.log(arr.slice(1,3)); //only 1 to 2 index value print not include the 3(index)
// console.log(arr);




//add new array by for loop 1st method
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element*2);

// }
//     console.log(newarr);



// // add new array by map function
// let newarr=arr.map((e,index,value)=>{
//  return e*3;
// });
// console.log(newarr);








// //this is a filter method 1st
// const ashish=(e)=>{
//     if(e>7){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(arr.filter(ashish));


//this is filter method 2nd
// console.log(arr.filter((e)=>{
//     if(e<7){
//         return true;
//     }
//     else{
//         return false;
//     }
// }));






//this is reduce methoed
// let arr2=[1,2,3,4,5];
// const ashish=(a,b)=>{
//     return a+b;
// }
// console.log(arr2.reduce(ashish));


//kisi bhi type convert to array from array.from use
// let ashish=Array.from("ashish");
// console.log(ashish);

let number=6;
let ashish=Array.from(Array(number+1).keys());
console.log(ashish);



