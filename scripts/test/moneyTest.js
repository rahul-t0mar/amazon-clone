import {formatCurrency} from '../utilities/money.js';


// Test 1
if (formatCurrency(2095) === '20.95'){
    console.log('Passed')
}
else{
    console.log('Failed while computing for 2095 cents to 20.95 dollars.')
}


// Test 2
if (formatCurrency(0) === '0.00'){
    console.log('Passed')
}
else{
    console.log('Failed while computing for 0 cents to 0.00 dollars.')
}

// Test 3
if (formatCurrency(2000.8) === '20.01'){
    console.log('Passed')
}
else{
    console.log('Failed while computing for 2000.8 cents to 20.01 dollars.')
}

// Test 4
if (formatCurrency(2000.5) === '20.01'){
    console.log('Passed')
}
else{
    console.log('Failed while computing for 2000.5 cents to 20.01 dollars.')
}

// Test 5
if (formatCurrency(2000.1) === '20.00'){
    console.log('Passed')
}
else{
    console.log('Failed while computing for 2000.1 cents to 20.00 dollars.')
}