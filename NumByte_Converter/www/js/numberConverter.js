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


/*function checkIfBinaryNum(numInput) {
  var re =/^([-+]?[01]*)(\.[01]*)?$/;

  if(re.test(numInput)) {
    //alert('valid hex');
    return 0;
  } else {
    //alert('invalid');
    return -1;
  }
  re.lastIndex = 0;
}*/



function compute() {
    val = document.getElementById("val").value;
    var tmpvar;
    var reExpBin =/^([-+]?[01]*)(\.[01]*)?$/;
    var reExpHex =/^([-+]?[0-9a-f]*)(\.[0-9a-f]*)?$/i;
    var reExpDec =/^([-+]?\d*)(\.\d*)?$/;
    var reExpOct =/^([-+]?[0-7]*)(\.[0-7]*)?$/;


    if (cfrom == 1 && cto == 1){
        // b2b
        if (reExpBin.test(val)) {
          document.getElementById("result3").innerHTML = val;
        }
        else{
          alert("Please input binary number (0 or 1)");
        }
    
    } 
    else if (cfrom == 1 && cto == 2){
        // b2o
        if (reExpBin.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'BO');
        }
        else{
          alert("Please input binary number (0 or 1)");
        }
    }
    else if (cfrom == 1 && cto == 3){
        // b2d
        if (reExpBin.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'BD');
        }
        else{
          alert("Please input binary number (0 or 1)");
        } 
    }
    else if (cfrom == 1 && cto == 4){
        // b2h
        tmpvar = parseInt(val,2);
        if (isNaN(tmpvar)){
            alert("Please input binary number (0 or 1)");
        }else{
            if (reExpBin.test(val)) {
              document.getElementById("result3").innerHTML = dec_to_bho(val,'BH');  
            }
            else{
              alert("Please input binary number (0 or 1)");
            }
        }
    }
    else if (cfrom == 2 && cto == 1){
        // o2b
        if (reExpOct.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'OB');
        }
        else{
          alert("Please input Octal number");
        }
    }
    else if (cfrom == 2 && cto == 2){
        // o2o
        if (reExpOct.test(val)) {
          document.getElementById("result3").innerHTML = val;
        }
        else{
          alert("Please input Octal number");
        }
        
    }
    else if (cfrom == 2 && cto == 3){
        // o2d
        if (reExpOct.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'OD');
        }
        else{
          alert("Please input Octal number");
        }   
    }
    else if (cfrom == 2 && cto == 4){
        // o2h
        if (reExpOct.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'OH');
        }
        else{
          alert("Please input Octal number");
        }
        
    }
    else if (cfrom == 3 && cto == 1){
        // d2b
         if (reExpDec.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'DB');
        }
        else{
          alert("Please input Decimal number");
        }
        
    }
    else if (cfrom == 3 && cto == 2){
        // d2o
        if (reExpDec.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'DO');
        }
        else{
          alert("Please input Decimal number");
        }
    }
    else if (cfrom == 3 && cto == 3){
        // d2d
        if (reExpDec.test(val)) {
          document.getElementById("result3").innerHTML = val;
        }
        else{
          alert("Please input Decimal number");
        }
    }
    else if (cfrom == 3 && cto == 4){
        // d2h
        if (reExpDec.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'DH');
        }
        else{
          alert("Please input Decimal number (0 or 1)");
        }
        
    }
    else if (cfrom == 4 && cto == 1){
        // h2b
        tmpvar = parseInt(val,16);
        if (isNaN(tmpvar)){
            alert("Please input hexadecimal number (0-9 A-F a-f)");
        }else{
            if (reExpHex.test(val)) {
              document.getElementById("result3").innerHTML = val;
            }
            else{
              alert("Please input hexadecimal number (0-9 A-F a-f)");
            }
        }
    }
    else if (cfrom == 4 && cto == 2){
        // b2d
        if (reExpHex.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'HO');
        }
        else{
          alert("Please input hexadecimal number (0-9 A-F a-f)");
        }   
    }
    else if (cfrom == 4 && cto == 3){
        // h2d
        if (reExpHex.test(val)) {
          document.getElementById("result3").innerHTML = dec_to_bho(val,'HD');
        }
        else{
          alert("Please input hexadecimal number (0-9 A-F a-f)");
        }
    }
    else if (cfrom == 4 && cto == 4){
        //h2h
        if (reExpHex.test(val)) {
          document.getElementById("result3").innerHTML = val;
        }
        else{
          alert("Please input hexadecimal number (0-9 A-F a-f)");
        }
    }
    else{
        alert("ERROR: No such conversion type");
    }
}