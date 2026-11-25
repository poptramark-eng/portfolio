import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, MoveUpRight } from "lucide-react";

const projects = [
  { number: "01", name: "Sentinel", type: "Education · Assessment management", description: "A school assessment platform shaped around real institutional workflows, data relationships and access boundaries.", focus: ["Domain modelling", "Multi-tenant thinking", "Workflow design"], status: "Engineering case study", href: "https://github.com/poptramark-eng/sentinel" },
  { number: "02", name: "RefillRadar", type: "Energy · Product discovery", description: "Exploring how households can make more informed LPG refill decisions through clearer local information and service discovery.", focus: ["Problem discovery", "Value proposition", "Validation planning"], status: "Product concept", href: "https://github.com/poptramark-eng/lpg" },
  { number: "03", name: "Navakholo", type: "Education · Information systems", description: "An earlier exploration of school information and assessment workflows, informing the evolution of a more structured platform.", focus: ["Requirements", "Data design", "Application workflows"], status: "Project archive", href: "https://github.com/poptramark-eng/Navakholo" }
];

const principles = [
  ["01", "Understand the context", "Start with the people, constraints and real-world process behind the request."],
  ["02", "Design the whole system", "Consider interfaces, data, permissions, operations and the ways a product changes over time."],
  ["03", "Make complexity usable", "Turn complicated workflows into clear, dependable experiences."],
  ["04", "Build with intention", "Choose tools and architecture because they serve the problem, not because they are fashionable."]
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="#top" aria-label="Mark Machukhu home">MM<span>.</span></Link>
        <nav aria-label="Main navigation">
          <Link href="#work">Selected work</Link><Link href="#approach">Approach</Link><Link href="#about">About</Link>
          <Link className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></Link>
        </nav>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="eyebrow"><span className="status-dot"/> SOFTWARE ENGINEERING · PRODUCT THINKING</div>
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">A thoughtful approach to useful software.</p>
            <h1>From problem<br/>to <em>product.</em></h1>
          </div>
          <div className="hero-aside">
            <p className="intro">I’m Mark, a product-minded software engineer. I connect user needs, product decisions and practical engineering to build useful digital systems.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16}/></Link>
              <Link className="text-link" href="#approach">How I approach problems <ArrowDownRight size={16}/></Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom"><span>BASED IN KENYA · WORKING EVERYWHERE</span><span>DISCOVERY — DESIGN — ENGINEERING</span></div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Ideas made<br/><em>tangible.</em></h2></div><p className="section-note">A selection of projects and explorations. Each one is an opportunity to understand a problem more deeply and make better decisions about what to build.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className="project" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main"><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.focus.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-side"><span className="project-status">{project.status}</span><Link href={project.href} target="_blank" rel="noreferrer" aria-label={`Explore ${project.name} on GitHub`} className="circle-link"><ArrowUpRight size={20}/></Link></div>
          </article>)}
        </div>
        <p className="honesty-note">Project descriptions distinguish implemented work from concepts and ongoing explorations. More detailed case studies will document decisions, contributions and outcomes as they are verified.</p>
      </section>

      <section className="approach-section" id="approach"><div className="section-wrap approach-inner">
        <div className="section-heading"><div><span className="eyebrow">02 / HOW I WORK</span><h2>Good work starts<br/>with <em>good questions.</em></h2></div><p className="section-note">The code matters. So does the thinking that gives it direction.</p></div>
        <div className="principle-grid">{principles.map(([number,title,description]) => <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="about-section section-wrap" id="about">
        <div><span className="eyebrow">03 / A LITTLE ABOUT ME</span><h2>Engineering is<br/>how I make ideas<br/><em>work in the world.</em></h2></div>
        <div className="about-copy"><p>I’m a software engineering student and builder interested in the space between understanding a problem and delivering a system people can rely on.</p><p>My work moves across product discovery, interface design, backend architecture and implementation. I enjoy making the moving parts fit together — and being honest about the trade-offs along the way.</p><div className="about-links"><Link href="https://github.com/poptramark-eng" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></Link></div></div>
      </section>

      <footer className="footer" id="contact"><div className="section-wrap">
        <span className="eyebrow">04 / HAVE SOMETHING IN MIND?</span><div className="footer-main"><h2>Let’s make<br/><em>something useful.</em></h2><Link className="contact-link" href="https://github.com/poptramark-eng">Connect on GitHub <MoveUpRight size={20}/></Link></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Mark Machukhu</span><span>THOUGHTFUL PRODUCTS. CLEAR SYSTEMS. PRACTICAL ENGINEERING.</span><Link href="#top">BACK TO TOP ↑</Link></div>
      </div></footer>
    </main>
  );
}