import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">ALgorithm club Of HAnyang university</p>
          <h1 id="hero-title">
            한양대학교 알고리즘 동아리
            <span className="highlight">ALOHA</span>입니다
          </h1>
        </div>
      </section>
    </main>
  );
}
