(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="NEW CROSS BUNS",n.classList.add("title");const d=document.createElement("h2");d.textContent="South-east London's top bakery",d.classList.add("title"),t.appendChild(n),t.appendChild(d);const s=document.createElement("img");s.src="file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/restaurant1.jpeg",s.height="",s.classList.add("home-image"),t.appendChild(s);const a=document.createElement("h3");a.textContent="Serving the sweetest baked goods to New Cross and surrounding South East London post codes, come and have a look",t.appendChild(a),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#nav"),d=document.createElement("img");d.src="file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_3505.PNG",d.setAttribute("id","logo"),n.appendChild(d);const s=document.createElement("div"),a=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");a.setAttribute("id","home-btn"),c.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),s.classList.add("navigation"),a.classList.add("tab"),c.classList.add("tab"),o.classList.add("tab"),a.textContent="HOME",c.textContent="MENU",o.textContent="CONTACT",n.appendChild(s),s.appendChild(a),s.appendChild(c),s.appendChild(o),a.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="OUR BAKED GOODS",n.classList.add("title");const d=document.createElement("h2");d.textContent="All freshly hand made daily!",d.classList.add("title");const s=document.createElement("div");s.classList.add("menu-container");const a=document.createElement("h3");a.textContent="CINNAMON BUN £4.95",a.classList.add("item");const c=document.createElement("p");c.classList.add("item"),c.textContent="Vegan enriched cinemon bun with sweet vanillia icing";const o=document.createElement("img");o.setAttribute("src","file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_3919.JPG"),o.classList.add("food-img");const i=document.createElement("hr"),l=document.createElement("h3");l.textContent="BELGIAN BUN £4.95",l.classList.add("item");const r=document.createElement("p");r.classList.add("item"),r.textContent="Vegan enriched dough filled with lemon curd & topped with sweet icing and a glace cherry";const m=document.createElement("img");m.setAttribute("src","file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_4013.JPG"),m.classList.add("food-img");const p=document.createElement("hr"),u=document.createElement("h3");u.textContent="NUTELLA KNOT £3.95",u.classList.add("item");const h=document.createElement("p");h.classList.add("item"),h.textContent="A Vegan enriched dough filled with Nutella, tied up & topped with more Nutella ";const C=document.createElement("img");C.setAttribute("src","file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/6D8820D8-0415-4225-84C2-068D990B397C.JPG"),C.classList.add("food-img");const E=document.createElement("hr"),L=document.createElement("h3");L.textContent="CHELSEA BUN £3.95",L.classList.add("item");const g=document.createElement("p");g.classList.add("item"),g.textContent="A Vegan enriched sweet & spicy bun, swirled with sultanas & currents";const b=document.createElement("img");b.setAttribute("src","file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/59DE13A4-63F3-4FDA-AA8D-F13E2AF20F40.JPG"),b.classList.add("food-img");const A=document.createElement("hr"),x=document.createElement("h3");x.textContent="4 BRIOCHE ROLLS | £5.95 ",x.classList.add("item");const N=document.createElement("p");N.classList.add("item"),N.textContent="Vegan enriched brioche buns";const f=document.createElement("img");f.setAttribute("src","file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/58F931AD-564E-41A3-A7A8-63F2EEBA1EB8.JPG"),f.classList.add("food-img"),s.appendChild(a),a.appendChild(c),a.appendChild(o),a.appendChild(i),s.appendChild(l),l.appendChild(r),l.appendChild(m),s.appendChild(p),s.appendChild(u),u.appendChild(h),u.appendChild(C),s.appendChild(E),s.appendChild(L),L.appendChild(g),L.appendChild(b),s.appendChild(A),s.appendChild(x),x.appendChild(N),x.appendChild(f),t.appendChild(n),t.appendChild(d),t.appendChild(s),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");e.appendChild(t),t.classList.add("page-content");const n=document.createElement("h1");t.appendChild(n),n.classList.add("contacts-header"),n.textContent="ORDER NOW!";const d=document.createElement("div");t.appendChild(d),d.classList.add("contact-container");const s=document.createElement("h3");s.classList.add("contacts"),d.appendChild(s),s.textContent="CONTACTS";const a=document.createElement("h4");a.classList.add("contacts"),d.appendChild(a);const c=document.createTextNode("CALL US:  ");a.appendChild(c);const o=document.createElement("a");o.classList.add("contacts"),o.setAttribute("href","tel: +44 020 3455 4785"),o.textContent="+44 020 3455 4785",a.appendChild(o);const i=document.createElement("h4");d.appendChild(i),i.classList.add("contacts");const l=document.createTextNode("FOLLOW US:  ");i.appendChild(l);const r=document.createElement("a");r.classList.add("contacts"),r.setAttribute("href","https://www.instagram.com/newcrossbuns/"),r.setAttribute("target","_blank"),r.textContent="Instagram",i.appendChild(r);const m=document.createTextNode(" / ");i.appendChild(m);const p=document.createElement("a");p.classList.add("contacts"),p.setAttribute("href","https://www.facebook.com/newcrossbuns/"),p.setAttribute("target","_blank"),p.textContent="Facebook",i.appendChild(p);const u=document.createTextNode(" / ");i.appendChild(u);const h=document.createElement("a");h.classList.add("contacts"),h.setAttribute("href","https://twitter.com/ViveCrepe"),h.setAttribute("target","_blank"),h.textContent="Twitter",i.appendChild(h);const C=document.createElement("div");C.classList.add("times-container"),d.appendChild(C);const E=document.createElement("h4");E.classList.add("contacts"),E.textContent="OPENING TIMES: ",C.appendChild(E);const L=document.createElement("p");L.setAttribute("id","day-time"),L.textContent="Mon - Sat | 8am - 6pm",C.appendChild(L);const g=document.createElement("div");g.classList.add("form-container"),t.appendChild(g);const b=document.createElement("form");b.classList.add("contact-form");const A=document.createElement("h2");A.classList.add("contact-header"),A.textContent="CONTACT US!";const x=document.createElement("input");x.type="text",x.placeholder="Your full name";const N=document.createElement("input");N.type="email",N.placeholder="you@example.com";const f=document.createElement("input");f.type="text",f.placeholder="Your phone number";const w=document.createElement("input");w.setAttribute("id","submit"),w.type="submit",w.value="submit",b.appendChild(A),b.appendChild(x),b.appendChild(N),b.appendChild(f),b.appendChild(w),g.appendChild(b)})()})),d.addEventListener("click",(()=>{t(),e()}))})(),e()})();