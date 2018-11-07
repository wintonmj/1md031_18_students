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
var item1 = new MenuItem('Maike', 'Paetzel', 'Uppsala', 'PhD Student');

console.log( item1.nameAndKCal() ); // Output: Maike Paetzel