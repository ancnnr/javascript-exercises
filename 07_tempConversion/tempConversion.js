const ftoc = function(far) {
  return Math.round(((far-32)*5/9.0)*10)/10;
};

const ctof = function(cel) {
  return Math.round((cel*9/5.0+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
