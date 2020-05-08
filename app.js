

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  name: 'seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersEachHour: function() {
  // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomInclusive();
    this.customersPerHour.push(customersThisHour);
    }
  },
  getRandomInclusive: function() {
    return Math.floor((Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1) + this.minCustomersEachHour));
  },
  calcCookiesSoldPerHour: function() {
    for(var i=0; i<hours.length; i++) {
      var cookiesSoldPerHour = (this.customersPerHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHour.push(Math.ceil(cookiesSoldPerHour));
    }
  },
  calcTotalCookiesPerDay: function(){
    for(var i=0; i<hours.length; i++) {
      this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.calcCustomersEachHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookiesPerDay();
    var seattleElement = document.getElementById(this.name);
  
    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);
  
    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
      seattleElement.appendChild(listItem);
    }
  
    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    seattleElement.appendChild(listItem);
  }
};
seattle.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tokyo = {
  name: 'tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesSoldPerCustomer: 1.2,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersEachHour: function() {
  // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomInclusive();
    this.customersPerHour.push(customersThisHour);
    }
  },
  getRandomInclusive: function() {
    return Math.floor((Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1) + this.minCustomersEachHour));
  },
  calcCookiesSoldPerHour: function() {
    for(var i=0; i<hours.length; i++) {
      var cookiesSoldPerHour = (this.customersPerHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHour.push(Math.ceil(cookiesSoldPerHour));
    }
  },
  calcTotalCookiesPerDay: function(){
    for(var i=0; i<hours.length; i++) {
      this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.calcCustomersEachHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookiesPerDay();
    var tokyoElement = document.getElementById(this.name);
  
    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    tokyoElement.appendChild(listItem);
  
    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
      tokyoElement.appendChild(listItem);
    }
  
    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    tokyoElement.appendChild(listItem);
  }
};
tokyo.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var dubai = {
  name: 'dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesSoldPerCustomer: 3.7,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersEachHour: function() {
  // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomInclusive();
    this.customersPerHour.push(customersThisHour);
    }
  },
  getRandomInclusive: function() {
    return Math.floor((Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1) + this.minCustomersEachHour));
  },
  calcCookiesSoldPerHour: function() {
    for(var i=0; i<hours.length; i++) {
      var cookiesSoldPerHour = (this.customersPerHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHour.push(Math.ceil(cookiesSoldPerHour));
    }
  },
  calcTotalCookiesPerDay: function(){
    for(var i=0; i<hours.length; i++) {
      this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.calcCustomersEachHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookiesPerDay();
    var dubaiElement = document.getElementById(this.name);
  
    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    dubaiElement.appendChild(listItem);
  
    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
      dubaiElement.appendChild(listItem);
    }
  
    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    dubaiElement.appendChild(listItem);
  }
};
dubai.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var paris = {
  name: 'paris',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesSoldPerCustomer: 2.3,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersEachHour: function() {
  // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomInclusive();
    this.customersPerHour.push(customersThisHour);
    }
  },
  getRandomInclusive: function() {
    return Math.floor((Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1) + this.minCustomersEachHour));
  },
  calcCookiesSoldPerHour: function() {
    for(var i=0; i<hours.length; i++) {
      var cookiesSoldPerHour = (this.customersPerHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHour.push(Math.ceil(cookiesSoldPerHour));
    }
  },
  calcTotalCookiesPerDay: function(){
    for(var i=0; i<hours.length; i++) {
      this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.calcCustomersEachHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookiesPerDay();
    var parisElement = document.getElementById(this.name);
  
    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    parisElement.appendChild(listItem);
  
    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
      parisElement.appendChild(listItem);
    }
  
    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    parisElement.appendChild(listItem);
  }
};
paris.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var lima = {
  name: 'lima',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesSoldPerCustomer: 4.6,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,

  calcCustomersEachHour: function() {
  // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomInclusive();
    this.customersPerHour.push(customersThisHour);
    }
  },
  getRandomInclusive: function() {
    return Math.floor((Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1) + this.minCustomersEachHour));
  },
  calcCookiesSoldPerHour: function() {
    for(var i=0; i<hours.length; i++) {
      var cookiesSoldPerHour = (this.customersPerHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHour.push(Math.ceil(cookiesSoldPerHour));
    }
  },
  calcTotalCookiesPerDay: function(){
    for(var i=0; i<hours.length; i++) {
      this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.calcCustomersEachHour();
    this.calcCookiesSoldPerHour();
    this.calcTotalCookiesPerDay();
    var limaElement = document.getElementById(this.name);
  
    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append
    // render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    limaElement.appendChild(listItem);
  
    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
      limaElement.appendChild(listItem);
    }
  
    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    limaElement.appendChild(listItem);
  }
};
lima.render();

var form = document.getElementById('form');
var totalCookiesPerDayEachStore = []

function handleFormSubmit(event){
  event.preventDefault();
}