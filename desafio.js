// Δ = b² - 4.a.c
// X = -b +/- √Δ / 2.a


let a = window.prompt("Digite o A:");
let b = window.prompt("Digite o B:");
let c = window.prompt("Digite o C:");


let delta = (b*b) - 4 * a * c;

let x1 = (-b +  Math.sqrt(delta)) / 2*a;
let x2 = (-b -  Math.sqrt(delta)) / 2*a;


window.alert(`O resultado de delta é: ${delta} e de x1 é: ${x1} e x2 é: ${x2}`)
