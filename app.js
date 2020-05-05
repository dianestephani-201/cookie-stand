var customersSeattle = {
  minimum: 23,
  maximum: 65,
  averageCookie: 6.3,
  getRandomIntInclusive: function() {
    var min = this.minimum;
    var max = this.maximum;
    var averageCookie = 6.3;
    return Math.floor((Math.random() * (max - min + 1) + min) * averageCookie);
    },
  
};

console.log(customersSeattle.getRandomIntInclusive());

function hourlySales() {
  for (i = 0; i < 13; i++){
    console.log();
  }
}
hourlySales();

// determine average cookies sold per hour, call getrandominclusive inside next method
// create for loop


// var customersTokyo = {
//   minimum: 3,
//   maximum: 24,
//   averageCookie: 1.2,
// }

// var customersDubai = {
//   minimum: 11,
//   maximum: 38,
//   averageCookie: 3.7,
// }

// var customersParis = {
//   minimum: 20,
//   maximum: 38,
//   averageCookie: 2.3
// }

// var customersLima = {
//   minimum: 2,
//   maximum: 16, 
//   averageCookie: 4.6
// }