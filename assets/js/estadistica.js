    //ESTADISTICA
//Definimos datos
const grafica=document.querySelector("#grafico");
const etiquetas=["temporada 1","temporada 2","temporada 3","temporada 4","temporada5"," Future"];

const audiencia={
    label:"audiencia por millones",//leyenda
    data:[ 2.45,2.15,1.94,1.94,1.39,1.50],//datos
    backgroundColor:'#F09A99',
    borderColor:'#33398a',
    borderWidth:1,//ancho de linea
    
};
const vistas2015={
    label:"vistas  2015",//leyenda
    data:[0,0,0,0,0,0],//datos
    backgroundColor:'f09a9980',
    borderColor:' ',
    borderWidth:1,//ancho de linea
};
const vistas2016={
    label:"vistas  2015",//leyenda
    data:[0,0,0,0,0,0],//datos
    backgroundColor:'rgba(55,172,235,0.2)',
    borderColor:'rgba(54,162,235,1)',
    borderWidth:1,//ancho de linea
};

const vistas2017={
    label:"vistas 2016",//leyenda
    data:[100,3000,2000,500,1000,3000],//datos
    backgroundColor:' rgba(247, 142, 230, 0.705)',
    borderColor:'rgba(54,162,235,1)',
    borderWidth:1,//ancho de linea
};
const vistas2018={
    label:"vistas 2017",//leyenda
    data:[3000,5000,8000,4000,5000,2000],//datos
    backgroundColor:' rgba(247, 142, 100, 0.705)',
    borderColor:'rgba(154,162,235,1)',
    borderWidth:1,//ancho de linea
};
const vistas2019={
    label:"vistas 2018",//leyenda
    data:[3000,5000,8000,4000,5000,500],//datos
    backgroundColor:'rgba(84, 82, 156, 0.486)',
    borderColor:'rgba(154,162,235,1)',
    borderWidth:1,//ancho de linea
//Creamos el grafico
 };
 const vistas2020={
    label:"vistas 2019",//leyenda
    data:[3000,5000,8000,4000,700,4000],//datos
    backgroundColor:' rgba(150, 47, 119, 0.438',
    borderColor:'rgba(154,162,235,1)',
    borderWidth:1,//ancho de linea
//Creamos el grafico
 };

new Chart(grafica,{
    type:'bar',
    data:{
        labels:etiquetas,
        datasets:[
            audiencia
            
        ]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }],
        },
    }
});

