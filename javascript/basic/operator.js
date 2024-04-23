//Q1 create two constants, add them assign to a new constants

const x = 10;
const y = 20;
const z= x+y
console.log(z)
// ans = 30


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'
console.log(a===b)
// ans= false


// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const randomNum = Math.random()*6
const roundoffVal = Math.floor(randomNum)
console.log(randomNum)

if(roundoffVal<3){
  console.log(roundoffVal+ 'is less then 3')
}
else if (roundoffVal ===  3){
  console.log(roundoffVal+ 'is equal to 3')
} else{
  console.log(roundoffVal+ 'is greater the 3')
}

//2.1854131857487054

