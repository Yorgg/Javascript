//only up to 3300 for now

(function(global){

  var Romanize = function (n){
    var k = new Romanize.init(n);
    return k.out
  }

  Romanize.prototype = { 

    numeral: {  
        one: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ten: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        hundred: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        thousand: ["", "M", "MM", "MMM"],
    },

    convert: function(num){
        this.out.unshift(this.numeral.one[parseInt(num%10/1)]);
        this.out.unshift(this.numeral.ten[parseInt(num%100/10)]);
        this.out.unshift(this.numeral.hundred[parseInt(num%1000/100)]);
        this.out.unshift(this.numeral.thousand[parseInt(num%10000/1000)]);
        this.out = this.out.join("");
    },

  };
  
  Romanize.init =  function(n) {
        this.out = [];
        this.convert(n);
  };
  
  //Set the function prototype property the Romanize prototype, so every object made in the constructor function has these prototypes
  Romanize.init.prototype = Romanize.prototype;

  //So you can call R$ from the window object
  global.R$ = Romanize;

}(window));


