class Bike {
    constructor(bikeName, bikePrice, bikeInfo) {
        this.bikeName = bikeName;
        this.bikePrice = bikePrice;
        this.bikeInfo = bikeInfo;
    }

    getBikeCost(){
        return this.bikePrice;
    }

    getBikeInfo(){
        return `${this.bikeName} costs this much ${this.bikePrice}`;
    }
}

// instantiate object
const bike1 = new Bike('Gixer sf 150', 200000, 'tuktuk is a jet');
const bike2 = new Bike('Ninja 400', 400000, 'ninja is a beast');

console.log(bike1.getBikeInfo());
console.log(bike2.getBikeInfo());