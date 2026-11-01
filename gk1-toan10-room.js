// Phòng thi mẫu GK1 Toán 10 — logic dùng chung cho trang luyện tập và trang thi.
// - mode 'practice': cần GK1T10_KEY, chấm tại máy (TN 0.25/câu; ĐS 0.1/0.25/0.5/1.0
//   theo số ý đúng; TLN số, đổi mọi dấu phẩy, |lệch| < 0,001; TL tự đối chiếu).
// - mode 'exam': KHÔNG nạp GK1T10_KEY, chỉ gửi bài làm lên GAS để chấm.
//   Trang thi không bao giờ chứa đáp án hay lời giải.
const GK1T10_ROOM = (function () {
  function parseFloatStrict(str) {
    if (str === null || str === undefined || String(str).trim() === "") return null;
    const num = parseFloat(String(str).replace(/,/g, ".").trim());
    return isNaN(num) ? null : num;
  }
  function dsScore(n) {
    if (n === 1) return 0.1;
    if (n === 2) return 0.25;
    if (n === 3) return 0.5;
    if (n === 4) return 1.0;
    return 0;
  }
  // answers: { tn: [idx|null], ds: [[0/1/null]], tln: [string], tl: [string] }
  function gradeLocal(answers, key) {
    const per = {};
    let sTN = 0, sDS = 0, sTLN = 0;
    key.tn.forEach((k, i) => {
      const ok = answers.tn[i] !== null && answers.tn[i] !== undefined && answers.tn[i] === k;
      per["C" + (i + 1)] = ok;
      if (ok) sTN += 0.25;
    });
    key.ds.forEach((karr, qi) => {
      let n = 0;
      const det = [];
      karr.forEach((k, j) => {
        const v = answers.ds[qi] ? answers.ds[qi][j] : null;
        const ok = v !== null && v !== undefined && v === k;
        det.push(ok);
        if (ok) n++;
      });
      per["C" + (13 + qi)] = det;
      sDS += dsScore(n);
    });
    key.tln.forEach((k, i) => {
      const a = parseFloatStrict(answers.tln[i]);
      const b = parseFloatStrict(k);
      const ok = a !== null && b !== null && Math.abs(a - b) < 0.001;
      per["C" + (15 + i)] = ok;
      if (ok) sTLN += 0.5;
    });
    const total = Math.round((sTN + sDS + sTLN) * 100) / 100;
    return { tn: Math.round(sTN * 100) / 100, ds: Math.round(sDS * 100) / 100, tln: Math.round(sTLN * 100) / 100, total, per };
  }
  function fmt(x) { return (Math.round(x * 100) / 100).toString().replace(".", ","); }

  function render(containerId, mode) {
    const Q = GK1T10_QUESTIONS;
    let html = "";
    Q.parts.forEach((part) => {
      html += `<div class="card mb-4"><div class="card-header bg-primary text-white"><b>${part.name}</b> — ${part.points}</div><div class="card-body">`;
      part.questions.forEach((qq, qi) => {
        html += `<div class="q-block mb-4" id="q-${qq.id}"><div class="fw-bold mb-1">${qq.id}. <span class="badge bg-secondary">${qq.chapter}</span></div><div>${qq.q}</div>`;
        if (qq.figure) html += `<div class="text-center my-2">${qq.figure}</div>`;
        if (qq.figureNote) html += `<div class="text-muted small">${qq.figureNote}</div>`;
        if (qq.options) {
          qq.options.forEach((opt, oi) => {
            html += `<div class="form-check"><input class="form-check-input" type="radio" name="tn-${qi}" value="${oi}" id="tn-${qi}-${oi}"><label class="form-check-label" for="tn-${qi}-${oi}">${"ABCD"[oi]}. ${opt}</label></div>`;
          });
        }
        if (qq.items) {
          qq.items.forEach((it, ii) => {
            html += `<div class="mb-1">${"abcd"[ii]}) ${it} <span class="ms-2"><label class="me-2"><input type="radio" name="ds-${qi}-${ii}" value="1"> Đúng</label><label><input type="radio" name="ds-${qi}-${ii}" value="0"> Sai</label></span></div>`;
          });
        }
        if (part.id === "part3") {
          html += `<input type="text" class="form-control w-50 mt-2" id="tln-${qi}" placeholder="Nhập đáp án (chỉ số, vd: 11,2)">`;
        }
        if (part.id === "part4") {
          html += `<textarea class="form-control mt-2" id="tl-${qi}" rows="4" placeholder="Trình bày lời giải của em (chế độ thi: bài làm được gửi về giáo viên; chế độ luyện tập: xem lời giải mẫu để tự đối chiếu)"></textarea>`;
        }
        html += `<div class="review mt-2" id="rev-${qq.id}" style="display:none"></div></div>`;
      });
      html += `</div></div>`;
    });
    document.getElementById(containerId).innerHTML = html;
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
  }

  function gather() {
    const Q = GK1T10_QUESTIONS;
    const ans = { tn: [], ds: [], tln: [], tl: [] };
    Q.parts.forEach((part, pi) => {
      part.questions.forEach((qq, qi) => {
        if (part.id === "part1") {
          const el = document.querySelector(`input[name="tn-${qi}"]:checked`);
          ans.tn.push(el ? parseInt(el.value, 10) : null);
        } else if (part.id === "part2") {
          const row = [];
          qq.items.forEach((it, ii) => {
            const el = document.querySelector(`input[name="ds-${qi}-${ii}"]:checked`);
            row.push(el ? parseInt(el.value, 10) : null);
          });
          ans.ds.push(row);
        } else if (part.id === "part3") {
          ans.tln.push(document.getElementById(`tln-${qi}`).value);
        } else if (part.id === "part4") {
          ans.tl.push(document.getElementById(`tl-${qi}`).value);
        }
      });
    });
    return ans;
  }

  function lockInputs() {
    document.querySelectorAll("#examContainer input, #examContainer textarea").forEach((el) => { el.disabled = true; });
  }

  function showPracticeReview(result) {
    const K = GK1T10_KEY;
    const box = document.getElementById("resultBox");
    box.style.display = "block";
    box.innerHTML = `<h4>Kết quả luyện tập (chấm tại máy)</h4>
      <p>Phần I: <b>${fmt(result.tn)} / 3,0</b> &nbsp; Phần II: <b>${fmt(result.ds)} / 2,0</b> &nbsp; Phần III: <b>${fmt(result.tln)} / 3,0</b> &nbsp; Tổng tự động: <b>${fmt(result.total)} / 8,0</b></p>
      <p class="text-muted">Phần IV tự luận (2,0 điểm) không tính điểm tự động — xem lời giải mẫu dưới từng câu để tự đối chiếu.</p>`;
    const Q = GK1T10_QUESTIONS;
    Q.parts.forEach((part) => {
      part.questions.forEach((qq) => {
        const rev = document.getElementById("rev-" + qq.id);
        rev.style.display = "block";
        let sol = K.solutions[qq.id];
        if (part.id === "part2") {
          sol = sol.map((s, i) => `${"abcd"[i]}) ${s}`).join("<br>");
          const det = result.per[qq.id];
          rev.innerHTML = `<div>Đúng ${det.filter(Boolean).length}/4 ý.</div><div class="text-success">${sol}</div>`;
        } else if (part.id === "part4") {
          rev.innerHTML = `<div class="text-success"><b>Lời giải mẫu (tự đối chiếu):</b><br>${sol}</div>`;
        } else {
          const ok = result.per[qq.id];
          rev.innerHTML = `<div>${ok ? '<span class="text-success fw-bold">Đúng</span>' : '<span class="text-danger fw-bold">Sai</span>'} — <span class="text-success">${sol}</span></div>`;
        }
        const block = document.getElementById("q-" + qq.id);
        if (part.id !== "part4") block.style.borderLeft = result.per[qq.id] === true || (Array.isArray(result.per[qq.id]) && result.per[qq.id].filter(Boolean).length === 4) ? "5px solid #198754" : "5px solid #dc3545";
      });
    });
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
    box.scrollIntoView({ behavior: "smooth" });
  }

  function showExamReview(data) {
    const box = document.getElementById("resultBox");
    box.style.display = "block";
    let html = `<h4>Kết quả chấm thi (chấm bằng máy chủ)</h4>
      <p>Phần I: <b>${fmt(data.scores.tn)} / 3,0</b> &nbsp; Phần II: <b>${fmt(data.scores.ds)} / 2,0</b> &nbsp; Phần III: <b>${fmt(data.scores.tln)} / 3,0</b> &nbsp; Tổng tự động: <b>${fmt(data.scores.total)} / 8,0</b></p>`;
    if (data.overtime) html += `<p class="text-danger">Lưu ý: bài nộp quá giờ quy định — giáo viên sẽ xem xét.</p>`;
    html += `<p class="text-muted">Phần IV tự luận (2,0 điểm) đã được gửi về giáo viên để chấm tay — không tính điểm tự động.</p>`;
    box.innerHTML = html;
    (data.per || []).forEach((p) => {
      const rev = document.getElementById("rev-" + p.id);
      if (!rev) return;
      rev.style.display = "block";
      if (p.type === "ds") {
        rev.innerHTML = `<div>Đúng ${p.correctCount}/4 ý.</div><div class="text-success">${p.solution.map((s, i) => `${"abcd"[i]}) ${s}`).join("<br>")}</div>`;
      } else {
        rev.innerHTML = `<div>${p.correct ? '<span class="text-success fw-bold">Đúng</span>' : '<span class="text-danger fw-bold">Sai</span>'} — <span class="text-success">${p.solution}</span></div>`;
      }
    });
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
    box.scrollIntoView({ behavior: "smooth" });
  }

  let timerId = null;
  function startTimer(onTimeout) {
    const el = document.getElementById("timer");
    const key = "gk1t10-thi-end";
    let end = parseInt(localStorage.getItem(key) || "0", 10);
    if (!end || end < Date.now()) { end = Date.now() + 60 * 60 * 1000; localStorage.setItem(key, String(end)); }
    function tick() {
      const left = Math.max(0, end - Date.now());
      const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      if (left <= 0) { clearInterval(timerId); onTimeout(); }
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  return {
    parseFloatStrict, dsScore, gradeLocal, fmt,
    init: function (mode, gasUrl) {
      render("examContainer", mode);
      const startBtn = document.getElementById("btnStart");
      const submitBtn = document.getElementById("btnSubmit");
      const examArea = document.getElementById("examArea");
      const setupNote = document.getElementById("setupNote");
      if (mode === "exam" && !gasUrl) {
        setupNote.style.display = "block";
        startBtn.disabled = true;
      }
      startBtn.addEventListener("click", async function () {
        const name = document.getElementById("studentName").value.trim();
        const cls = document.getElementById("className").value.trim();
        if (!name || !cls) { alert("Nhập họ tên và lớp trước khi vào thi."); return; }
        let attemptId = null;
        if (mode === "exam" && gasUrl) {
          try {
            const r = await fetch(gasUrl, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ action: "start", name, className: cls, examCode: GK1T10_QUESTIONS.examCode }) });
            const d = await r.json();
            attemptId = d.attemptId || null;
          } catch (e) { attemptId = null; }
        }
        window.__gk1AttemptId = attemptId;
        window.__gk1Name = name;
        window.__gk1Class = cls;
        examArea.style.display = "block";
        startBtn.disabled = true;
        startTimer(() => { submitBtn.click(); });
        document.getElementById("timerWrap").style.display = "block";
      });
      submitBtn.addEventListener("click", async function () {
        if (submitBtn.disabled) return;
        submitBtn.disabled = true;
        clearInterval(timerId);
        localStorage.removeItem("gk1t10-thi-end");
        const answers = gather();
        lockInputs();
        if (mode === "practice") {
          showPracticeReview(gradeLocal(answers, GK1T10_KEY));
          return;
        }
        const box = document.getElementById("resultBox");
        box.style.display = "block";
        box.innerHTML = "<p>Đang chấm bài trên máy chủ, chờ trong giây lát…</p>";
        try {
          const r = await fetch(gasUrl, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ action: "submit", attemptId: window.__gk1AttemptId || null, name: window.__gk1Name, className: window.__gk1Class, examCode: GK1T10_QUESTIONS.examCode, answers, clientStart: null }) });
          const data = await r.json();
          if (!data.ok) throw new Error(data.error || "Máy chủ trả lỗi.");
          showExamReview(data);
        } catch (e) {
          box.innerHTML = `<p class="text-danger">Chưa chấm được: ${e.message}. Bài làm của em vẫn còn trên trang — kiểm tra mạng rồi bấm “Nộp bài” lại.</p>`;
          submitBtn.disabled = false;
        }
      });
    }
  };
})();
if (typeof module !== "undefined") module.exports = GK1T10_ROOM;
