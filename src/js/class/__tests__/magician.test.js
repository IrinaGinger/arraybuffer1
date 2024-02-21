import Magician from '../magician';

let magician = new Magician('Маг');

test('Атака на 5 клетку (без дурмана) - 60%', () => {
    magician.distance = 5;
    magician.attack = 100;
    expect(magician.attack).toBeCloseTo(60.00, 2);
});

test('Атака на 5 клетку (c дурманом) - 48.39%', () => {
    magician.stoned = true;
    magician.distance = 5;
    magician.attack = 100;
    expect(magician.attack).toBeCloseTo(48.39, 2);
});