import { useEffect } from 'react';
import { articles, projects } from './data.js';
import Home from './pages/Home.jsx';
import { CaseStudy, WorkIndex } from './pages/Work.jsx';
import { ArticlePage, WritingIndex } from './pages/Writing.jsx';
import { About, Contact, Lab, Notes, Uses } from './pages/Secondary.jsx';
import { Layout } from './components/SiteShell.jsx';

function normalizePath(pathname) {
  const path = pathname.replace(/\/index\.html$/, '/');
  return path.endsWith('/') ? path : `${path}/`;
}

export default function App() {
  const path = normalizePath(window.location.pathname);
  const project = projects.find(item => path === `/work/${item.slug}/`);
  const article = articles.find(item => path === `/writing/${item.slug}/`);
  const pages = {
    '/': [<Home />, 'Kỳ Phạm — Lập trình viên & trải nghiệm số', 'Website cá nhân của Hoàng Kỳ Phạm.'],
    '/about/': [<About />, 'Về mình — Kỳ Phạm', 'Hồ sơ và cách tiếp cận công việc của Hoàng Kỳ Phạm.'],
    '/work/': [<WorkIndex />, 'Dự án — Kỳ Phạm', 'Tổng hợp các concept dự án minh họa.'],
    '/writing/': [<WritingIndex />, 'Bài viết — Kỳ Phạm', 'Bản thảo bài viết mẫu về giao diện, frontend và quá trình xây sản phẩm.'],
    '/notes/': [<Notes />, 'Ghi chú — Kỳ Phạm', 'Những ghi chú ngắn và đoạn mã mẫu.'],
    '/lab/': [<Lab />, 'Lab — Kỳ Phạm', 'Hai thử nghiệm nhỏ chạy trong trình duyệt.'],
    '/uses/': [<Uses />, 'Bộ công cụ — Kỳ Phạm', 'Bộ công cụ minh họa cho quy trình xây sản phẩm web.'],
    '/contact/': [<Contact />, 'Kết nối — Kỳ Phạm', 'Trang kết nối của Hoàng Kỳ Phạm.']
  };
  const [view, title, description] = project
    ? [<CaseStudy project={project} />, `${project.title} — Kỳ Phạm`, project.lead]
    : article
      ? [<ArticlePage article={article} />, `${article.title} — Kỳ Phạm`, article.excerpt]
      : pages[path] || [<Layout><section className="page-hero shell"><p className="eyebrow">KHÔNG TÌM THẤY TRANG</p><h1>Trang này chưa có.</h1><p><a href="/">Về trang chủ</a></p></section></Layout>, 'Không tìm thấy trang — Kỳ Phạm', 'Trang bạn tìm không tồn tại.'];

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
  return view;
}
