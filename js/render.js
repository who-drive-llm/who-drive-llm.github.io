
(function() {
  const preprintEl = document.getElementById("preprintLink");
  if (preprintEl && typeof PREPRINT_URL === "string") {
    preprintEl.href = PREPRINT_URL;
    preprintEl.textContent = "Preprint on arXiv";
  }
  fetch("data/papers.json")
    .then(r => r.json())
    .then(items => {
      const list = document.getElementById("paperList");
      const sorted = items.slice().sort((a, b) => (b.year||0) - (a.year||0));
      sorted.forEach(p => {
        const el = document.createElement("div");
        el.className = "paper-item";
        el.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a> <span class="year">(${p.year || "n/a"})</span>`;
        list.appendChild(el);
      });
    })
    .catch(err => {
      const list = document.getElementById("paperList");
      list.textContent = "Failed to load papers.json. Ensure the file exists under /data.";
      console.error(err);
    });
})();
