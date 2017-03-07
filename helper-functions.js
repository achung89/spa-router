function parseXML(xmlString) {
  //just one approach, time will tell if another one will be implemented
  var wrapper= document.createElement('div');
  wrapper.innerHTML= xmlString;
  var div= wrapper.firstChild;
  
  return wrapper.childNodes;
}

function executeEmbeddedJavascript(scripts) {
  scripts.forEach( function(scriptText){
    var head = document.getElementsByTagName("head")[0] ||
              document.documentElement,
    script = document.createElement("script");

    script.type = "text/javascript";
    try {
      script.appendChild(document.createTextNode(scriptText));      
    } catch(e) {
      script.text = scriptText;
    }

    head.insertBefore(script, head.firstChild);
    head.removeChild(script);
  });
}

function getScriptsContentInDoc(innerHTML){
  var scriptContentRE = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;

  var match;
  var scripts = [];
  while (match = scriptContentRE.exec(innerHTML)) {
    scripts.push(match[1]);
  }
  return scripts;
}
