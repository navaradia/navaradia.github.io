let name='Mark';
let greeting= `Hello ${name}`
console.log(greeting)
let even;

for (let i = 1; i < 10; i++) {
    even=i*2;
    console.log(even);
    
}

let add=(a,b) => {
    return (a+b);
}

console.log(add(2, 8765)); 

let printNumbersTill = (till) => {
    console.log(`This will print the numbers until ${till}`);
    for (let i = 0; i < till; i++) {
        a=i+1;
        console.log(a);
        
    }
}

printNumbersTill(827);

let greetings = (YourName) => {
    return (`Hy, ${YourName}`);
}

console.log(greetings('Peter'));

let my_array = []
for (let i = 0; i < 37; i++) {
    my_array[i]=Math.floor(Math.random()*100); 
    
}

let printValues = (array) => {
    console.log('This is the array: ')
    for (let i = 0; i < array.length; i++) {
         console.log(array[i]);
        
    }
}

console.log('This is the array on anothen way: ')
my_array.forEach((number) => {
    console.log(number);
})


printValues(my_array);

/*------------------------------------------------------------------------------*/
/*jQuery*/

/* id="title" ---> #title */
$('#title').text('My new title'); 