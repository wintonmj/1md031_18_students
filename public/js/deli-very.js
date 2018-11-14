/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm 

burgers.forEach(element => {
  console.log(element.nameAndKCal() );
});*/
'use strict';
var socket = io();

var vm = new Vue({
  el: '#vue-container',
  data: {
    orders: {},
    orderObj: {
      name: '',
      email: '',
      gender: 'Undisclosed',
      street: '',
      houseNumber: '', 
      payment: 'Credit'
    },
    burgerName: burgers,
    recievedOrder: false
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    markDone: function() {
      console.log(this.orderObj)
     },    
 
     handleSubmit() {
         console.log("The User Name is: " + this.orderObj.name);
         console.log("Order placed.");
         this.recievedOrder = true;  
     },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    }
  }
});
