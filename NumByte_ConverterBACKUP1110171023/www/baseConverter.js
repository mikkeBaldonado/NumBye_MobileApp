/**
* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/

(function(){
    cfrom = Number(document.getElementById("cfrom").value);
    cto = Number(document.getElementById("cto").value);
    val = document.getElementById("val").value;
    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.cnvrt = function (num) {
        return ConvertBase(num).from(cfrom).to(cto);
    };
       
    this.ConvertBase = ConvertBase;
    
})(this);

alert(ConvertBase.cnvrt(val));
console.log(ConvertBase.cnvrt(val));

/*
* Usage example:
* ConvertBase.bin2dec('111'); // '7'
* ConvertBase.dec2hex('42'); // '2a'
* ConvertBase.hex2bin('f8'); // '11111000'
* ConvertBase.dec2bin('22'); // '10110'
*/
