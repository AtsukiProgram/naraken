const N = 100;
const gallery = document.getElementById("gallery-container");

for (let i = 1; i <= N; i++) {
  const row = document.createElement("div");
  row.className = "pair-row";

  const img = document.createElement("img");
  img.className = "pair-img";
  img.src = `assets/${i}.png`;
  img.alt = `画像${i}`;

  const textDiv = document.createElement("div");
  textDiv.className = "pair-text";
  textDiv.textContent = "読み込み中...";

  // fetchでテキストを動的取得
  fetch(`text/${i}.txt`)
    .then(response => {
      if (response.ok) return response.text();
      else throw new Error("not found");
    })
    .then(txt => { textDiv.textContent = txt; })
    .catch(() => { textDiv.textContent = "(テキスト読み込み失敗)"; });

  row.appendChild(img);
  row.appendChild(textDiv);
  gallery.appendChild(row);
}
