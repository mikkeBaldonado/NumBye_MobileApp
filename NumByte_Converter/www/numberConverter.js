  var cfrom = "";
  var cto = "";

  function checkFrom() {
      var fromBtn = document.getElementsByName("from");
      var len = fromBtn.length;

      for (var i = 0; i < len; i++) {
        if (fromBtn[i].checked){
          //alert("you have selected the " + fromBtn[i].value);
          cfrom = fromBtn[i].value;
        }
      }
    }

    function checkTo() {
      var toBtn = document.getElementsByName("to");
      var len = toBtn.length;

      for (var i = 0; i < len; i++) {
        if (toBtn[i].checked){
          //alert("you have selected the " + toBtn[i].value);
          cto = toBtn[i].value;
        }
      }
    }
  

function dec_to_bho(n, base){
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
    }
    switch (base){ 
      case 'BO':  
      return parseInt(n, 2).toString(8);
      break;
      case 'BD':  
      return parseInt(n, 2).toString(10);
      break;
      case 'BH':  
      return parseInt(n, 2).toString(16);
      break;   
      case 'OB':  
      return parseInt(n, 8).toString(2);
      break;
      case 'OD':  
      return parseInt(n, 8).toString(10);
      break;  
      case 'OH':  
      return parseInt(n, 8).toString(16);
      break;
      case 'DB':  
      return parseInt(n, 10).toString(2);
      break;        
      case 'DO':  
      return parseInt(n, 10).toString(8);
      break;
      case 'DH':  
      return parseInt(n, 10).toString(16);
      break; 
      case 'HB':  
      return parseInt(n, 16).toString(2);
      break; 
      case 'HO':  
      return parseInt(n, 16).toString(8);
      break;
      case 'HD':  
      return parseInt(n, 16).toString(10);
      break;
      default:  
      return("Wrong input.........");  
      }
} 

function compute() {
    val = document.getElementById("val").value;
    var tmpvar;


    if (cfrom == 1 && cto == 1){
      
        // b2b
        document.getElementById("result3").innerHTML = val;
    }
    else if (cfrom == 1 && cto == 2){
        // b2o
        document.getElementById("result3").innerHTML = dec_to_bho(val,'BO');
    }
    else if (cfrom == 1 && cto == 3){
        // b2d
        document.getElementById("result3").innerHTML = dec_to_bho(val,'BD');
    }
    else if (cfrom == 1 && cto == 4){
        // b2h
        tmpvar = parseInt(val,2);
        if (isNaN(tmpvar)){
            document.getElementById("result3").innerHTML = 'NaN';
        }else{
            document.getElementById("result3").innerHTML = dec_to_bho(val,'BH');
        }
    }
    else if (cfrom == 2 && cto == 1){
        // o2b
        document.getElementById("result3").innerHTML = dec_to_bho(val,'OB');
    }
    else if (cfrom == 2 && cto == 2){
        // o2o
        document.getElementById("result3").innerHTML = val;
    }
    else if (cfrom == 2 && cto == 3){
        // d2b
        document.getElementById("result3").innerHTML = dec_to_bho(val,'OD');
    }
    else if (cfrom == 2 && cto == 4){
        // d2b
        document.getElementById("result3").innerHTML = dec_to_bho(val,'OH');
    }
    else if (cfrom == 3 && cto == 1){
        // d2b
        document.getElementById("result3").innerHTML = dec_to_bho(val,'DB');
    }
    else if (cfrom == 3 && cto == 2){
        // b2d
        document.getElementById("result3").innerHTML = dec_to_bho(val,'DO');
    }
    else if (cfrom == 3 && cto == 3){
        // d2d
        document.getElementById("result3").innerHTML = val;
    }
    else if (cfrom == 3 && cto == 4){
        // d2h
        document.getElementById("result3").innerHTML = dec_to_bho(val,'DH');
    }
    else if (cfrom == 4 && cto == 1){
        // h2b
        tmpvar = parseInt(val,16);
        if (isNaN(tmpvar)){
            document.getElementById("result3").innerHTML = 'NaN';
        }else{
            document.getElementById("result3").innerHTML = dec_to_bho(val,'HB');
        }
    }
    else if (cfrom == 4 && cto == 2){
        // b2d
        document.getElementById("result3").innerHTML = dec_to_bho(val,'HO');
    }
    else if (cfrom == 4 && cto == 3){
        // h2d
        document.getElementById("result3").innerHTML = dec_to_bho(val,'HD');
    }
    else if (cfrom == 4 && cto == 4){
        //h2h
        document.getElementById("result3").innerHTML = val;
    }
    else{
        alert("ERROR: No such conversion type");
    }
}