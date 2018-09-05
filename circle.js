/*var PI = Math.PI;

function area(r) {
  return PI * r * r;
};

function circumference(r) {
  return 2 * PI * r;
};

/* export the functions by attaching them to the exports object */

/*exports.area = area;
exports.circumference = circumference;*/

/*var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};*/

var PI = Math.PI;

module.exports = {
	area: function (r) {
		return PI * r * r;
	},
	circumference: function (r) {
		return 2 * PI * r;
	}
};