//script  = https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js
var hours_procastinated = document.getElementById("Hours_procastinated").value;
var hours_active = document.getElementById("Hours_active").value;
//let newdata = [hours_procastinated,hours_active];
var h_p =  [];
var h_a = [];
var l_abels = [];
function addTo(){
    var validate_hours_p, validate_hours_a,wrong_text;
    validate_hours_p = document.getElementById("Hours_procastinated").value; 
    validate_hours_a = document.getElementById("Hours_active").value;
    if(isNaN(validate_hours_p) || validate_hours_p > 24 || validate_hours_p < 0){
        //alert("Invalid input");
    }
    if(isNaN(validate_hours_a) || validate_hours_a > 24 || validate_hours_a >= 24 - validate_hours_p || validate_hours_a < 0){
        alert("Invalid input");
    }
    else{
        h_p.push(document.getElementById("Hours_procastinated").value);
        h_a.push(document.getElementById("Hours_active").value);
        l_abels.push(document.getElementById("l_abels").value);
    }
    console.log(h_p,h_a,l_abels);
};

myData = {
        labels: l_abels,
        datasets: [
          {
            label: "Procastinated",
            fill: false,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: h_p,
          },
            {
            label: "Active",
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: h_a,
        }]
    };
   // newData = {
   //     labels: ["Today", "Tomorrow"],
   //     datasets: [
   //       {
   //         label: "Procastinated",
    //        fill: false,
     //       backgroundColor: 'rgb(190, 99, 255, 0.25)',
     //       borderColor: 'rgb(190, 99, 255)',
      //      data: newdata,
       //   },
       //     {
        //    label: "Active",
        //    fill: true,
        //    backgroundColor: 'rgba(255, 99, 132, 0.25)',
        //    borderColor: 'rgb(255, 99, 132)',
        //    data: newdata,
       // }]
   // };

Chart.defaults.global.defaultFontFamily = "monospace";
//Chart.defaults.line.spanGaps = true;
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        //type:'bar',
        data: myData,
    });

function updateChartType() {
    // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
         myChart.destroy();
         myChart = new Chart(ctx, {
           type: document.getElementById("chartType").value,
           data: myData,
         });
      };

function getGraph() {
       
       
        myChart.update();
        
      };
