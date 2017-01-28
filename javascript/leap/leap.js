var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (this.year % 100 == 0) {
    if (this.year % 400 == 0) {
      return true;
    }
    return false;
  }
  return this.year % 4 == 0;
};

module.exports = Year;
