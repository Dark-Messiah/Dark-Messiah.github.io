var yung = 2.5*Math.pow(10,10);
var yungLead = 4.34*Math.pow(10,10);
var yungDiamond = 10.1*Math.pow(10,10);

var dista = 2.82*Math.pow(10,-10);
var distaLead = 3.49*Math.pow(10,-10);
var mass = 5.89*Math.pow(10,-26);
var massLead1 = 3.5*Math.pow(10,-25);
var massLead = 207.2*1.660540*Math.pow(10,-27);

var k = yung/dista;
var k2n = yung/(dista*2);
var kLead = yungLead/distaLead;
var kLead2n = yungLead/(distaLead*2);
var kLead3n = yungLead/(distaLead*3);
var koeff = Math.sqrt((4*k)/mass);
var koeffLead = Math.sqrt((4*kLead)/massLead);
var koeffLead2n = Math.sqrt((4*(kLead+kLead2n))/massLead);
var koeffLead3n = Math.sqrt((4*(kLead+kLead2n+kLead3n))/massLead);
var xara = [1,2,3,4,5];
var xaraLead = [1,2,3,4,5];
var yara = [10,20,30,50,60];
var yaraLead = [10,20,30,50,60];
var yaraLead2n = [10,20,30,50,60];
var yaraLead3n = [10,20,30,50,60];
var pointsLead = [];
var pointsLead2n = [];
var pointsLead3n = [];
var points = [];




var n = 1000;

function plotMyPlot(t){
function generateX(tt){	
for (var i = 0 ; i<=n ; i++){
	xara[i] = -tt*Math.PI/dista+((2*tt*Math.PI/dista)/n)*i;
	//xara[i] = -10 + (20/n)*i;
	xaraLead[i] = -tt*Math.PI/distaLead+((2*tt*Math.PI/distaLead)/n)*i;
};
}
generateX(t);
generateY();
givePoints();
console.log(t);
function generateY(){
for (var k = 0 ; k < xara.length; k++ ){
	if(xara[k] >= 0){
	//yara[k]=Math.sqrt(koeff)*Math.sin((xara[k])*dista/2);
	//yaraLead[k] = Math.sqrt(koeffLead)*Math.sin((xaraLead[k])*distaLead/2);
	yaraLead2n[k] = Math.sqrt(koeffLead2n)* Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2)+Math.pow(Math.sin((2*xaraLead[k])*distaLead/2),2) );
	yaraLead3n[k] = Math.sqrt(koeffLead3n)* Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2)+Math.pow(Math.sin((2*xaraLead[k])*distaLead/2),2) + Math.pow(Math.sin((3*xaraLead[k])*distaLead/2),2)  );
	yaraLead[k] =  Math.sqrt(koeffLead)*Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2));
	}
	else {
	//yara[k]=-Math.sqrt(koeff)*Math.sin((xara[k]*dista)/2);
	//yaraLead[k] = -Math.sqrt(koeffLead)*Math.sin((xaraLead[k])*distaLead/2);
	yaraLead[k] =  Math.sqrt(koeffLead)*Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2));
	yaraLead2n[k] = Math.sqrt(koeffLead2n)* Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2)+Math.pow(Math.sin((2*xaraLead[k])*distaLead/2),2) );
	yaraLead3n[k] = Math.sqrt(koeffLead3n)* Math.sqrt(Math.pow(Math.sin((xaraLead[k])*distaLead/2),2)+Math.pow(Math.sin((2*xaraLead[k])*distaLead/2),2) + Math.pow(Math.sin((3*xaraLead[k])*distaLead/2),2)  );
	
	}
	
	
};
};
function givePoints(){
for (var i = 0 ; i<xara.length ; i++){
points.push({x: xara[i], y: yara[i]});
pointsLead.push({x: xaraLead[i], y: yaraLead[i]});
pointsLead2n.push({x: xaraLead[i], y: yaraLead2n[i]});
pointsLead3n.push({x: xaraLead[i], y: yaraLead3n[i]});
}
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'scatter',
	
    data: {
		
        //labels: x,
        datasets: [
		/*{
			
            label: 'Omega',
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
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },*/
		{
            label: 'OmegaLead',
			fill: true,
            data: pointsLead,
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
            label: 'OmegaLead2n',
			fill: true,
            data: pointsLead2n,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0,222,222,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
		{
            label: 'OmegaLead3n',
			fill: true,
            data: pointsLead3n,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(220,222,222,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
		
		
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
