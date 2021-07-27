const squareSum = require('./squareSum');

test ('[1] = 1', () => {
    expect(squareSum([1])).toBe(1);
});
test ('[1, 2] = 5', () => {
    expect(squareSum([1, 2])).toBe(5);
});
test ('[1, 2, 3] = 14', () => {
    expect(squareSum([1, 2, 3])).toBe(14);
});
test ('[0, 3, 4, 5] = 50', () => {
    expect(squareSum([0, 3, 4, 5])).toBe(50);
});