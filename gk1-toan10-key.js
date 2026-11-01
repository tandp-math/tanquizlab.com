// ĐÁP ÁN + LỜI GIẢI đề GK1 Toán 10 — CHỈ trang luyện tập được nạp file này.
// Trang thi KHÔNG nạp file này; đáp án chấm thi nằm trong script GAS.
const GK1T10_KEY = {
  // Phần I: chỉ số phương án đúng (0=A, 1=B, 2=C, 3=D). Key: 11A/1B (chỉ C7 = B).
  tn: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  // Phần II: 1 = Đúng, 0 = Sai. C13: Đ–Đ–S–Đ; C14: Đ–S–Đ–S.
  ds: [[1, 1, 0, 1], [1, 0, 1, 0]],
  // Phần III: đáp số (dấu phẩy thập phân). Chấm: đổi mọi dấu phẩy thành chấm, |sai lệch| < 0,001.
  tln: ["9", "2", "15", "11,2", "-1,33", "39,7"],
  // Lời giải theo câu, dùng cho trang luyện tập (hiện sau khi nộp).
  solutions: {
    C1: String.raw`“Hà Nội là thủ đô của Việt Nam” là câu khẳng định có tính đúng/sai xác định nên là mệnh đề (đúng). Các câu còn lại là câu cảm thán, mệnh đề chứa biến và câu hỏi.`,
    C2: String.raw`Phủ định của “Mọi … đều …” là “Tồn tại … không …”, tức “Tồn tại một số nguyên tố là số chẵn” (chẳng hạn số $2$).`,
    C3: String.raw`Mệnh đề đảo của $P \Rightarrow Q$ là $Q \Rightarrow P$.`,
    C4: String.raw`$3 \in A$ nên đúng. $2 \notin A$, $\{1;2\} \not\subset A$ và $7 \in A$.`,
    C5: String.raw`$A \cap B$ gồm các số vừa thuộc $[-2;3)$ vừa thuộc $(0;5]$, tức $(0;3)$.`,
    C6: String.raw`Viết lại dạng $ax+by+c \ge 0$: $2x+(-1)y+4 \ge 0$, nên hệ số là $(2;-1)$.`,
    C7: String.raw`Thử $(2;3)$: $2+2\cdot 3=8<9$, thỏa mãn. Các điểm còn lại cho $11$, $10$ và $11$.`,
    C8: String.raw`Bờ liền nét nên bất phương trình có dấu $\le$ hoặc $\ge$. Điểm $O(0;0)$ thuộc phần không gạch mà $0-0=0 \le 2$, nên miền nghiệm là $x-y \le 2$.`,
    C9: String.raw`Thử $(1;1)$: $1+1=2 \le 4$ và $2\cdot 1-1=1 \ge 1$, thỏa mãn cả hai.`,
    C10: String.raw`Góc tù ($90^\circ<\alpha<180^\circ$): $\sin \alpha>0$, $\cos \alpha<0$, suy ra $\tan \alpha<0$, $\cot \alpha<0$.`,
    C11: String.raw`$\sin(180^\circ-\alpha)=\sin \alpha$ và $\cos(90^\circ-\alpha)=\sin \alpha$, nên tổng bằng $2\sin \alpha$.`,
    C12: String.raw`Định lí côsin: $BC^2=49+81-2\cdot 7\cdot 9\cdot \dfrac{1}{2}=67$, suy ra $BC=\sqrt{67}$.`,
    C13: [String.raw`Đúng. $A=\{0;1;2;3;4;5;6;7\}$ có $8$ phần tử.`, String.raw`Đúng. $B=\{0;2;4;6;8;10\}$ nên $A \cap B=\{0;2;4;6\}$.`, String.raw`Sai. $A \cup B=\{0;1;2;3;4;5;6;7;8;10\}$, khẳng định thiếu phần tử $10$.`, String.raw`Đúng. $B \setminus A=\{8;10\}$.`],
    C14: [String.raw`Đúng. $3\cdot 2+1=7 \le 8$.`, String.raw`Sai. Với $O(0;0)$: $0-2\cdot 0=0$, mà $0>0$ sai (điểm $O$ nằm trên đường biên, bất phương trình nghiêm ngặt).`, String.raw`Đúng. $1+2\cdot 2=5 \le 6$ và $1-2=-1 \ge -1$.`, String.raw`Sai. Miền $x \ge 0$, $y \ge 0$, $x+y>5$ là miền vô hạn, không phải tam giác.`],
    C15: String.raw`$A=\{-3;-2;-1;0;1;2;3\}$, $B=\{-4;-3;-2;-1;0;1;2;3;4\}$, hợp có $9$ phần tử.`,
    C16: String.raw`$(2;3)$ cho $11>10$ (thuộc); $(0;4)$ cho $12>10$ (thuộc); hai điểm còn lại không thuộc. Vậy có $2$ điểm.`,
    C17: String.raw`Với mỗi $y \in \{0;1;2;3;4\}$, $x$ có $5-y$ giá trị. Tổng: $5+4+3+2+1=15$.`,
    C18: String.raw`$\widehat{C}=60^\circ$. Định lí sin: $AC=\dfrac{10\cdot \sin 75^\circ}{\sin 60^\circ} \approx 11{,}2$.`,
    C19: String.raw`$\sin^2 \alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$, $\sin \alpha>0$ nên $\sin \alpha=\dfrac{4}{5}$. Suy ra $\tan \alpha=-\dfrac{4}{3} \approx -1{,}33$.`,
    C20: String.raw`Nửa chu vi $p=15$. Hê-rông: $S=\sqrt{15\cdot 7\cdot 5\cdot 3}=\sqrt{1575} \approx 39{,}7$.`,
    C21: String.raw`a) Số người mượn ít nhất một loại: $|A \cup B|=75+68-40=103$ (người).<br>b) Chỉ mượn đúng một loại: $103-40=63$ (người).`,
    C22: String.raw`a) Tòa nhà: $HT=40\cdot \tan 38^\circ \approx 31{,}3\,\mathrm{m}$.<br>b) Ăng-ten: $40-40\cdot \tan 38^\circ \approx 8{,}7\,\mathrm{m}$ (tính từ giá trị chưa làm tròn của $HT$).`,
    C23: String.raw`a) Hệ: $\begin{cases} x \ge 0 \\ y \ge 0 \\ 0{,}5x+0{,}25y \le 100 \\ 0{,}25x+0{,}5y \le 110 \end{cases}$.<br>b) $F=30x+40y$ lớn nhất tại đỉnh $(120;160)$: $F=10000$ nghìn đồng $=10$ triệu đồng.`
  }
};
