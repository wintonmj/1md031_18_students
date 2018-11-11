function MenuItem(n, kC, g, l) {
    this.name = n; // The this keyword refers to the object itself
    this.kCal = kC;
    this.gluten = g;
    this.lactose = l;
    this.nameAndKCal = function() {
        return this.name + ' ' + this.kCal;
    };
}

// Objects are then instantiated using the new keyword

var burgers = [ 
    new MenuItem('Burger 1', '2.4kCal', 'Gluten', 'Lactose'), 
    new MenuItem('Burger 2', '1.7kCal', 'Gluten Free', 'Lactose'), 
    new MenuItem('Burger 3', '1.9kCal', 'Gluten', 'Lactose'),
    new MenuItem('Milkshake', '1.5kCal', 'Gluten', 'Lactose'),
    new MenuItem('Smoothie', '0.7kCal', 'Gluten', 'Lactose Free')
]

