import Magician from '../magician';

let magician = new Magician('Маг');

test('Атака на 5 клетку (без дурмана) - 60%', () => {
    magician.attack = 5;
    expect(magician.attack).toBeCloseTo(60.00, 2);
});

test('Атака на 5 клетку (c дурманом) - 48.39%', () => {
    magician.stoned = true;
    magician.attack = 5;
    expect(magician.attack).toBeCloseTo(48.39, 2);
});