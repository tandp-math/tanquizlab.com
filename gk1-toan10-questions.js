// Dữ liệu đề GK1 Toán 10 (2026-2027) — CHỈ CÂU HỎI, KHÔNG ĐÁP ÁN, KHÔNG LỜI GIẢI.
// File này được nạp bởi cả trang luyện tập và trang thi. Đáp án nằm riêng ở
// gk1-toan10-key.js (chỉ trang luyện tập nạp) và trong script GAS (chấm thi).
// Chuỗi dùng String.raw để giữ nguyên dấu \ của LaTeX và SVG.
const GK1T10_QUESTIONS = {
  title: "Đề kiểm tra giữa kỳ 1 – Toán 10 (2026–2027)",
  examCode: "GK1-T10-2026",
  durationMin: 60,
  parts: [
    { id: "part1", name: "Phần I. Trắc nghiệm nhiều phương án", points: "3,0 điểm", questions: [
      { id: "C1", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Câu nào sau đây là một mệnh đề?`,
        options: [String.raw`“Hà Nội là thủ đô của Việt Nam.”`, String.raw`“Hôm nay trời đẹp quá!”`, String.raw`$x+2=5$.`, String.raw`“Bạn ăn cơm chưa?”`] },
      { id: "C2", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Mệnh đề phủ định của mệnh đề $P$: “Mọi số nguyên tố đều là số lẻ” là`,
        options: [String.raw`“Tồn tại một số nguyên tố là số chẵn.”`, String.raw`“Mọi số nguyên tố đều là số chẵn.”`, String.raw`“Tồn tại một số nguyên tố là số lẻ.”`, String.raw`“Mọi số nguyên tố đều không là số lẻ.”`] },
      { id: "C3", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Cho mệnh đề kéo theo: “Nếu một số tự nhiên chia hết cho $6$ thì nó chia hết cho $3$.” Mệnh đề đảo của mệnh đề trên là`,
        options: [String.raw`“Nếu một số tự nhiên chia hết cho $3$ thì nó chia hết cho $6$.”`, String.raw`“Nếu một số tự nhiên không chia hết cho $6$ thì nó không chia hết cho $3$.”`, String.raw`“Nếu một số tự nhiên không chia hết cho $3$ thì nó không chia hết cho $6$.”`, String.raw`“Một số tự nhiên chia hết cho $6$ khi và chỉ khi nó chia hết cho $3$.”`] },
      { id: "C4", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Cho $A=\{1;3;5;7\}$. Khẳng định nào sau đây đúng?`,
        options: [String.raw`$3 \in A$.`, String.raw`$2 \in A$.`, String.raw`$\{1;2\} \subset A$.`, String.raw`$7 \notin A$.`] },
      { id: "C5", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Cho $A=[-2;3)$ và $B=(0;5]$. Khi đó $A \cap B$ bằng`,
        options: [String.raw`$(0;3)$.`, String.raw`$[-2;5]$.`, String.raw`$[-2;0]$.`, String.raw`$(0;3]$.`] },
      { id: "C6", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Trong bất phương trình bậc nhất hai ẩn $2x-y+4 \ge 0$, hệ số của $x$ và hệ số của $y$ lần lượt là`,
        options: [String.raw`$(2;-1)$.`, String.raw`$(2;1)$.`, String.raw`$(-2;1)$.`, String.raw`$(1;2)$.`] },
      { id: "C7", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Điểm nào sau đây thuộc miền nghiệm của bất phương trình $x+2y<9$?`,
        options: [String.raw`$(5;3)$.`, String.raw`$(2;3)$.`, String.raw`$(4;3)$.`, String.raw`$(1;5)$.`] },
      { id: "C8", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình",
        q: String.raw`Miền nghiệm được cho bởi hình vẽ bên (phần không gạch, kể cả bờ) là miền nghiệm của bất phương trình nào sau đây? Đường thẳng $d$ trong hình có phương trình $x-y=2$.`,
        figure: String.raw`<svg width="320" height="260" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="background:#fff">
          <polygon points="40,230 280,230 280,30" fill="#ddd" />
          <line x1="20" y1="210" x2="300" y2="210" stroke="#000" stroke-width="1" marker-end="url(#ar)"/>
          <line x1="60" y1="250" x2="60" y2="10" stroke="#000" stroke-width="1" marker-end="url(#ar)"/>
          <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#000"/></marker></defs>
          <line x1="40" y1="230" x2="280" y2="30" stroke="#000" stroke-width="2"/>
          <text x="290" y="205" font-size="14">x</text><text x="68" y="18" font-size="14">y</text>
          <circle cx="140" cy="210" r="3" fill="#000"/><text x="142" y="228" font-size="13">2</text>
          <circle cx="60" cy="130" r="3" fill="#000"/><text x="38" y="128" font-size="13">-2</text>
          <text x="20" y="40" font-size="13">d: x - y = 2</text><text x="48" y="245" font-size="13">O</text>
        </svg>`,
        figureNote: "Hình vẽ: phần gạch chéo là tam giác dưới đường d; điểm O(0;0) thuộc phần không gạch.",
        options: [String.raw`$x-y \le 2$.`, String.raw`$x-y \ge 2$.`, String.raw`$x-y<2$.`, String.raw`$-x+y \le 2$.`] },
      { id: "C9", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Cặp số nào sau đây là nghiệm của hệ bất phương trình $\begin{cases} x+y \le 4 \\ 2x-y \ge 1 \end{cases}$?`,
        options: [String.raw`$(1;1)$.`, String.raw`$(3;2)$.`, String.raw`$(0;5)$.`, String.raw`$(2;3)$.`] },
      { id: "C10", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Cho $90^\circ<\alpha<180^\circ$. Khẳng định nào sau đây đúng?`,
        options: [String.raw`$\sin \alpha>0$ và $\cos \alpha<0$.`, String.raw`$\sin \alpha<0$ và $\cos \alpha>0$.`, String.raw`$\tan \alpha>0$.`, String.raw`$\cot \alpha>0$.`] },
      { id: "C11", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Rút gọn biểu thức $\sin(180^\circ-\alpha)+\cos(90^\circ-\alpha)$ ta được`,
        options: [String.raw`$2\sin \alpha$.`, String.raw`$0$.`, String.raw`$2\cos \alpha$.`, String.raw`$\sin \alpha+\cos \alpha$.`] },
      { id: "C12", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Cho tam giác $ABC$ có $AB=7$, $AC=9$ và $\widehat{A}=60^\circ$. Độ dài cạnh $BC$ bằng`,
        options: [String.raw`$\sqrt{67}$.`, String.raw`$\sqrt{130}$.`, String.raw`$8$.`, String.raw`$\sqrt{193}$`] }
    ]},
    { id: "part2", name: "Phần II. Trắc nghiệm đúng/sai", points: "2,0 điểm", questions: [
      { id: "C13", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Cho $A=\{x \in \mathbb{N} \mid x<8\}$ và $B=\{x \in \mathbb{N} \mid x \text{ chia hết cho } 2, \, x \le 10\}$. Xét tính đúng sai của các khẳng định sau:`,
        items: [String.raw`$A$ có $8$ phần tử.`, String.raw`$A \cap B=\{0;2;4;6\}$.`, String.raw`$A \cup B=\{0;1;2;3;4;5;6;7;8\}$.`, String.raw`$B \setminus A=\{8;10\}$.`] },
      { id: "C14", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Xét tính đúng sai của các khẳng định sau:`,
        items: [String.raw`Điểm $M(2;1)$ thuộc miền nghiệm của bất phương trình $3x+y \le 8$.`, String.raw`Miền nghiệm của bất phương trình $x-2y>0$ chứa điểm $O(0;0)$.`, String.raw`Cặp số $(1;2)$ là nghiệm của hệ bất phương trình $\begin{cases} x+2y \le 6 \\ x-y \ge -1 \end{cases}$.`, String.raw`Hệ bất phương trình $\begin{cases} x \ge 0 \\ y \ge 0 \\ x+y>5 \end{cases}$ có miền nghiệm là một tam giác.`] }
    ]},
    { id: "part3", name: "Phần III. Trả lời ngắn (chỉ điền số)", points: "3,0 điểm", questions: [
      { id: "C15", chapter: "Chương 1: Mệnh đề – Tập hợp", q: String.raw`Cho $A=\{x \in \mathbb{Z} \mid -4<x \le 3\}$ và $B=\{x \in \mathbb{Z} \mid x^2 \le 16\}$. Tìm số phần tử của tập hợp $A \cup B$.` },
      { id: "C16", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Có bao nhiêu điểm trong các điểm $(2;3)$, $(1;2)$, $(4;1)$, $(0;4)$ thuộc miền nghiệm của bất phương trình $x+3y>10$?` },
      { id: "C17", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình", q: String.raw`Tìm số cặp số nguyên $(x;y)$ thỏa mãn hệ bất phương trình $\begin{cases} x \ge 0 \\ y \ge 0 \\ x+y \le 4 \end{cases}$.` },
      { id: "C18", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Cho tam giác $ABC$ có $AB=10$, $\widehat{A}=45^\circ$, $\widehat{B}=75^\circ$. Tính độ dài cạnh $AC$ (làm tròn kết quả đến hàng phần mười).`,
        figure: String.raw`<svg width="300" height="180" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#fff">
          <polygon points="30,150 270,150 214,40" fill="none" stroke="#000" stroke-width="2"/>
          <text x="22" y="168" font-size="14">A</text><text x="272" y="168" font-size="14">B</text><text x="212" y="30" font-size="14">C</text>
          <text x="140" y="168" font-size="13">10</text><text x="52" y="138" font-size="13">45°</text><text x="232" y="138" font-size="13">75°</text>
        </svg>` },
      { id: "C19", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Cho $\cos \alpha=-\dfrac{3}{5}$ với $90^\circ<\alpha<180^\circ$. Tính $\tan \alpha$ (làm tròn kết quả đến hàng phần trăm).` },
      { id: "C20", chapter: "Chương 3: Hệ thức lượng trong tam giác", q: String.raw`Cho tam giác $ABC$ có $AB=8$, $AC=10$, $BC=12$. Tính diện tích của tam giác $ABC$ (làm tròn kết quả đến hàng phần mười).` }
    ]},
    { id: "part4", name: "Phần IV. Tự luận (tự đối chiếu lời giải, không tính điểm tự động)", points: "2,0 điểm", questions: [
      { id: "C21", chapter: "Chương 1: Mệnh đề – Tập hợp",
        q: String.raw`Một thư viện khảo sát $120$ bạn đọc: có $75$ người mượn sách tiểu thuyết, $68$ người mượn sách khoa học, $40$ người mượn cả hai loại sách.<br>a) Có bao nhiêu người mượn ít nhất một trong hai loại sách?<br>b) Có bao nhiêu người chỉ mượn đúng một loại sách?`,
        figure: String.raw`<svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="background:#fff">
          <circle cx="110" cy="75" r="55" fill="none" stroke="#000" stroke-width="2"/>
          <circle cx="190" cy="75" r="55" fill="none" stroke="#000" stroke-width="2"/>
          <text x="82" y="78" font-size="14">35</text><text x="142" y="78" font-size="14">40</text><text x="198" y="78" font-size="14">28</text>
          <text x="60" y="20" font-size="12">Tiểu thuyết: 75</text><text x="185" y="20" font-size="12">Khoa học: 68</text>
          <text x="120" y="145" font-size="12">Ngoài: 17</text>
        </svg>` },
      { id: "C22", chapter: "Chương 3: Hệ thức lượng trong tam giác",
        q: String.raw`Một người quan sát đứng trên mặt đất, cách chân một tòa nhà $40\,\mathrm{m}$. Người đó đo được góc nâng từ vị trí quan sát đến đỉnh tòa nhà là $38^\circ$, và góc nâng đến đỉnh của cột ăng-ten đặt trên nóc tòa nhà là $45^\circ$ (xem hình vẽ).<br>a) Tính chiều cao của tòa nhà (làm tròn kết quả đến hàng phần mười của mét).<br>b) Tính chiều cao của cột ăng-ten (làm tròn kết quả đến hàng phần mười của mét).`,
        figure: String.raw`<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:#fff">
          <line x1="10" y1="180" x2="290" y2="180" stroke="#000" stroke-width="1"/>
          <rect x="200" y="60" width="45" height="120" fill="none" stroke="#000" stroke-width="2"/>
          <line x1="222" y1="60" x2="222" y2="25" stroke="#000" stroke-width="2"/>
          <line x1="20" y1="180" x2="200" y2="60" stroke="#000" stroke-width="1" stroke-dasharray="5,4"/>
          <line x1="20" y1="180" x2="222" y2="25" stroke="#000" stroke-width="1" stroke-dasharray="5,4"/>
          <text x="14" y="195" font-size="13">O</text><text x="196" y="195" font-size="13">H</text>
          <text x="250" y="120" font-size="12">tòa nhà</text><text x="228" y="22" font-size="12">ăng-ten</text>
          <text x="95" y="195" font-size="12">40 m</text>
        </svg>` },
      { id: "C23", chapter: "Chương 2: Bất phương trình – Hệ bất phương trình",
        q: String.raw`Một tiệm bánh làm hai loại sản phẩm: bánh ngọt và bánh mì. Mỗi chiếc bánh ngọt cần $0{,}5\,\mathrm{kg}$ bột và $0{,}25\,\mathrm{kg}$ đường, lãi $30$ nghìn đồng. Mỗi ổ bánh mì cần $0{,}25\,\mathrm{kg}$ bột và $0{,}5\,\mathrm{kg}$ đường, lãi $40$ nghìn đồng. Tiệm có tối đa $100\,\mathrm{kg}$ bột và $110\,\mathrm{kg}$ đường mỗi ngày.<br>Gọi $x$, $y$ lần lượt là số bánh ngọt và số ổ bánh mì làm trong một ngày ($x \ge 0$, $y \ge 0$).<br>a) Lập hệ bất phương trình biểu thị các điều kiện ràng buộc về nguyên liệu.<br>b) Tiệm cần làm bao nhiêu bánh ngọt và bao nhiêu ổ bánh mì để tiền lãi lớn nhất? Tính tiền lãi lớn nhất đó.`,
        figure: String.raw`<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="background:#fff">
          <line x1="20" y1="190" x2="280" y2="190" stroke="#000" stroke-width="1"/>
          <line x1="30" y1="210" x2="30" y2="10" stroke="#000" stroke-width="1"/>
          <polygon points="30,190 230,190 150,70 30,25" fill="#eee" stroke="#000" stroke-width="2"/>
          <text x="22" y="205" font-size="12">O</text><text x="228" y="205" font-size="12">(200;0)</text>
          <text x="155" y="62" font-size="12">(120;160)</text><text x="38" y="20" font-size="12">(0;220)</text>
          <text x="282" y="188" font-size="13">x</text><text x="34" y="14" font-size="13">y</text>
        </svg>` }
    ]}
  ]
};
