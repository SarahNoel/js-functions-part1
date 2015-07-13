// 1
function sum(x, y){
  return x + y;
}
console.log(sum(4,5))
console.log(sum(10,11))

// 2
function isEqual(x, y) {
  if (x === y){
    return "True";
  }else {return "False" ;
  }
}

console.log(isEqual(4,5))
console.log(isEqual(3,3))

// 3
function discountPercentage(orig, disc){

  var orig = prompt("What is the original price?");
  var disc = prompt("What is the discount percentage?");

if(disc > 100){
  return "Warning! That discount is too high.  Your price may not be accurate.";
} else if (disc < 0 ) {
    return "Warning! That discount is too low.  Your price may not be accurate.";
}else {
      return "The total discount is $" + (orig * (disc/100)).toFixed(2) + "  The discounted price is $" + (orig - (orig * (disc/100))).toFixed(2);
}
}

console.log(discountPercentage(96,15))

// 4
function stringCapitalize(str)
  {return str.replace(/\w\S*/g,
  function(txt)
    {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(stringCapitalize("i nEEd the FIRST capiTALized"));
console.log(stringCapitalize("CALM DOWN WITH THE CAPS LOCK"));

// 5
function evenNumbers(even){
  if (even > 100) { return "Error.  Number must be less than 100."
  } else{
  for (var i = 0; i <= even && i <=100 ; i = i + 2) {
    console.log(i);
}
}
}
console.log(evenNumbers(150))
console.log(evenNumbers(99))
console.log(evenNumbers(50))



// 6
function isDivisible(x, y){
  if (x % y === 0) {return "True";
}else {
  return "False";
}
}

console.log(isDivisible(55, 6))
console.log(isDivisible(12, 3))


// 7
function oddNumbers(odd){
  if (odd > 100) { return "Error.  Number must be less than 100."
} else if (odd > 40) {
  for (var i = 41; i <= odd; i = i + 2) {
  console.log(i);
}
}else{
  for (var i = 0; i <= odd; i = i + 2) {
    console.log(i);
}
}
}
console.log(oddNumbers(20))
console.log(oddNumbers(99))
console.log(oddNumbers(50))
