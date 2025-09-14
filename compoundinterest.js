function calculateCompoundInterest(principal, rate, timesCompounded, years) {
    const r = rate / 100; // Convert percentage to decimal
    const amount = principal * Math.pow((1 + r / timesCompounded), timesCompounded * years);
    const compoundInterest = amount - principal;
    
    return {
        totalAmount: amount.toFixed(2),
        compoundInterest: compoundInterest.toFixed(2)
    };
}

const result = calculateCompoundInterest(1000, 5, 4, 3);  // P=1000, r=5%, n=4, t=3 years

console.log("Total Amount:", result.totalAmount);            // Final amount with interest
console.log("Compound Interest:", result.compoundInterest);  // Interest earned only
