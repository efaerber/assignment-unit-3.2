console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?

for (let i = 0; i<= 5; i++) {

  console.log(i);
}
// You needed to increase the range from 0-5 and add a = symbol

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

for (let i = 3; i <= 5; i++) {

  console.log(i)
}

// you need to let i = 3 so that the loop would start counting from 3 

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}



// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0



// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']



// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

for (let star of stars) {

  console.log(star);
}


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array

let i = 0;

while (i < stars.length) {

  console.log(stars[i]);
  i++;
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5



while (i <= 5) {
  console.log(i);
  i++;
  
}



// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5

while (i >= 5) {

  console.log(i);
  i--;
}
