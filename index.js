var firstName = prompt("Enter first name");
var secondName = prompt("Enter second name");

if (firstName.length < 1 || secondName.length < 1) {
  alert(`this can't be null`);
} else {
  var loveScore = Math.floor(Math.random() * 100 + 1);
  console.log(`Your love score is ${loveScore}%`);
}
