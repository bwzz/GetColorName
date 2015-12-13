function parseRGBColor(colorStr, start) {
  var color = {
    r : parseInt(colorStr.substr(start, 2), 16),
    g : parseInt(colorStr.substr(start + 2, 2), 16),
    b : parseInt(colorStr.substr(start + 4, 2), 16)
  }
  return color;
}

function toColor(color) {
  return "#" + color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
}

function calculate(rgb) {
  var diff = 100000;
  var res;
  for (var i = 0; i < pallet.length; ++i) {
    color = pallet[i];
    crgb = parseRGBColor(color.color, 1);

    dd = Math.pow(crgb.r - rgb.r, 2) + Math.pow(crgb.g - rgb.g, 2) + Math.pow(crgb.b - rgb.b, 2);
    if (dd < diff) {
      diff = dd;
      res = color;
    }
  }
  return res;
}

function camelToUnderScore(camel) {
  camel = camel.replace(/^(\w)/, function($0, $1) {
      return $1.toLowerCase();
  });
  return camel.replace(/([^A-Z])([A-Z])/g, function ($0, $1, $2) {
            return $1 + "_" + $2.toLowerCase();
        })
}