!function(e,t){var n=function(e){this.options=Object.assign({},{draw:!0},e),this.target=document.body};n.prototype.version="0.0.9",n.prototype.getUniqueId=function(e,t){if(!(e instanceof HTMLElement))return console.error&&console.error("非法输入，不是一个HTML元素"),null;var o={uniqueId:"",queryType:""},r=e.id,i=e.name,d="",a=e.classList;a&&a.forEach(function(e){d=d+"."+e});var l=e.tagName.toLowerCase(),u=e.type?e.type.toLowerCase():"";if("body"!==l&&"html"!==l||(o.uniqueId=l,o.queryType=l),r&&document.getElementById(r)===e){var c=new RegExp("^[a-zA-Z]+");t?c.test(r)&&(o.uniqueId=l+"#"+r):o.uniqueId=r,o.queryType="byId"}if(!o.uniqueId&&i&&document.getElementsByName(i)[0]===e&&(o.uniqueId=i,o.queryType="byName"),!o.uniqueId&&d&&document.querySelector(l+d)===e&&(o.uniqueId=l+d,o.queryType="byClass"),"radio"===u){var p=l+"[value='"+e.value+"']";i&&(p+="[name='"+i+"']"),document.querySelector(p)===e&&(o.uniqueId=p,o.queryType="byValue")}if(!o.uniqueId){p=l;p=d?p+d:p,p=i?p+"[name='"+i+"']":p,n.prototype.getTarget(p)===e&&(o.uniqueId=p,o.queryType="byMixed")}if(!o.uniqueId){p=l;p=d?p+d:p;var s=document.querySelectorAll(p);if(s&&s.length>0){for(var y=null,m=0;m<s.length;m++)if(e===s[m]){y=m+1;break}y&&(p=p+":nth-child("+y+")",document.querySelector(p)===e&&(o.uniqueId=p,o.queryType="byOrder"))}}if(!o.uniqueId){var f=n.prototype.getUniqueId(e.parentNode,!0).uniqueId;if(!f)return;var h=l;d&&(h+=d);p=f+">"+h;if(document.querySelectorAll(p).length>1){p=null;for(y=null,m=0;m<e.parentNode.children.length;m++)if(e.parentNode.children[m]===e){y=m+1;break}if(y>=1){p=f+">"+h+":nth-child("+y+")";document.querySelector(p)!=e&&(p=null)}}o.uniqueId=p,o.queryType="byParent"}return!t&&this.options.draw&&n.prototype.draw(o),o},n.prototype.getTarget=function(e){return document.getElementById(e)||document.getElementsByName(e)[0]||document.querySelector(e)},n.prototype.draw=function(t){if(t){console.log("draw");var o=n.prototype.getTarget(t.uniqueId);if(o){var r=document.getElementById("whats-element-tip-container")?document.getElementById("whats-element-tip-container"):document.createElement("aside");r.id="whats-element-tip-container",r.innerHTML="",r.addEventListener("click",function(e){e.stopPropagation()});var i=document.createElement("div");i.id="whats-element-tip-delete",i.innerText="x",i.onclick=function(){r.outerHTML=""},r.appendChild(i);var d=document.createElement("div");d.id="whats-element-unique-container";var a=document.createElement("input");a.readOnly=!0,a.id="whats-element-unique-id",a.className=t.queryType,a.value=t.uniqueId;var l=document.createElement("div");l.id="whats-element-copy",l.setAttribute("query-type",t.queryType),l.innerText="复制",l.onclick=function(){a.select(),document.execCommand("Copy")},d.appendChild(a),d.appendChild(l),r.appendChild(d);var u=document.createElement("div");u.id="whats-element-inner-text",u.innerText=n.prototype.getTarget(t.uniqueId).innerText,r.appendChild(u);var c=o.getBoundingClientRect().left,p=o.getBoundingClientRect().top+o.offsetHeight,s=c+e.screenX;s>100&&(s=s-(240|r.offsetWidth)/2+o.offsetWidth/2-document.body.getBoundingClientRect().left),r.style.left=s+"px",r.style.top=p+e.scrollY+"px",document.body.appendChild(r),document.onclick=function(e){e.target!=o&&n.prototype.clean()}}else console.error&&console.error("不存在该HTML对象，无法绘制")}else console.log("no result")},n.prototype.clean=function(){var e=document.getElementById("whats-element-tip-container");e&&(console.log("clean"),e.parentNode.removeChild(e))},void 0!==e&&null!==e&&(e.whatsElement=n),void 0!==e&&null!==e||(this.whatsElement=n),"undefined"!=typeof module&&module.exports&&(module.exports=n),"function"==typeof define&&define(function(){return n});var o=document.createElement("style"),r="#whats-element-tip-container{position: absolute;white-space: nowrap;background: #333740;color: #8ed3fb;font-size: 14px;z-index: 1000;background-color: rgba(255, 255, 255,0.95);box-sizing: border-box;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}";r+="#whats-element-tip-delete{cursor: pointer;position: absolute;top: -10px;width: 20px;height: 20px;left: calc(50% - 8px);clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);background: #fff;text-align: center;}",r+="#whats-element-tip-delete:hover{background:#fffbf0}",r+="#whats-element-unique-container{display:flex;justify-content: space-around;}",r+="#whats-element-unique-id{border:1px solid #d1d5da;border-radius:3px;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);background-color:#fff;line-height: 20px;text-indent:10px;}",r+="#whats-element-copy{background:aliceblue;text-align: center;border-radius: 5px;cursor: pointer;}",r+="#whats-element-copy::after{position: absolute;z-index: 1000000;padding: 0.1em 0.75em;color: #fff;text-align: center;text-shadow: none;text-transform: none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}",r+="#whats-element-copy:hover:after{display:inline-block;opacity: 1;}",r+=".byId{color:#f20c00}",r+=".byName{color:#4b5cc4}",r+=".byValue{color:#75664d}",r+=".byClass{color:#808080}",r+=".byMixed{color:#a78e44}",r+=".byOrder{color:#eedeb0}",r+=".byParent{color:#edd1d8}",r+="#whats-element-inner-text{color:#ddd;max-width:200px;max-height:100px;overflow:hidden;text-overflow:ellipsis;}",o.innerText=r,document.head.appendChild(o)}(window);