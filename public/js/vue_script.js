var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#myID', 
    data: {
        burgerName: burgers
    }
})

burgers.forEach(element => {
    console.log(element.nameAndKCal() );
});