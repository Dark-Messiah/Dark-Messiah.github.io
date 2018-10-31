var yung = 2.5*Math.pow(10,10);
var dista = 2.82*Math.pow(10,-9);
var mass = 5.89*Math.pow(10,-26);
var k = yung/dista;
var koeff = Math.sqrt((4*k)/mass);
var xara = [1,2,3,4,5];
var yara = [10,20,30,50,60];
var points = [];
var n = 1000;


for (var i = 0 ; i<=n ; i++){
	xara[i] = -Math.PI/dista+((2*Math.PI/dista)/n)*i;
	//xara[i] = -10 + (20/n)*i;
};
for (var k = 0 ; k < xara.length; k++ ){
	if(xara[k] >= 0){
	yara[k]=koeff*Math.sin((xara[k])*dista/2);
	}
	else {
	yara[k]=-koeff*Math.sin((xara[k]*dista)/2);
	}
	
	
};
for (var i = 0 ; i<xara.length ; i++){
points.push({x: xara[i], y: yara[i]});
}


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        //labels: x,
        datasets: [{
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
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
			
		
    }
});