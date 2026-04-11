function analyze(){
let input=document.getElementById('input').value||"";
let output="";
let insights="";

// JS to TS basic hint
if(input.includes("function")){
  output += "function example(arg: any): any {\n  return arg;\n}\n";
}

// detect any
if(input.includes("any")){
  insights += "Usage of 'any' detected.<br>";
}

// legacy patterns
if(input.includes("var")){
  insights += "Legacy 'var' usage detected.<br>";
}
if(input.includes("==")){
  insights += "Loose equality detected. Consider strict equality.<br>";
}

// refactor hints
if(input.length > 200){
  insights += "Large file. Consider modularization.<br>";
}

if(!insights) insights="No major migration issues detected.";

document.getElementById('result').innerHTML =
"<b>Output:</b><pre>"+output+"</pre><br>"+insights;
}
