const età = parseInt(prompt("Quanti anni hai?: "))
const km = parseInt(prompt("Quanti km dovrai percorrere?:"))


let prezzo = km*0.21

if(età < 18) {
    const sconto = (prezzo/100)*20;
    prezzo -= sconto;
    console.log("Questo è il prezzo che dovrai pagare: " + prezzo.toFixed(2) +"$")
}else if (età > 65) {
    const sconto = (prezzo/100)*40;
    prezzo -= sconto;
    console.log("Questo è il prezzo che dovrai pagare: " + prezzo.toFixed(2) +"$")
}else{
    ("Questo è il prezzo che dovrai pagare: " + prezzo.toFixed(2) +"$")
}