const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    if (typeof param !== 'string') {return false;}
    
    if (isNaN(param)) {return false;}
    
    return true;
  },
  addString: function (param) {
    if (typeof param !== 'string') { return false; }

    if (isNaN(param)) {
      this.NaNyStrings.push(param);
      return true;
    }
    
    this.numberyStrings.push(param);
    return true;
  },
  allStrings: function () {
    return [...this.numberyStrings, ...this.NaNyStrings]
  },
  evenStrings: function () {
    return this.numberyStrings.filter(x => x % 2 === 0);
  },
  oddStrings: function () {
    return this.numberyStrings.filter(x => x % 2 === 1 || x % 2 === -1);
  },
  negativeStrings: function () {
    return this.numberyStrings.filter(x => x < 0);
  },
  positiveStrings: function () {
    return this.numberyStrings.filter(x => x >= 0);
  },
  zeroStrings: function () {

    return this.numberyStrings.filter(x => x == 0);
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(x => Number(x));
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map((num) => Number(num));
  },
  sumOfNumbery: function () {
    return this.numberyAsNumbers().reduce((total, num) => {
      return total + num;
    }, 0);
  },
  sumOfNaNy: function () {
    return this.NaNyAsNumbers().reduce((total, num) => {
      return total + num;
    }, 0);
  }
};


