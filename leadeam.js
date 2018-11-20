var e = 2.04*1.602*Math.pow(10,-19) ; // Cohesive energy
//var e = e*200;
var r = 3.5*Math.pow(10,-10); // nearest neighbour distance;
var t =1;

var s = r/Math.pow(2,(1/6));
var n =200 ; // point count;
var nn = 10 ; // neighbours count;
var nnn =  5001;
var c112 = 1.660540*Math.pow(10,-27);
var m = 207.21111111*c112;
var mk = 4/m;
var points =[];
var nopoints =[];
var pointsd = [];
var pointsdd=[];
var pointsdc = [];
var pointsdcara= [];
var pointsdclast=[];
var xara = [];
var xaradc = [] ;
var yara= [];
var yarad= [];
var yaradd= [];
var yaradc = [];
var us = [];
var usd= [];
var usdd = [];
function startPlot(){
prepareData();
prepareData1();
prepareData2();
//dispersionCurve();
}
function nniChanged(){
	
	var nValue = document.getElementById("nni");
	
	var nValueF = parseInt(nValue.value);

    nn = nValueF;
	dispersionCurve();	
}

function createTable(){
 var table = document.getElementById("myTable");
 for (var i = 1 ; i<=nn; i++){
 var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
cell1.innerHTML = i;
	cell2.innerHTML = 4*e*(Math.pow((s/(r*i)), 12) - Math.pow((s/(r*i)),6));
		cell3.innerHTML = (4*e*6*Math.pow(s,6)*(Math.pow(r*i,6) -2 * Math.pow(s,6)))/Math.pow((r*i),13);
			cell4.innerHTML =(4*e*6*Math.pow(s,6)*(-26*Math.pow(s,6) +7 * Math.pow(i*r,6)))/Math.pow(i*r,14);	
 
 }
}
function prepareData(){
	for (var i = 0 ; i<n ; i++ ){
xara[i] = 9999*s/10000+(nn*s/n)*i/10;
//yara[i] = 4*e*(Math.pow((s/xara[i]), 12) - Math.pow((s/xara[i]),6));
yara[i] = e*(Math.pow((r/xara[i]), 12) - 2*Math.pow((r/xara[i]),6));
//yarad[i] = (4*e*6*Math.pow(s,6)*(Math.pow(xara[i],6) -2 * Math.pow(s,6)))/Math.pow(xara[i],13);
yarad[i] =e*(-12*Math.pow(r,12)*Math.pow(xara[i],-13) + 12*Math.pow(r,6)*Math.pow(xara[i],-7)) //http://web.mit.edu/8.01t/www/materials/InClass/IC_Sol_W13D3-3.pdf
//yaradd[i] = (4*e*6*Math.pow(s,6)*(26*Math.pow(s,6) -7 * Math.pow(xara[i],6)))/Math.pow(xara[i],14);
yaradd[i] =e*(12*13*Math.pow(r,12)*Math.pow(xara[i],-14) - 12*7*Math.pow(r,6)*Math.pow(xara[i],-8))
points[i] =({x: xara[i], y: yara[i]});
pointsd.push({x: xara[i], y: yarad[i]});
pointsdd.push({x: xara[i], y: yaradd[i]});


}
for (var i= 1; i<=100 ; i++ ){
	us[i] =  4*e*(Math.pow((s/(i*s)), 12) - Math.pow((s/(i*s)),6));
	usd[i] = (4*e*6*Math.pow(s,6)*(Math.pow(i*s,6) -2 * Math.pow(s,6)))/Math.pow(i*s,12);
	usdd[i] = (4*e*6*Math.pow(s,6)*(26*Math.pow(s,6) -7 * Math.pow(i*s,6)))/Math.pow(i*s,14);
}	
    console.log(us);
	console.log(usd);
	console.log(points);

	var ctx = document.getElementById("myChart");
	// Потенциал
var myChart = new Chart(ctx, {
    type: 'line',
	
    data: {
		
        
        datasets: [
		
		{
            label: "Потенциал Леннард-Джонса",
			fill: true,
            data: points,
            backgroundColor: [
                'rgba(255, 99, 132, 0.0)',
                'rgba(54, 162, 235, 0.0)',
                'rgba(255, 206, 86, 0.0)',
                'rgba(75, 192, 192, 0.0)',
                'rgba(153, 102, 255, 0.0)',
                'rgba(255, 159, 64, 0.0)'
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
				//display = true,
				labelString : "Distance",
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:false
                }
            }]
        }
			
		
    }
});
}
    // Первая Производная
function prepareData1() {
	
var ctx2 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx2, {
    type: 'line',
	
    data: {
		
        
        datasets: [
		
		{
            label: "Производная",
			fill: true,
            data: pointsd,
            backgroundColor: [
                'rgba(255, 99, 132, 0.0)',
                'rgba(54, 162, 235, 0.0)',
                'rgba(255, 206, 86, 0.0)',
                'rgba(75, 192, 192, 0.0)',
                'rgba(153, 102, 255, 0.0)',
                'rgba(255, 159, 64, 0.0)'
            ],
            borderColor: [
                'rgba(111,0,222,1)',
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
				//display = true,
				labelString : "Distance",
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:false
                }
            }]
        }
			
		
    }
});
	}
	// Вторая Производная
function prepareData2() {
	
var ctx3 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx3, {
    type: 'line',
	
    data: {
		
        
        datasets: [
		{
            label: "Вторая Производная",
			fill: true,
            data: pointsdd,
            backgroundColor: [
                'rgba(255, 99, 132, 0.0)',
                'rgba(54, 162, 235, 0.0',
                'rgba(255, 206, 86, 0.0)',
                'rgba(75, 192, 192, 0.0)',
                'rgba(153, 102, 255, 0.0)',
                'rgba(255, 159, 64, 0.0)'
            ],
            borderColor: [
                'rgba(111,0,0,1)',
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
				//display = true,
				labelString : "Distance",
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:false
                }
            }]
        }
			
		
    }
});
	}
function dispersionCurveOld() {	

for (var h = 1 ; h<=nn ; h++) {
		var k = (4*e*6*Math.pow(s,6)*(26*Math.pow(s,6) -7 * Math.pow(h*r,6)))/Math.pow(h*r,14);
	console.log(k);
		
if(h==1){
	for (var i = 0 ; i < n ; i++){
    xaradc[i] = -4*Math.PI/r+((8*Math.PI/r)/n)*i;
	yaradc[i] = Math.sqrt(k*Math.pow((Math.sin(xaradc[i]*r*h/2)),2)); 
	pointsdc.push({x: xaradc[i], y: yaradc[i]});


	}
		
}
else {
	
	for (var i = 0 ; i < n ; i++){
		var yara = xaradc[i];
	
yaradc[i] = yaradc[i] + Math.sqrt(Math.abs(k)*Math.pow((Math.sin(xaradc[i]*r*h/2)),2)); 
	

pointsdc[n*h+i] = ({x: xaradc[i], y: yaradc[i]});
}
}
console.log(h);
console.log(pointsdc);
}
	var ctx4 = document.getElementById("myChart3");
var myChart = new Chart(ctx4, {
    type: 'scatter',
	
    data: {
		
        
        datasets: [
		
		{
            label: "Test",
			fill: true,
            data: pointsdc,
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
				//display = true,
				labelString : "Distance",
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:false
                }
            }]
        }
			
		
    }
});
}
 // Дисперсионная Кривая
function dispersionCurve() {	

for (var h = 1 ; h<=nn ; h++) {
		var k = (4*e*6*Math.pow(s,6)*(26*Math.pow(s,6) -7 * Math.pow(h*r,6)))/Math.pow(h*r,14);
	console.log(h+" "+k);
		
if(h==1){
	for (var i = 0 ; i < n ; i++){
    xaradc[i] = -t*Math.PI/r+((2*t*Math.PI/r)/n)*i;
	yaradc[i] = Math.sqrt(mk*k*Math.pow((Math.sin(xaradc[i]*r*h/2)),2)); 
	pointsdc.push({x: xaradc[i], y: yaradc[i]});


	}
		
}
else {
	
	for (var i = 0 ; i < n ; i++){
		var yara = xaradc[i];
	
yaradc[i] = yaradc[i] + Math.sqrt(mk*Math.abs(k)*Math.pow((Math.sin(xaradc[i]*r*h/2)),2)); 
	

pointsdclast[i] = ({x: xaradc[i], y: yaradc[i]});
}
}

}
var mmax = Math.max(...yaradc);
console.log("for"+nnn+"neighbours"+"  "+mmax);
	var ctx4 = document.getElementById("myChart3");
var myChart = new Chart(ctx4, {
    type: 'scatter',
	
    data: {
		
        
        datasets: [
		
		{
            label: "1 Сосед",
			fill: true,
            data: //nopoints,
			pointsdc,
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
		{
            label: nn +" Соседей",
			fill: true,
            data: pointsdclast,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(251,0,0,1)',
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
				//display = true,
				labelString : "Distance",
				
				
                ticks: {
				callback: function(value,index,values){
				return value.toExponential();
				} ,
                   beginAtZero:false
                }
            }]
        }
			
		
    }
});

}