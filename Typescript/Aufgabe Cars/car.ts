interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "Toyota", model: "Supra", price: 68000, year: 2008 },
    { brand: "Mazda", model: "CX-5", price: 32000, year: 2019 },
    { brand: "Ford", model: "Mustang", price: 360000, year: 2021 },
    { brand: "VW", model: "Polo", price: 6000, year: 2022 },
    { brand: "Honda", model: "Civic", price: 24000, year: 2020 },
];

function getTotalPrice(cars: Car[]): number {
    let total = 0;
    cars.forEach(car => {
        total += car.price;
    });
    return total;
}

function printCars(cars: Car[]): void {
    const sorted = cars.sort((a, b) => b.price - a.price);
    cars.forEach(car => {
        console.log(`${car.brand} ${car.model} (${car.year}) - $${car.price}`);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const result: Car[] = [];
    cars.forEach(car => {
        if (car.price > minPrice) {
            result.push(car);
        }
    });
    return result;
}