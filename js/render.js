(function() {
  fetch("data/papers.json")
    .then(r => r.json())
    .then(items => {
      // 1) 연도 오름차순 정렬
      const sorted = items.slice().sort((a, b) => (a.year || 0) - (b.year || 0));

      // 2) 카드형 리스트 렌더
      const list = document.getElementById("paperList");
      list.innerHTML = "";
      sorted.forEach(p => {
        const el = document.createElement("div");
        el.className = "paper-item";
        el.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a> <span class="year">(${p.year || "n/a"})</span>`;
        list.appendChild(el);
      });

      // 3) 표 렌더 (number / title / year)
      const table = document.getElementById("paperTable");
      const thead = `
        <thead>
          <tr>
            <th style="width:80px;text-align:right;">number</th>
            <th>title</th>
            <th style="width:100px;">year</th>
          </tr>
        </thead>`;
      const rows = sorted.map((p, i) => `
        <tr>
          <td style="text-align:right;">${i + 1}</td>
          <td><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></td>
          <td>${p.year || ""}</td>
        </tr>`).join("");
      table.innerHTML = thead + `<tbody>${rows}</tbody>`;
    })
    .catch(err => {
      console.error(err);
      document.getElementById("paperList").textContent = "Failed to load papers.json.";
    });
})();
