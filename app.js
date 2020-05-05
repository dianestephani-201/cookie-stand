'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  name: 'seattle',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      
      this.customersPerHour.push(customersThisHour);
    }
  },
  calcCookiesSoldPerHour: function(){
    for(var i=0; i<this.customersPerHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerCustomer);

      this.cookiesSoldPerHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    }
  },

  render: function(){
    seattle.calcCustomersPerHour();
    seattle.calcCookiesSoldPerHour();
    var seattleElement = document.getElementById('seattle');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);


// var customersSeattle = {
//   minimum: 23,
//   maximum: 65,
//   averageCookie: 6.3,
//   getRandomIntInclusive: function() {
//     var min = this.minimum;
//     var max = this.maximum;
//     var averageCookie = 6.3;
//     return Math.floor((Math.random() * (max - min + 1) + min) * averageCookie);
//     },
  
// };

// console.log(customersSeattle.getRandomIntInclusive());

// function hourlySales() {
//   for (i = 0; i < 13; i++){
//     console.log(customersSeattle.getRandomIntInclusive);
//   }
// }
// hourlySales();

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
  