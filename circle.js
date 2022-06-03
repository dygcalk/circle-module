function circleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return console.log(area);
}

function circleCircumference(radius) {
  const circum = Math.PI * radius * 2;
  return console.log(circum);
}

module.exports = {
  circleArea,
  circleCircumference,
};
