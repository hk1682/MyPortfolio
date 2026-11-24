import { useState } from 'react';
import { projects } from '../data.js';
import { Breadcrumb, Layout, NextLink, PageHero } from '../components/SiteShell.jsx';
import { PixelProjectArt } from '../components/PixelIllustration.jsx';

export function WorkVisual({ project }) {
  return <div className={`work-visual work-visual-${project.className}`} aria-hidden="true"><PixelProjectArt slug={project.slug} /><span className="work-visual-label">{project.kind.toUpperCase()} / CONCEPT</span><strong>{project.title}</strong></div>;
}

export function WorkCard({ project, featured = false }) {
  return <article className={`work-card${featured ? ' work-card-featured' : ''}`}><a href={`/work/${project.slug}/`}><WorkVisual project={project} /><div className="work-card-info"><div><span>CONCEPT MINH HỌA · {project.kind.toUpperCase()}</span><h3>{project.title}</h3><p>{project.lead}</p></div><span className="work-card-mark" aria-hidden="true">✳</span></div></a></article>;
}

export function WorkIndex() {
  const [filter, setFilter] = useState('all');
  const shown = projects.filter(project => filter === 'all' || (filter === 'web' ? project.kind === 'Website' : project.kind !== 'Website'));
  return <Layout active="work"><PageHero eyebrow="DỰ ÁN / CONCEPT" title={<>Ý tưởng cần được <em>thử.</em></>} description="Ba concept mẫu thể hiện cách một portfolio có thể kể về vấn đề, hướng giải quyết và trải nghiệm. Chúng không phải công việc đã triển khai." /><section className="page-section shell"><div className="catalog-top"><p className="overline">BỘ SƯU TẬP MINH HỌA</p><div className="filters" role="group" aria-label="Lọc concept dự án">{[['all','Tất cả'],['web','Website'],['product','Sản phẩm']].map(([value,label]) => <button key={value} className={`filter${filter===value?' is-active':''}`} type="button" aria-pressed={filter===value} onClick={() => setFilter(value)}>{label}</button>)}</div></div><div className="work-grid">{shown.map((project,index) => <WorkCard key={project.slug} project={project} featured={filter==='all' && index===0} />)}</div><p className="catalog-note">Mỗi trang chi tiết là một bản phác thảo nội dung. Hãy thay bằng case study thật khi có dự án phù hợp.</p></section></Layout>;
}

export function CaseStudy({ project }) {
  const index = projects.findIndex(item => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <Layout active="work"><Breadcrumb parent="Dự án" parentHref="/work/" current={project.title} /><section className="case-hero shell"><div><p className="eyebrow"><span className="eyebrow-line"></span>CONCEPT MINH HỌA · {project.kind.toUpperCase()}</p><h1>{project.title}<span className="case-dot">.</span></h1><p>{project.lead}</p><div className="case-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><WorkVisual project={project} /></section><section className="page-section shell case-body"><div className="case-label">GÓC NHÌN CỦA CONCEPT</div><div className="case-block"><h2>Vấn đề đặt ra</h2><p>{project.brief}</p></div><div className="case-block"><h2>Hướng tiếp cận</h2><p>{project.approach}</p></div><div className="case-block"><h2>Trải nghiệm dự kiến</h2><ul>{project.interactions.map(item => <li key={item}>{item}</li>)}</ul></div><div className="case-disclaimer">Đây là dự án mẫu để thể hiện cấu trúc case study, chưa phải sản phẩm đã triển khai.</div></section><NextLink eyebrow="CONCEPT TIẾP THEO" title={next.title} href={`/work/${next.slug}/`} /></Layout>;
}
