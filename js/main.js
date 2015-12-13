function showColor() {
  var colorStr = document.getElementById("color_input").value;
  
  if (!(/^(\d|[a-f]){6}$/i.test(colorStr))) {
    return;
  }
  var color = calculate(parseRGBColor(colorStr, 0));

  var div = document.getElementById('color_div');
  div.innerHTML =  color.name;
  div.style.backgroundColor = color.color; 

  var androidDiv = document.getElementById('android_color');
  androidDiv.innerHTML = '&lt;color name="' + camelToUnderScore(color.name) + '"&gt;#' + colorStr + '&lt;/color&gt;';
  androidDiv.style.backgroundColor = '#' + colorStr;
}

//http://stackoverflow.com/questions/25099409/copy-to-clipboard-as-plain-text
function executeCopy(text) {
    var input = document.createElement('textarea');
    input.style.height = 0;
    document.body.appendChild(input);
    input.value = text.replace(/&lt;/g,'<').replace(/&gt;/g, '>');
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

function copyColor() {
  var color_div = document.getElementById('android_color');
  executeCopy(this.innerHTML);
}

document.getElementById("color_input")
    .addEventListener("input", showColor, false);

document.getElementById("color_div")
    .addEventListener("click", copyColor);

document.getElementById("android_color")
    .addEventListener("click", copyColor);
