// ============================
// ONEEX ANALYTICS
// ============================

// Data
const hoje = new Date();

const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
};

document.getElementById("welcome").innerHTML =
`Hoje é ${hoje.toLocaleDateString('pt-BR', options)}.`;


// ============================
// CONTADORES
// ============================

function contador(id, inicio, fim, tempo, prefixo = "", sufixo = "") {

    let elemento = document.getElementById(id);

    let incremento = (fim - inicio) / (tempo / 20);

    let valor = inicio;

    let intervalo = setInterval(() => {

        valor += incremento;

        if (valor >= fim) {
            valor = fim;
            clearInterval(intervalo);
        }

        if(prefixo === "R$ "){
            elemento.innerHTML = prefixo + valor.toLocaleString('pt-BR',{
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }) + sufixo;
        }else{
            elemento.innerHTML = prefixo + Math.floor(valor) + sufixo;
        }

    },20);

}


// Dados temporários

contador("receitaHoje",0,2487.90,1000,"R$ ");
contador("pedidosHoje",0,128,1000);
contador("produtosHoje",0,174,1200);
contador("metaHoje",0,62,1500,"","%");


// ============================
// PRODUTO CAMPEÃO
// ============================

document.getElementById("championName").innerText =
"Caneco Antiaderente";

document.getElementById("championSales").innerText =
"48 vendas";


// ============================
// INSIGHTS
// ============================

document.getElementById("insights").innerHTML = `
<p>🔥 O TikTok representa 78% da receita.</p>

<p>🏆 O Caneco é o produto líder hoje.</p>

<p>🎯 Faltam R$ 512,10 para bater a meta diária.</p>

<p>📈 Você vendeu 18% acima da média da semana.</p>
`;


// ============================
// GRÁFICO RECEITA
// ============================

new Chart(document.getElementById('salesChart'),{

type:'line',

data:{

labels:[
'Seg',
'Ter',
'Qua',
'Qui',
'Sex',
'Sáb',
'Dom'
],

datasets:[{

label:'Receita',

data:[
1200,
1850,
1600,
2400,
2487,
2800,
2200
],

tension:.4,

fill:true

}]

},

options:{

responsive:true,

plugins:{
legend:{
display:false
}
}

}

});


// ============================
// GRÁFICO PLATAFORMA
// ============================

new Chart(document.getElementById('platformChart'),{

type:'doughnut',

data:{

labels:[
'TikTok',
'Shopee'
],

datasets:[{

data:[
78,
22
]

}]

},

options:{

responsive:true,

plugins:{

legend:{
position:'bottom'
}

}

}

});
