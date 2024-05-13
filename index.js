// Faktorial' ın Tapılması

// 5 = 5.4.3.2.1 = 120
// 6 = 6.5.4.3.2.1=720

//6

let rəqəm = Number(prompt("Bir rəqəm daxil edin"));
let vurma = 1;

for (let i = 1; i <= rəqəm; i++) {
    vurma = vurma * i;
}
alert("Nəticə : " + vurma);
console.log("Nəticə : " + vurma);