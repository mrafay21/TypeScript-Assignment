"use strict";
// Abstract the class Vehicle
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    // making getter setter 
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    //Rent
    rent() {
        if (this.isRented()) {
            return `Sorry ${this.make} ${this.model} ${this.year} is already rented.`;
        }
        else {
            this.setRented(true);
            return `Successfully rented the ${this.make} ${this.model} ${this.year}`;
        }
    }
    // Return Vehicle
    rVehicle() {
        if (this.isRented()) {
            this.setRented(false);
            return `Successfully return ${this.make} ${this.model} ${this.year}.`;
        }
        else {
            return `Sorry, the ${this.make} ${this.model} ${this.year} has not been rented yet.`;
        }
    }
}
//Now start extend Classes with Vehicle class
//Class car extend with Vehicle
class Car extends Vehicle {
    constructor(make, model, year, numOfSeats) {
        super(make, model, year);
        this.numOfSeats = numOfSeats;
    }
    rentalRate() {
        return 2500;
    }
    getNumOfSeats() {
        return this.numOfSeats;
    }
}
//Class Truck extend with Vehicle
class Truck extends Vehicle {
    constructor(make, model, year, loadCapacity) {
        super(make, model, year);
        this.loadingCapacity = loadCapacity;
    }
    rentalRate() {
        return 75000;
    }
    getloadCapacity() {
        return this.loadingCapacity;
    }
}
//Class Motorcycle extend with Vehicle
class Motorcycle extends Vehicle {
    constructor(make, model, year, petrolAvg) {
        super(make, model, year);
        this.petrolAvg = petrolAvg;
    }
    rentalRate() {
        return 500;
    }
    getPetrolAvg() {
        return this.petrolAvg;
    }
}
//Console answering
const car = new Car("Toyota", "Corolla", 2023, 5);
console.log("For Car");
console.log(car.rent());
console.log(car.rent());
console.log(car.getNumOfSeats(), "No of seats in a car");
console.log(car.rentalRate(), 'This is Car rentalRate');
console.log(car.rVehicle());
const truck = new Truck("Mazda", "FM-1050", 2020, 20000);
console.log("For Truck");
console.log(truck.rent());
console.log(truck.rent());
console.log(truck.getloadCapacity(), 'This is Truck load capacity');
console.log(truck.rentalRate(), 'This is Truck rentalRate');
console.log(truck.rVehicle());
const motorcycle = new Motorcycle("Honda", "CDI-0123", 2023, '20KM in 1 litter petrol');
console.log("For Motorcycle");
console.log(motorcycle.rent());
console.log(motorcycle.rent());
console.log(motorcycle.getPetrolAvg(), ', This is Motercycle petrol average');
console.log(motorcycle.rentalRate(), 'This is Motorcycle rentalRate');
console.log(motorcycle.rVehicle());
//# sourceMappingURL=app.js.map