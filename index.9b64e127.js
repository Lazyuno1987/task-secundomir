const e=document.querySelector(".minute"),t=document.querySelector(".seconds"),n=document.querySelector(".miliseconds"),r=document.querySelector(".start"),c=document.querySelector(".stop"),o=document.querySelector(".wait"),l=document.querySelector(".reset");r.addEventListener("click",s),o.ondblclick=function(){clearInterval(i)},c.addEventListener("click",(function(){clearInterval(i),a=0,d=0,u=0,t.textContent="00",e.textContent="00"})),l.addEventListener("click",(function(){clearInterval(i);const n=document.querySelector(".results"),r=document.createElement("div");r.innerText=`Result: ${u}:${d}`,n.append(r),a=0,d=0,u=0,t.textContent="00",e.textContent="00",s()}));let i,u=0,d=0,a=0;function s(){clearInterval(i),i=setInterval(x,10)}function x(){a+=1,a<9&&(n.innerText="0"+a),a>9&&(n.innerText=a),a>99&&(d+=1,t.innerText="0"+d,a=0,a.innerText="0"+a),d<9&&(t.innerText="0"+d),d>9&&(t.innerText=d),d>59&&(u+=1,e.innerText="0"+u,d=0,d.innerText="0"+d)}
//# sourceMappingURL=index.9b64e127.js.map