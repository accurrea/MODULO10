// * Modulos en JS
// * como impoprtar estas funciones para que se puedan utilizar en otros arcivos
function suma (a,b){
    return a + b
}
function resta(a,b){
    return a - b
}
function multi(a,b){
    return a * b
}
function factorial(a){
    let fac = 1
    for(let i = 1; i <= a; i++){
        fac *= i
    }
    return fac
}   

module.exports ={
    suma,
    resta,
    multi,
    factorial
}