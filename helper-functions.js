function parseXML(xmlString) {
  //just one approach, time will tell if an alternative is needed
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

function getScriptsContentInDoc(){
  var scriptEle = document.getElementsByTagName('script');
  return Array.from(scriptEle).map(function(element){
    return element.textContent;
  });
}
function parseXML(xmlString) {
        //just one approach, time will tell if an alternative is needed
  var wrapper= document.createElement('div');
  wrapper.innerHTML= xmlString;
  var div= wrapper.firstChild;
  
  return wrapper.childNodes;
}