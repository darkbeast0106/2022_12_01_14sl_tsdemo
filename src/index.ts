import Teglalap from "./Teglalap";
const teglalapok: Teglalap[] = [];
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("teglalap_form").addEventListener("submit", (e) => {
    e.preventDefault();
    teglalap_hozzaadasa();
  });
});

function teglalap_hozzaadasa() {
  const a = parseInt(
    (document.getElementById("input_a") as HTMLInputElement).value
  );
  const b = parseInt(
    (document.getElementById("input_b") as HTMLInputElement).value
  );
  const teglalap = new Teglalap(a, b);
  teglalapok.push(teglalap);
  tablazat_frissit();
}

function tablazat_frissit() {
    let html = "";
    teglalapok.forEach(teglalap => {
        html += `<tr>
        <td>${teglalap.a}</td>
        <td>${teglalap.b}</td>
        <td>${teglalap.kerulet()}</td>
        <td>${teglalap.terulet()}</td>
    </tr>`;
    });
    document.getElementById("teglalapok").innerHTML = html;
}

