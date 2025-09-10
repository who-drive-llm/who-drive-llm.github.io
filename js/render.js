// js/render.js
(function () {
  fetch("data/papers.json")
    .then(r => r.json())
    .then(items => {
      // 연도 오름차순
      const sorted = items.slice().sort((a, b) => (a.year || 0) - (b.year || 0));

      // 기존 카드형 리스트 제거(있으면)
      const list = document.getElementById("paperList");
      if (list) list.remove();

      // 표 렌더
      const wrap = document.getElementById("paperTableWrap");
      const table = document.getElementById("paperTable");
      if (!wrap || !table) return;

      const thead = `
        <thead>
          <tr>
            <th class="num">number</th>
            <th>title</th>
            <th class="yr">year</th>
          </tr>
        </thead>`;
      const rows = sorted.map((p, i) => `
        <tr>
          <td class="num">${i + 1}</td>
          <td><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></td>
          <td class="yr">${p.year || ""}</td>
        </tr>`).join("");
      table.innerHTML = thead + `<tbody>${rows}</tbody>`;
    })
    .catch(err => {
      console.error(err);
    });
})();
