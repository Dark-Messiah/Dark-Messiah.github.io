var mlol =[] ;
var nlol ;
var nplol;
var flagMaterial = false; 
var flagNumber = false;
var flagPoints = false;
var c112 = 1.660540*Math.pow(10,-27);
var pi = Math.PI;
function flags(){
	if (flagMaterial){
	document.getElementById("mFlag").style="background-color: green" ;
	}
	/*if (flagNumber){
	document.getElementById("nFlag").style="background-color: green" ;
	}*/
	if (flagPoints){
	document.getElementById("npFlag").style="background-color: green" ;
	}
	if (flagMaterial && flagNumber && flagPoints){
		prepareData();

	}
	if (flagMaterial && flagPoints){
		prepareData();

	}
	};
	function prepareData(){
	console.log(mlol);
	console.log(nlol);
	console.log(nplol);
	var xara = [];
	var yara = [];
	var points = [];
	console.log("bez" +mlol[0]);
	mlol[0] = mlol[0]*Math.pow(10,-10);
	console.log("s " +mlol[0])
	//var k = 4*mlol[1]*Math.pow(10,10)*2*mlol[0]/(mlol[2]*c112);
	
	var k = (4*mlol[1]*Math.pow(10,-10)/mlol[0])/(mlol[2]*c112);
	for (var i = 0 ; i<nplol ; i++){
		xara[i] = -pi/mlol[0] + ((2*pi/mlol[0])/nplol)*i;
		yara[i] = Math.sqrt(k*Math.pow((Math.sin(xara[i]*mlol[0]/2)),2)); 
		points.push({x: xara[i], y: yara[i]});
	
	}
	console.log(points);
	var ctx = document.getElementById("myChart");
	var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'scatter',
	
    data: {
		
        
        datasets: [
		
		{
            label: mlol[3],
			fill: true,
            data: points,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0,0,222,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
		],
		
		
    },
    options: {
		responsive: true,
  maintainAspectRatio: true,
		
        scales: {

            yAxes: [{
				type : "linear",
				
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:true
                }
            }],
			xAxes: [{
				type : "linear",
				
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:true
                }
            }]
        }
			
		
    }
});
	}
	function prepareDataHuy(){
	console.log(mlol);
	console.log(nlol);
	console.log(nplol);
	var xara = [];
	var yara = [];
	var points = [];
	var k = 4*mlol[1]*Math.pow(10,10)/(mlol[2]*c112);
	var maxyara = Math.sqrt(k*Math.pow((Math.sin((pi/mlol[0])/2)),2));
	console.log(maxyara);
	var t = 4;
	for (var i = 0 ; i<=nplol ; i++){
		xara[i] = -t*pi/mlol[0] + ((2*t*pi/mlol[0])/nplol)*i;
		yara[i] = Math.sqrt(k*Math.pow((Math.sin(xara[i]*mlol[0]*Math.pow(10,-10)/2)),2)); 
		
		points.push({x: xara[i], y: yara[i]});
	
	}
	var max = Math.max(yara);
	console.log( Math.max(...yara));
	
	console.log(points);
	var ctx = document.getElementById("myChart");
	var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'scatter',
	
    data: {
		
        
        datasets: [
		
		{
            label: mlol[3],
			fill: true,
            data: points,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0,0,222,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
		],
		
		
    },
    options: {
		
        scales: {

            yAxes: [{
				type : "linear",
				
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:true
                }
            }],
			xAxes: [{
				type : "linear",
				
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:true
                }
            }]
        }
			
		
    }
});
	}
function npChanged(){
var npd = document.getElementById("np");
	
	var np = parseInt(npd.value);
	console.log(typeof nValueF);
	
	document.getElementById("nnp").innerHTML = "<h3>Точек на графике: </h3>" + "<h2>" + np +  "</h2>";
	nplol = np;
	flagPoints = true;
	flags();
};

function rbChange(){
document.getElementById("test1").innerHTML = "<h3>Кнопку то нажали а толку</h3>";

var rbValue = document.getElementsByName('material');
console.log(rbValue);
var retVal;
var mT = false;
for (var i =0 ; i< rbValue.length; i++){
	if (rbValue[i].checked){
		var a = rbValue[i].value;
	
	document.getElementById("test1").innerHTML = "<h3>Вы выбрали:</h3>  " + rbValue[i].value ;
	materialProterties(a);
	lol = materialProterties(a);
	mlol = materialProterties(a);
	console.log(lol);
	flagMaterial = true;
	flags();
	
	}
	
}

}

function nChanged(){
	
	var nValue = document.getElementById("n");
	console.log(nValue.value);
	console.log(typeof nValue.value);
	var nValueF = parseInt(nValue.value);
	console.log(typeof nValueF);
	
	document.getElementById("nn").innerHTML = "<h3>Число Соседей:</h3>" + "<h2>" + nValueF +  "</h2>";
	nlol = nValueF;
	flagNumber = true;
	flags();
}
;
function materialProterties(a){
	
	console.log(a);
	var ma;	
	switch(a){
	case "sodium" :     ma = [3.71,0.52, 22.98976928 , "Натрий" ]; break; // Расстояние до соседа ; Модуль Юнга ; Масса одного атома ; Label Name; MorseEpsilon ; MorseAlpha ; MorseSigma; 
	case "lead" :       ma = [3.49,4.34, 207.21111111 , "Свинец" ]; break;
	case "aluminum" :   ma = [2.86,7.35, 26.98153857, "Алюминий"]; break;
	case "silicon" :    ma = [2.35,10.1, 28.084 , "Кремний" ]; break;
	case "germanium" :  ma = [2.44,7.9, 72.63088888 , "Германий"]; break;
	case "copper" :     ma = [2.55,13.4,63.54633333 , "Медь", 0.3429 , 1.3588 , 2.866]; break;
	default : ma = [n/a, n/a , n/a]; break;
	
	};
	document.getElementById("ndist").innerHTML ="<h3>Расстояние до ближайшего соседа:</h3>" + "<h2>" +  ma[0]  + "</h2>";
	document.getElementById("yung").innerHTML ="<h3>Объёмный модуль упругости:</h3>" + "<h2>" +ma[1]+"</h2>";
	document.getElementById("ama").innerHTML ="<h3>Атомная масса:</h3>" + "<h2>"+ ma[2]+"</h2>";
	return ma;
	
}

// Morse Potential;
