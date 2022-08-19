const combinacaoDistinta = (n, k) => {
    return (f(n) / (f(k) * f(n-k)));
}

const combinacaoSimples = (n, k) => {
    return (f(n) / f(n - k));
}

function f(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    
    let result = n;
    for (i = 1; i < n; i++) {
        result *= i;
    }

    return result;
}