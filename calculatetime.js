<script>
$(document).ready(function () {
    var datetime = new Date();
    var datetime1 = new Date();
        var starttime = datetime1.toLocaleTimeString();
       

   


    $('#abc').click(function abcd() {
        
        

        alert(starttime);
        
        
    });
    $('#def').click(function defg(){
      var datetime2 = new Date();
    	var endtime = datetime2.toLocaleTimeString();
   
      alert(endtime);
     
    });

});
</script>