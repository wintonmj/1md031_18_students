/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

burgers.forEach(element => {
  console.log(element.nameAndKCal() );
});

var vm = new Vue({
  el: '#vue-container',
  data: {
    orders: {},
    orderObj: {
      email: '',
      name: '',
      password: ''
    },
    burgerName: burgers
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
      console.log(this.orederObj)
     },    
 
     handleSubmit() {
         console.log("The User Name is: " + user.name); 
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
