/**
Divide the cars into 3 separate arrays:

In the first array, only include petrol cars. // for loop
In the second array, only include diesel cars. // foreach loop
In the third array, include the remaining cars. // array.filter
Finally, print the 3 arrays separately.
*/

/*Create an array composed of 15 cars.
Each car object will have the following properties: brand, model, and fuel type (petrol, diesel, LPG, electric, methane).*/
const cars =
[
    { brand: 'Audi', model: 'A4', fuel: 'Petrol' },
    { brand: 'Ford', model: 'Mustang', fuel: 'Petrol' },
    { brand: 'BMW', model: 'X5', fuel: 'Diesel' },
    { brand: 'Fiat', model: '500', fuel: 'LPG' },
    { brand: 'Tesla', model: 'Model 3', fuel: 'Electric' },
    { brand: 'Fiat', model: 'Panda', fuel: 'Methane' },
    { brand: 'Audi', model: 'A3', fuel: 'Petrol' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'Diesel' },
    { brand: 'Ford', model: 'Focus', fuel: 'Petrol' },
    { brand: 'Hyundai', model: 'Sonata', fuel: 'LPG' },
    { brand: 'Tesla', model: 'Model S', fuel: 'Electric' },
    { brand: 'Mercedes-Benz', model: 'E-Class', fuel: 'Petrol' },
    { brand: 'BMW', model: 'X3', fuel: 'Diesel' },
    { brand: 'Fiat', model: 'Punto', fuel: 'Petrol' }, 
    { brand: 'Volkswagen', model: 'Polo', fuel: 'Diesel' }
]

// In the first array, only include petrol cars. // for loop
const petrolCars = [];

for(let i = 0; i < cars.length; i++)
{
    if(cars[i].fuel === 'Petrol')
    {
        petrolCars.push(cars[i]);
    }
}

console.log(petrolCars);

// In the second array, only include diesel cars. // foreach loop
const dieselCars = [];

cars.forEach((car) => 
{
    if(car.fuel === 'Diesel')
    {
        dieselCars.push(car);
    }
});

console.log(dieselCars);

// In the third array, include the remaining cars. // array.filter
const remainingCars = cars.filter((car) => car.fuel !== 'Petrol' && car.fuel !== 'Diesel');

console.log(remainingCars);