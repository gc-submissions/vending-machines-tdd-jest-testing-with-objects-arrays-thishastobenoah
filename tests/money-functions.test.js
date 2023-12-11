const { formatCurrency, getCoins } = require('../src/js/money-functions');

describe('formatCurrency', () => {
  it('formats 0 as "$0.00"', () => {
    expect(formatCurrency(0)).toEqual('$0.00');
  });

  it('formats 1 as "$1.00"', () => {
    expect(formatCurrency(1)).toEqual('$1.00');
  });

  it('formats 1.5 as "$1.50"', () => {
    expect(formatCurrency(1.5)).toEqual('$1.50');
  });

  it('formats 0.01 as "$0.01"', () => {
    expect(formatCurrency(0.01)).toEqual('$0.01');
  });

  it('formats 527.6789 as "$527.68"', () => {
    expect(formatCurrency(527.6789)).toEqual('$527.68');
  });

  it('formats -1 as "-$1.00"', () => {
    expect(formatCurrency(-1)).toEqual('-$1.00');
  });

  it('formats 10.25 as "$10.25"', () => {
    expect(formatCurrency(10.25)).toEqual('$10.25');
  });

  it('formats -5.75 as "-$5.75"', () => {
    expect(formatCurrency(-5.75)).toEqual('-$5.75');
  });
});

describe('getCoins', () => {
  it('32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });

  it('10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0', () => {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });

  it('27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', () => {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });

  it('68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3', () => {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
});