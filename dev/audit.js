// Testseite: findet Layoutfehler (Überlauf, abgeschnittener Text, Text außerhalb der Karte/des Diagramms).
// In der Konsole: _audit("Bezeichnung") → [Bezeichnung, Funde[]]
window._audit = function (label) {
  const out = [];
  const all = [];
  const walk = (root) => { for (const el of root.querySelectorAll("*")) { all.push(el); if (el.shadowRoot) walk(el.shadowRoot); } };
  walk(document);
  const vw = document.documentElement.clientWidth;
  const desc = (e) => {
    const h = e.getRootNode().host;
    const cls = typeof e.className === "string" && e.className.trim() ? "." + e.className.trim().split(/\s+/).join(".") : "";
    return `${h ? h.localName + ">" : ""}${e.localName}${cls} "${(e.textContent || "").trim().slice(0, 25)}"`;
  };
  const svgTags = ["svg", "path", "line", "g", "text", "circle", "i", "b", "rect", "polyline", "tspan", "ellipse", "image", "defs", "clipPath", "filter"];
  for (const e of all) {
    const host = e.getRootNode().host;
    if (host && host.localName === "wetter-app-sky") continue;
    if (e.closest(".hours")) continue;
    const cs = getComputedStyle(e);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (r.right > vw + 1 && !svgTags.includes(e.localName)) out.push(`VIEWPORT ${desc(e)} right=${Math.round(r.right)}`);
    if (["DIV", "SPAN", "B", "BUTTON", "TD", "SMALL", "A", "SECTION"].includes(e.tagName) && cs.overflow !== "visible"
      && cs.overflowX !== "auto" && e.scrollWidth > e.clientWidth + 1 && !e.classList.contains("sheet")) out.push(`CLIPPED ${desc(e)} ${e.scrollWidth}>${e.clientWidth}`);
    if (e.children.length === 0 && (e.textContent || "").trim()) {
      const card = e.closest(".card");
      if (card) { const c = card.getBoundingClientRect(); if (r.right > c.right + 1 || r.left < c.left - 1) out.push(`OUTCARD ${desc(e)}`); }
    }
    if (e.localName === "text" && e.ownerSVGElement) {
      const s = e.ownerSVGElement.getBoundingClientRect();
      if (r.right > s.right + 2 || r.left < s.left - 2 || r.top < s.top - 2 || r.bottom > s.bottom + 2) out.push(`SVGTEXT-OUT ${desc(e)}`);
    }
  }
  return [label, [...new Set(out)].slice(0, 40)];
};
