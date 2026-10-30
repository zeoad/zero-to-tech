import Link from "next/link";
export default function NotFound(){return <section className="section-container page-section"><p className="eyebrow">404 — PAGE NOT FOUND</p><h1 className="page-title">这里暂时<span className="gradient-text">没有内容。</span></h1><p className="page-lead">你访问的页面可能已经移动，或者地址输入有误。</p><Link className="button button-primary" href="/">返回首页</Link></section>}
