import { useEffect, useState } from 'react';

const nav = [
  ['/about/', 'Về mình', 'about'],
  ['/work/', 'Dự án', 'work'],
  ['/writing/', 'Bài viết', 'writing'],
  ['/lab/', 'Lab', 'lab']
];

export function Header({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header" id="top">
    <div className="shell header-inner">
      <a className="brand" href="/" aria-label="Kỳ Phạm, về trang chủ"><span className="brand-mark">K<span className="brand-dot">.</span></span><span className="brand-name">KỲ PHẠM<br /><small>PERSONAL LAB</small></span></a>
      <nav className="desktop-nav" aria-label="Điều hướng chính">{nav.map(([href, label, key]) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>)}</nav>
      <a className="header-cta" href="/contact/">Kết nối <span className="cta-spark" aria-hidden="true">✳</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
    </div>
    <nav className="mobile-nav" id="mobile-nav" aria-label="Điều hướng di động" hidden={!menuOpen}>{nav.map(([href, label, key]) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>)}<a href="/contact/">Kết nối</a></nav>
  </header>;
}

export function Footer() {
  return <footer className="subfooter"><div className="shell"><div className="subfooter-top"><span className="overline">KỲ PHẠM / PERSONAL LAB</span><a href="/contact/">Có ý tưởng muốn cùng xây?</a></div><div className="subfooter-bottom"><span>© {new Date().getFullYear()} HOÀNG KỲ PHẠM</span><nav aria-label="Liên kết cuối trang"><a href="/work/">Dự án</a><a href="/writing/">Bài viết</a><a href="/notes/">Ghi chú</a><a href="/uses/">Bộ công cụ</a></nav><a href="#top">Về đầu trang</a></div></div></footer>;
}

export function Progress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(max > 0 ? window.scrollY / max * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div className="reading-progress" style={{ width: `${width}%` }} aria-hidden="true" />;
}

export function Layout({ active, children, home = false }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.06 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><a className="skip-link" href="#main">Bỏ qua menu</a><Progress /><Header active={active} /><main id="main">{children}</main>{!home && <Footer />}</>;
}

export function PageHero({ eyebrow, title, description }) {
  return <section className="page-hero shell"><p className="eyebrow"><span className="eyebrow-line"></span>{eyebrow}</p><div className="page-hero-grid"><h1>{title}</h1><div className="page-hero-aside"><p>{description}</p></div></div></section>;
}

export function SectionHead({ eyebrow, title, description }) {
  return <div className="inner-section-head"><p className="overline">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Breadcrumb({ parent, parentHref, current }) {
  return <div className="shell detail-breadcrumb"><a href={parentHref}>{parent}</a><span>/</span><span>{current}</span></div>;
}

export function NextLink({ eyebrow, title, href }) {
  return <a className="next-case" href={href}><span>{eyebrow}</span><strong>{title}</strong><i aria-hidden="true">✳</i></a>;
}
