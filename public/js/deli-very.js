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
    menuItems: burgers,
    recievedOrder: false,
    orders: {},
    orderObj: {
      name: '',
      email: '',
      gender: 'Undisclosed',
      payment: 'Credit',
      checkedBurgers: [],
      x: 0,
      y: 0
    }
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
    markDone: function () {
      console.log(this.orderObj)
    },

    handleSubmit() {
      if (this.orderObj.checkedBurgers.length === 0) {
        console.log("Select at least one burger.")
        alert("Select at least one burger.")
        event.preventDefault();
        return false;
      }
      this.recievedOrder = true;
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    displayOrder: function (event) {
      //this.markDone();
      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };

      this.orderObj.x = event.clientX - 10 - offset.x;
      this.orderObj.y = event.clientY - 10 - offset.y;
    },

    addOrder: function () {
      console.log(
        "Now adding the order \n The orderID is: " + this.getNext() + 
        "\n the details are " + this.orderObj.x + " and " + this.orderObj.y + 
        "\n the order is " + this.orderObj.checkedBurgers  
      );
      socket.emit("addOrder", {
        orderId: this.getNext(),
        details: {
          x: this.orderObj.x,
          y: this.orderObj.y
        },
        orderItems: this.orderObj.checkedBurgers
      });
      console.log("Order Added"); 
    }
  }
});
