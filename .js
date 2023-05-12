function converter(event){
event.preventDefault();
var valorT = document.getElementById("ValorC").value;
var valorO = document.getElementById("origem").value;
var valorD = document.getElementById("destino").value;
var resultado = valorT;

if(valorO == "01" && valorD == "02"){
    resultado = (valorT - 32)/1.8
}
if(valorO == "02" && valorD == "01"){
    resultado = (valorT * 1.8) + 32
}
document.getElementById("res").value = resultado;

}