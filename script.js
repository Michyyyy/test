/* .js files add interaction to your website */
var factList = [
"Americans throw away 25 trillion Styrofoam cups every year.",
"On average, one supermarket goes through 60 million paper bags each year.",
"A glass bottle can take up to 1 million years to decompose.",
"The world’s oldest trees are 4,600 year old Bristlecone pines in the USA.",
"Paper from trees can be recycled 6 times.",
"Fungi play a highly vital role in the environment."
  
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
