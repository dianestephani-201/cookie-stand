'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookiesPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();
  this.render();
}

Store.prototype.render = function() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRow.appendChild(tableHeader);
  var table = document.getElementById("sales-table");
  // table.appendChild(tableRow);
  for (var i = 0; i<hours.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }
  table.appendChild(tableRow);
}

Store.prototype.calcCustomersEachHour = function(){
// calculate the customers each hour and populate the array
  for(var i=0; i<hours.length; i++){
  var customersThisHour = this.getRandomInclusive();
  this.customersEachHour.push(customersThisHour);
  }
}

Store.prototype.calcCookiesSoldEachHour = function(){
  for (var i = 0; i<hours.length; i++){
    var cookiesSoldEachHour = this.customersEachHour[i] * this.averageCookiesPerPerson;
    // Math.floor(cookiesSoldEachHour); no longer doing anything
    this.cookiesSoldEachHour.push(Math.floor(cookiesSoldEachHour));
  }
} 

Store.prototype.getRandomInclusive = function() {
  return Math.floor((Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
}

// var berlin = new Store('Berlin', 5, 72, 4);
// berlin.render();

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

var form = document.getElementById('city-form');
form.onsubmit = function(evt){
  console.log(evt);
  evt.preventDefault();
}

// evt object
// evt.target "input.value();"

