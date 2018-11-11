var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#myID', 
    data: {
        burgerName: 'Burger Name 1'
    }
})

burgers.forEach(element => {
    console.log(element.nameAndKCal() );
});