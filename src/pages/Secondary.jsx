import { useState } from 'react';
import { Layout, PageHero, SectionHead } from '../components/SiteShell.jsx';

export function About() {
  return <Layout active="about"><PageHero eyebrow="VỀ MÌNH" title={<>Một người <em>thích xây.</em></>} description="Mình là Hoàng Kỳ Phạm, một lập trình viên quan tâm đến điểm gặp nhau giữa giao diện rõ ràng và trải nghiệm đáng nhớ." /><section className="page-section shell about-feature"><div className="about-monogram" aria-hidden="true"><span>K</span><i>✳</i></div><div><p className="overline">LỜI GIỚI THIỆU</p><h2>Code là phương tiện.<br /><em>Trải nghiệm là mục tiêu.</em></h2><p>Mình thích tìm hiểu vì sao một sản phẩm dễ dùng, điều gì khiến một luồng thao tác trở nên tự nhiên và cách biến những quyết định nhỏ thành một tổng thể nhất quán.</p><p>Website này là nơi để tập hợp các concept, ghi chú và thử nghiệm. Những nội dung dự án hiện tại là mẫu minh họa, chờ được thay bằng công việc thật.</p></div></section><section className="page-section soft-section"><div className="shell"><SectionHead eyebrow="ĐIỀU MÌNH QUAN TÂM" title="Ba góc nhìn khi xây sản phẩm." /><div className="principle-grid"><article><span>✳</span><h3>Rõ ràng</h3><p>Người dùng hiểu mình đang ở đâu, có thể làm gì và điều gì sẽ xảy ra tiếp theo.</p></article><article><span>◒</span><h3>Chỉn chu</h3><p>Từ kiểu chữ đến trạng thái tương tác, các chi tiết cùng hỗ trợ một mục tiêu.</p></article><article><span>⌘</span><h3>Linh hoạt</h3><p>Giải pháp được xây để thử, học và thay đổi khi có thêm phản hồi.</p></article></div></div></section><section className="page-section shell"><div className="split-note"><div><SectionHead eyebrow="KHÔNG GIAN NÀY" title="Một hồ sơ đang phát triển." /></div><div><p>Thay vì một dòng thời gian tự nhận thành tích chưa được xác thực, mình để nơi này mở cho những dự án, kinh nghiệm và câu chuyện thật sẽ được bổ sung sau.</p><div className="link-stack"><a href="/work/">Xem concept dự án</a><a href="/writing/">Đọc bản thảo mẫu</a><a href="/uses/">Khám phá bộ công cụ minh họa</a></div></div></div></section></Layout>;
}

const notes = [
  { title: 'Kiểu chữ co giãn', topic: 'CSS', summary: 'Dùng clamp để tiêu đề thích nghi với màn hình mà không cần quá nhiều breakpoint.', code: 'font-size: clamp(2.5rem, 5vw, 5rem);' },
  { title: 'Tôn trọng giảm chuyển động', topic: 'Accessibility', summary: 'Khi người dùng chọn giảm chuyển động, giao diện vẫn cần rõ ràng và hoạt động đầy đủ.', code: '@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: 0.01ms !important; }\n}' },
  { title: 'Đừng quên trạng thái rỗng', topic: 'Product UI', summary: 'Một bộ lọc không tìm thấy gì cũng là một điểm chạm cần được viết và thiết kế cẩn thận.', code: 'if (results.length === 0) {\n  showEmptyState("Thử một từ khóa khác");\n}' }
];

function NoteCard({ note }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(note.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }
  return <article className="note-card"><span className="note-topic">{note.topic} · GHI CHÚ MẪU</span><h2>{note.title}</h2><p>{note.summary}</p><div className="code-box"><pre><code>{note.code}</code></pre><button className="copy-code" type="button" onClick={copy}>{copied ? 'Đã sao chép' : 'Sao chép'}</button></div></article>;
}

export function Notes() {
  return <Layout active="writing"><PageHero eyebrow="GHI CHÚ NGẮN" title={<>Những mẩu <em>ý tưởng.</em></>} description="Các ghi chú mẫu gọn để đọc nhanh, lưu lại và mở rộng thành bài viết khi cần." /><section className="page-section shell"><div className="notes-grid">{notes.map(note => <NoteCard key={note.title} note={note} />)}</div><div className="writing-more"><p>Muốn đọc dài hơn?</p><a href="/writing/">Xem tất cả bài viết</a></div></section></Layout>;
}

export function Lab() {
  const [fontSize, setFontSize] = useState(64);
  const [palette, setPalette] = useState('coral');
  return <Layout active="lab"><PageHero eyebrow="LAB / THỬ NGHIỆM" title={<>Chạm vào rồi <em>thử.</em></>} description="Một góc dành cho những ý tưởng nhỏ có thể tương tác ngay trên trang. Mọi thứ chạy cục bộ trong trình duyệt." /><section className="page-section shell lab-grid"><article className="lab-panel"><div className="lab-panel-head"><span>TYPOGRAPHY PLAYGROUND</span><h2>Đổi nhịp chữ</h2><p>Thử thay cỡ chữ để thấy một câu có thể đổi cảm giác thế nào.</p></div><div className="type-stage"><span style={{ fontSize }}>GOOD IDEAS<br />NEED SPACE.</span></div><label className="range-label" htmlFor="type-range">Cỡ chữ <output>{fontSize} px</output></label><input id="type-range" type="range" min="36" max="96" value={fontSize} onChange={event => setFontSize(Number(event.target.value))} /></article><article className="lab-panel"><div className="lab-panel-head"><span>COLOR PLAYGROUND</span><h2>Đổi sắc độ</h2><p>Một ý tưởng khác đi khi nền, chữ và điểm nhấn đổi chỗ.</p></div><div className={`palette-stage palette-${palette}`}><span>MAKE IT<br />MEMORABLE.</span><i>✳</i></div><div className="palette-controls" role="group" aria-label="Chọn bảng màu">{[['coral','San hô'],['aqua','Xanh bạc hà'],['violet','Tím']].map(([value,label]) => <button key={value} className={`palette-swatch${palette===value?' is-active':''}`} type="button" data-palette={value} aria-label={label} aria-pressed={palette===value} onClick={() => setPalette(value)} />)}</div></article></section></Layout>;
}

const tools = [
  { label: 'KHÁM PHÁ', title: 'Quan sát trước khi vẽ', text: 'Ghi lại vấn đề, sơ đồ luồng và những câu hỏi chưa có lời đáp. Một bản phác thảo tốt giúp tiết kiệm nhiều vòng sửa phía sau.', tags: ['Ghi chú', 'Wireframe', 'Phản hồi'] },
  { label: 'XÂY DỰNG', title: 'Code có cấu trúc', text: 'Chọn công cụ vừa đủ cho nhiệm vụ; ưu tiên khả năng đọc, bảo trì và những tương tác có thể kiểm tra được.', tags: ['HTML / CSS', 'JavaScript', 'Component'] },
  { label: 'KIỂM TRA', title: 'Thử trên nhiều bối cảnh', text: 'Xem lại trang ở màn hình nhỏ, bàn phím, chế độ giảm chuyển động và các trạng thái dữ liệu khác nhau.', tags: ['Responsive', 'Accessibility', 'Hiệu năng'] }
];

export function Uses() {
  return <Layout active="about"><PageHero eyebrow="BỘ CÔNG CỤ / MẪU" title={<>Điều giúp ý tưởng <em>chạy được.</em></>} description="Trang này là một khung giới thiệu công cụ và thói quen làm việc. Các mục dưới đây chỉ là ví dụ, chưa phải danh sách thiết bị cá nhân." /><section className="page-section shell uses-sections">{tools.map(item => <div className="uses-row" key={item.label}><span>{item.label}</span><div><h2>{item.title}</h2><p>{item.text}</p><div className="uses-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>)}<p className="catalog-note">Danh sách có thể được thay bằng thiết bị và phần mềm thật khi bạn muốn công bố.</p></section></Layout>;
}

export function Contact() {
  const [status, setStatus] = useState('');
  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('Đã sao chép liên kết.');
    } catch {
      setStatus('Không thể sao chép lúc này.');
    }
  }
  return <Layout active="contact"><PageHero eyebrow="KẾT NỐI" title={<>Một cuộc trò chuyện <em>bắt đầu ở đây.</em></>} description="Mục này đã được chuẩn bị cho email và các kênh cá nhân. Chưa có địa chỉ nào được công bố vì bạn chưa cung cấp thông tin liên hệ." /><section className="page-section shell contact-page-grid"><div className="contact-page-mark" aria-hidden="true">✳</div><div><p className="overline">GIỮ LẠI LIÊN KẾT</p><h2>Hẹn gặp khi hồ sơ hoàn thiện.</h2><p>Bạn có thể chia sẻ hoặc lưu đường dẫn của trang này. Kênh liên hệ chính thức sẽ xuất hiện tại đây khi sẵn sàng.</p><button className="button button-primary" type="button" onClick={copy}>Sao chép liên kết trang <span aria-hidden="true">✳</span></button><p id="copy-page-status" role="status" aria-live="polite">{status}</p></div></section></Layout>;
}
