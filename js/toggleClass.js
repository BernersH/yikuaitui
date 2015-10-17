function hasClass(obj, cls) {  
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
    }  
      
    function addClass(obj, cls) {  
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
    }  
      
    function removeClass(obj, cls) {  
        if (hasClass(obj, cls)) {  
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
            obj.className = obj.className.replace(reg, ' ');  
        }  
    }  
      
    function toggleClass(obj,cls,string1,string2){  
        if(hasClass(obj,cls)){  
            removeClass(obj, cls);  
            obj.innerText = string1;
        }else{  
            addClass(obj, cls);  
            obj.innerText = string2;
        }  
    } 
    function Siblings(elm) {
 var a = [];
 var p = elm.parentNode.children;
 for(var i =0,pl= p.length;i<pl;i++) {
  if(p[i] !== elm) a.push(p[i]);
 }
 return a;
}