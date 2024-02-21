import Daemon from '../daemon';

let daemon = new Daemon('Демон');

test('Атака на 2 клетку (без дурмана) - 90%', () => {
    daemon.distance = 2;
    daemon.attack = 100;
    expect(daemon.attack).toBeCloseTo(90.00, 2);
});

test('Атака на 2 клетку (c дурманом) - 85%', () => {
    daemon.stoned = true;
    daemon.distance = 2;
    daemon.attack = 100;
    expect(daemon.attack).toBeCloseTo(85.00, 2);
});