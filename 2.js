document.addEventListener("DOMContentLoaded",function(){function findCommonNames(e,t,n,o){const a=o==="LOADING"?e:t;const s=n.filter(e=>a.includes(e));return s}var n=sessionStorage.getItem("mode");var e=JSON.parse(sessionStorage.getItem("data")||"[]");var t=JSON.parse(sessionStorage.getItem("loading")||"[]");var o=JSON.parse(sessionStorage.getItem("unloading")||"[]");var a=sessionStorage.getItem("cookie1");var s=sessionStorage.getItem("cookie2");var r=atob(a);var i=atob(s);if(n){document.getElementById("username").textContent=r+"!"}else{document.getElementById("username").textContent="UNAUTHORIZED ACCESS!"}const d=findCommonNames(t,o,e,n.toUpperCase());var m=document.getElementById("buttons-container");var c=d;c.forEach(function(e){var t=document.createElement("button");t.textContent=e;t.className="btn btn-orange";t.addEventListener("click",function(){if(n.toLowerCase()==="loading"){window.location.href="3.html"}else if(n.toLowerCase()==="unloading"){window.location.href="5.html"}sessionStorage.setItem("selectedROCode",e)});m.appendChild(t)})});