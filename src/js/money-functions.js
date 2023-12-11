function formatCurrency(amount) {
    const formattedAmount = Math.abs(amount).toFixed(2);
    return amount >= 0 ? `$${formattedAmount}` : `-$${formattedAmount}`;
  }
  
  

  function getCoins(cents) {
    const coins = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };

    coins.quarters = Math.floor(cents / 25);
    cents %= 25;

    coins.dimes = Math.floor(cents / 10);
    cents %= 10;

    coins.nickels = Math.floor(cents / 5);
    cents %= 5;

    coins.pennies = cents;
  
    return coins;
  }
  module.exports = { formatCurrency, getCoins };