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

var formFields = new Vue({
    el: '#orders',
    data: {
        key: [] 
    }, 

    methods: {
        markDone: function(key) {
         console.log("key!" + key)
        },    

        handleSubmit() {
            console.log("The User Name is: " + user.name); 
        }
    }, 

    data() {
        return {
          user: {
            email: '',
            name: '',
            password: ''
          }
        }
    }
});