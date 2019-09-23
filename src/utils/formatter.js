export const currencyFormatter = price => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
  
    return formatter.format(price);
};