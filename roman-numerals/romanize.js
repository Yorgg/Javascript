(function(global){

  var Romanize = function (n){
    var roman = new Romanize.init(n);
    return roman.out
  }

  Romanize.prototype = { 
    numeral: {  
      one: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ten: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      hundred: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      thousand: ["", "M", "MM", "MMM",]
    },

    //Multiplies the roman numeral by x1000, by adding a border on top//
    makeBig: function(num){
      return ('<bigNum>' + num + '</bigNum>')
    },

    convert: function(num){
      console.log("converting number...")
      this.out.unshift(this.numeral.one[parseInt(num%10/1)]);
      this.out.unshift(this.numeral.ten[parseInt(num%100/10)]);
      this.out.unshift(this.numeral.hundred[parseInt(num%1000/100)]);
      //thousand//
      this.out.unshift(this.makeBig(this.numeral.one[parseInt(num%10000/1000)]));
      //ten thousand//
      this.out.unshift(this.makeBig(this.numeral.ten[parseInt(num%100000/10000)]));
      //hundred thousand//
      this.out.unshift(this.makeBig(this.numeral.hundred[parseInt(num%1000000/100000)]));
      //million//
      this.out.unshift(this.makeBig(this.numeral.thousand[parseInt(num%10000000/1000000)]));
      this.out = this.out.join("");
      console.log("conversion complete")
    },
  };
  
  Romanize.init =  function(n) {
    this.out = [];
    this.convert(n);
  };
  
  //Set the function prototype property to the Romanize prototype, 
  Romanize.init.prototype = Romanize.prototype;

  //Call R from the window object
  global.R = Romanize;

}(window));


