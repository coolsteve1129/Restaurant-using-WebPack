(()=>{"use strict";function e(e,n,t){const o=document.createElement("div");return o.id=e,o.classList.add("tab"),o.textContent=n,o.addEventListener("click",t),o}const n=()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.innerHTML="The Restaurant at the End of the World",n.id="title",e.appendChild(n);const t=document.createElement("p");t.innerHTML="Come one come all to the greatest show on earth! You can watch the universe end all while enjoying food from our delicious menu. Some of our dishes include Glorp, Snarf Burgers (made with free-range snarfalope no hormones added), as well as our Universe-famous Schlafgidulorsic. Watch the universe collapse all in one evening filled with explosions as well as implosions of destruction. It'll be quite the spectacle you'll wish you could come back for!!!",t.id="hPDescription",e.appendChild(t)};let t=null;const o=e=>{t!==e&&(t&&t.classList.remove("active"),t=e,t.classList.add("active"))},c=(()=>{const e=document.createElement("div");return e.id="tabs",document.body.insertBefore(e,document.getElementById("content")),e})(),d=e("homeTab","Home",(()=>{o(d),n()})),l=e("contactTab","Contact",(()=>{o(l),(()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.id="contact";const t=document.createElement("h2");t.innerHTML="Contact Us";const o=document.createElement("p");o.innerHTML="Email: contact@example.com";const c=document.createElement("p");c.innerHTML="Phone: 123-456-7890",n.appendChild(t),n.appendChild(o),n.appendChild(c),e.appendChild(n)})()})),a=e("menuTab","Menu",(()=>{o(a),function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.classList.add("menu");const t=document.createElement("h2");t.innerHTML="Menu";const o=document.createElement("ul"),c=document.createElement("li");c.textContent="Glorp";const d=document.createElement("li");d.textContent="Snarf Burger";const l=document.createElement("li");l.textContent="Burger",o.appendChild(c),o.appendChild(d),o.appendChild(l),n.appendChild(t),n.appendChild(o),e.appendChild(n)}()}));c.appendChild(d),c.appendChild(l),c.appendChild(a),n()})();