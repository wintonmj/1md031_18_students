function MenuItem(n, kC, g, l, img, s) {
    this.name = n; // The this keyword refers to the object itself
    this.kCal = kC;
    this.gluten = g;
    this.lactose = l;
    this.stock = s;
    this.image = img

    this.nameAndKCal = function() {
        return this.name + ' ' + this.kCal;
    };

}

// Objects are then instantiated using the new keyword

var burgers = [ 
    new MenuItem('Burger 1', '2.4kCal', true, false, 'http://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23566/sonic-burger.jpg?itok=zGk5pjcI',  1), 
    new MenuItem('Burger 2', '1.7kCal', false, true, 'http://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23566/sonic-burger.jpg?itok=zGk5pjcI',  1), 
    new MenuItem('Burger 3', '1.9kCal', true , true, 'http://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23566/sonic-burger.jpg?itok=zGk5pjcI',  1), 
    new MenuItem('Milkshake', '1.5kCal', true , true, ' ', 0),
    new MenuItem('Smoothie', '0.7kCal', true ,false, ' ', 0)
]

