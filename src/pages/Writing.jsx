import { useState } from 'react';
import { articles } from '../data.js';
import { Breadcrumb, Layout, NextLink, PageHero } from '../components/SiteShell.jsx';

const topics = ['Tất cả', 'Thiết kế', 'Frontend', 'Quá trình'];

export function WritingIndex() {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('Tất cả');
  const query = search.trim().toLocaleLowerCase('vi');
  const visible = articles.filter(article => (topic === 'Tất cả' || article.topic === topic) && `${article.title} ${article.excerpt} ${article.topic}`.toLocaleLowerCase('vi').includes(query));
  return <Layout active="writing"><PageHero eyebrow="BÀI VIẾT" title={<>Ghi lại điều <em>đáng nhớ.</em></>} description="Một không gian cho những suy nghĩ về thiết kế, code và cách học trong quá trình làm sản phẩm. Các bài hiện tại là bản thảo minh họa." /><section className="page-section shell"><div className="writing-tools"><label className="search-label">Tìm trong bài viết<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Tìm theo tiêu đề hoặc chủ đề" /></label><div className="topic-filters" role="group" aria-label="Lọc chủ đề">{topics.map(item => <button key={item} className={`topic-filter${topic===item?' is-active':''}`} type="button" aria-pressed={topic===item} onClick={() => setTopic(item)}>{item}</button>)}</div></div><div className="writing-list">{visible.map(article => <article className="writing-row" key={article.slug}><a href={`/writing/${article.slug}/`}><span className="writing-topic">{article.topic} · BÀI MẪU</span><div><h2>{article.title}</h2><p>{article.excerpt}</p></div><span className="writing-read">{article.read} đọc</span></a></article>)}</div>{visible.length === 0 && <p className="empty-message">Không có bài nào khớp với tìm kiếm.</p>}<div className="writing-more"><p>Thích những ý ngắn hơn?</p><a href="/notes/">Mở trang ghi chú</a></div></section></Layout>;
}

export function ArticlePage({ article }) {
  const index = articles.findIndex(item => item.slug === article.slug);
  const next = articles[(index + 1) % articles.length];
  return <Layout active="writing"><Breadcrumb parent="Bài viết" parentHref="/writing/" current={article.topic} /><article className="article-page"><header className="article-head"><p className="eyebrow"><span className="eyebrow-line"></span>{article.topic.toUpperCase()} · BÀI VIẾT MẪU</p><h1>{article.title}</h1><p className="article-lead">{article.excerpt}</p><div className="article-meta"><span>HOÀNG KỲ PHẠM</span><span>{article.read} ĐỌC</span><span>BẢN THẢO MINH HỌA</span></div></header><div className="article-body"><p className="article-intro">Một ghi chú ngắn để phác họa giọng viết và cấu trúc bài trên website cá nhân này.</p>{article.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}<aside>Bài viết này là nội dung mẫu. Những trải nghiệm và bài viết thật có thể được thay vào sau.</aside></div></article><NextLink eyebrow="BÀI TIẾP THEO" title={next.title} href={`/writing/${next.slug}/`} /></Layout>;
}
