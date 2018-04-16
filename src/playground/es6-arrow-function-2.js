const add =  (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55,1, 1001));

const user = {
   name: 'Paul',
   cities: ['Philadelphia', 'New York', 'Dublin'],
   printPlacesLived() {
       const cityMessages = this.cities.map((city) => {
           return city + '!';
       })
       return cityMessages;
   }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
