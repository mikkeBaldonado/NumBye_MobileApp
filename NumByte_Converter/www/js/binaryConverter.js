 var cfrom = "";
  var cto = "";

    function checkFrom() {
      var fromBtn = document.getElementsByName("from");
      var len = fromBtn.length;
      for (var i = 0; i < len; i++) {
        if (fromBtn[i].checked){
          cfrom = fromBtn[i].value;
        }
      }
    }

    function checkTo() {
      var toBtn = document.getElementsByName("to");
      var len = toBtn.length;

      for (var i = 0; i < len; i++) {
        if (toBtn[i].checked){
          cto = toBtn[i].value;
        }
      }
    }


    function convert()
    {
       size = document.getElementById("firstNumber").value;

        if(cfrom < cto){
            if(cfrom == 1 && cto != 1){
                var bytesize = size/8 ;
                if (cfrom == 1 && cto == 2){
                    document.getElementById("result3").innerHTML = bytesize;
                }
                else{
                    for(var x = 1; x < cto-cfrom; x++ ){
                      bytesize/=1024;
                    }
                    document.getElementById("result3").innerHTML = bytesize;
                }
            }
            else{
                for(var x=0; x < cto-cfrom; x++ ){
                    size/=1024;
                }
                document.getElementById("result3").innerHTML = size;
            }
                
        }
        else if (cfrom > cto ){
            if( cfrom != 1 && cto == 1){
                var bytesize = size*8 ;
                if (cfrom == 2 && cto == 1){
                    document.getElementById("result3").innerHTML = bytesize;
                }
                else{
                    for(var x=1; x < cfrom-cto; x++ ){
                      bytesize*=1024;
                      document.getElementById("result3").innerHTML = bytesize;
                    }
                }
            }
            else{
                for(var x=0; x < cfrom-cto; x++ ){
                  size*=1024;
                }
                document.getElementById("result3").innerHTML = size;
            }
            
        }
        else{
            document.getElementById("result3").innerHTML = size; //equal
        }
      
    }