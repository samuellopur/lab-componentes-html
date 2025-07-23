let votosDiseno = 0;
let votosJavascript = 0;
let votosBdd = 0;
let totalVotos = 0;

function votar(opcion){
    if (opcion === 'diseno'){
        votosDiseno++;
        document.getElementById('votos-diseno').textContent = votosDiseno;
    }else if (opcion === 'js'){
        votosJavascript++;
        document.getElementById('votos-js').textContent = votosJavascript;
    }else if (opcion === 'bdd'){
        votosBdd++;
        document.getElementById('votos-bdd').textContent = votosBdd;
    }

    totalVotos++;

    alert("¡Gracias por tu voto!")

    if (totalVotos % 5 === 0){
        console.log("Total de votos hasta ahora: " + totalVotos);
    }
}