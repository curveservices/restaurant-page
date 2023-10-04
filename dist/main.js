(()=>{"use strict";const t=()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content");const n=document.createElement("h1");n.textContent="NEW CROSS BUNS",n.classList.add("title");const d=document.createElement("h2");d.textContent="South-east London's top bakery",d.classList.add("title"),e.appendChild(n),e.appendChild(d);const c=document.createElement("img");c.src="./assets/restaurant1.jpeg",c.height="",c.classList.add("home-image"),e.appendChild(c);const a=document.createElement("h3");a.textContent="Serving New Cross and surrounding South East London areas",e.appendChild(a),t.appendChild(e)};function e(){const t=document.querySelector("#content"),e=document.querySelector(".page-content");e&&t.removeChild(e)}(()=>{const n=document.querySelector("#nav"),d=document.createElement("img");d.src="./assets/IMG_3505.PNG",d.setAttribute("id","logo"),n.appendChild(d);const c=document.createElement("div"),a=document.createElement("button"),s=document.createElement("button"),o=document.createElement("button");a.setAttribute("id","home-btn"),s.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),c.classList.add("navigation"),a.classList.add("tab"),s.classList.add("tab"),o.classList.add("tab"),a.textContent="HOME",s.textContent="MENU",o.textContent="CONTACT",n.appendChild(c),c.appendChild(a),c.appendChild(s),c.appendChild(o),a.addEventListener("click",(()=>{e(),t()})),s.addEventListener("click",(()=>{e(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content");const n=document.createElement("h1");n.textContent="OUR BAKED GOODS",n.classList.add("title");const d=document.createElement("h2");d.textContent="All freshly hand made daily!",d.classList.add("title");const c=document.createElement("div");c.classList.add("menu-container");const a=document.createElement("h3");a.textContent="CINNAMON BUN £4.95",a.classList.add("item");const s=document.createElement("p");s.classList.add("item"),s.textContent="Vegan enriched cinemon bun with sweet vanillia icing";const o=document.createElement("img");o.src="./assets/IMG_3919.JPG",o.classList.add("food-img");const i=document.createElement("h3");i.textContent="BELGIAN BUN £4.95",i.classList.add("item");const l=document.createElement("p");l.classList.add("item"),l.textContent="Vegan enriched dough filled with lemon curd & topped with sweet icing and a glace cherry";const m=document.createElement("img");m.src="./assets/IMG_4013.JPG",m.classList.add("food-img");const p=document.createElement("h3");p.textContent="NUTELLA KNOT £3.95",p.classList.add("item");const r=document.createElement("p");r.classList.add("item"),r.textContent="A Vegan enriched dough filled with Nutella, tied up & topped with more Nutella ";const u=document.createElement("img");u.src="./assets/6D8820D8-0415-4225-84C2-068D990B397C.JPG",u.classList.add("food-img");const h=document.createElement("h3");h.textContent="CHELSEA BUN £3.95",h.classList.add("item");const C=document.createElement("p");C.classList.add("item"),C.textContent="A Vegan enriched sweet & spicy bun, swirled with sultanas & currents";const E=document.createElement("img");E.src="./assets/59DE13A4-63F3-4FDA-AA8D-F13E2AF20F40.JPG",E.classList.add("food-img");const L=document.createElement("h3");L.textContent="4 BRIOCHE ROLLS | £5.95 ",L.classList.add("item");const b=document.createElement("p");b.classList.add("item"),b.textContent="Vegan enriched brioche buns";const g=document.createElement("img");g.src="./assets/58F931AD-564E-41A3-A7A8-63F2EEBA1EB8.JPG",g.classList.add("food-img"),c.appendChild(a),a.appendChild(s),a.appendChild(o),c.appendChild(i),i.appendChild(l),i.appendChild(m),c.appendChild(p),p.appendChild(r),p.appendChild(u),c.appendChild(h),h.appendChild(C),h.appendChild(E),c.appendChild(L),L.appendChild(b),L.appendChild(g),e.appendChild(n),e.appendChild(d),e.appendChild(c),t.appendChild(e)})()})),o.addEventListener("click",(()=>{e(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");t.appendChild(e),e.classList.add("page-content");const n=document.createElement("h1");e.appendChild(n),n.classList.add("contacts-header"),n.textContent="ORDER NOW!";const d=document.createElement("div");e.appendChild(d),d.classList.add("contact-container");const c=document.createElement("h3");c.classList.add("contacts"),d.appendChild(c),c.textContent="CONTACTS";const a=document.createElement("h4");a.classList.add("contacts"),d.appendChild(a);const s=document.createTextNode("CALL US:  ");a.appendChild(s);const o=document.createElement("a");o.classList.add("contacts"),o.setAttribute("href","tel: +44 020 3455 4785"),o.textContent="+44 020 3455 4785",a.appendChild(o);const i=document.createElement("h4");d.appendChild(i),i.classList.add("contacts");const l=document.createTextNode("FOLLOW US:  ");i.appendChild(l);const m=document.createElement("a");m.classList.add("contacts"),m.setAttribute("href","https://www.instagram.com/newcrossbuns/"),m.setAttribute("target","_blank"),m.textContent="Instagram",i.appendChild(m);const p=document.createTextNode(" / ");i.appendChild(p);const r=document.createElement("a");r.classList.add("contacts"),r.setAttribute("href","https://www.facebook.com/newcrossbuns/"),r.setAttribute("target","_blank"),r.textContent="Facebook",i.appendChild(r);const u=document.createTextNode(" / ");i.appendChild(u);const h=document.createElement("a");h.classList.add("contacts"),h.setAttribute("href","https://twitter.com/ViveCrepe"),h.setAttribute("target","_blank"),h.textContent="Twitter",i.appendChild(h);const C=document.createElement("div");C.classList.add("times-container"),d.appendChild(C);const E=document.createElement("h4");E.classList.add("contacts"),E.textContent="OPENING TIMES: ",C.appendChild(E);const L=document.createElement("p");L.setAttribute("id","day-time"),L.textContent="Mon - Sat | 8am - 6pm",C.appendChild(L);const b=document.createElement("div");b.classList.add("form-container"),e.appendChild(b);const g=document.createElement("form");g.classList.add("contact-form");const A=document.createElement("h2");A.classList.add("contact-header"),A.textContent="CONTACT US!";const x=document.createElement("input");x.type="text",x.placeholder="Your full name",x.classList.add("input");const N=document.createElement("input");N.type="email",N.placeholder="you@example.com",N.classList.add("input");const w=document.createElement("input");w.type="text",w.placeholder="Your phone number",w.classList.add("input");const S=document.createElement("input");S.setAttribute("id","submit"),S.classList.add("input"),S.type="submit",S.value="submit",g.appendChild(A),g.appendChild(x),g.appendChild(N),g.appendChild(w),g.appendChild(S),b.appendChild(g)})()})),d.addEventListener("click",(()=>{e(),t()}))})(),t()})();