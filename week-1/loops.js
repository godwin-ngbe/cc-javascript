//for (let count = 3; count<= 8; count = count + 2){
    //console.log ('Hello'); 
//}

//for ( count = 10; count >= 1; count = count -1){
    //console.log (count);
    //console.log ('Happy New Year');
    //console.log ('Happy New Yaer!');
//}
//console.log ('Happy New Yaer!');

//while loop
//let count = 1;

//while (count < 10){
    //console.log ('This is is a while loop');
    //count = count + 1;
//}

while (true){
//INPUT

let number = Number  prompt ("Type in a number\n type 'close' to end the programe");
let message = '';

if (number === 'close'){
    break;
}

// PROCESSING
if ( number % 2 === 0){
   message = 'This is an even number';
}  else {
    message = 'This is an odd number';
}

// OUTPUT
alert (message);
}