import './page.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
    <section className="card">
    <h1 className="title">Strata Harmony</h1>
    <p className="intro">
    Welcome to the official management portal for our strata-titled apartment building in New South Wales.
    </p>

    <h2 className="section-title">Strata Committee</h2>
    <ul className="list">
    <li><strong>Chairperson:</strong> Alex Lee</li>
    <li><strong>Secretary:</strong> Morgan Reid</li>
    <li><strong>Treasurer:</strong> Jamie Chen</li>
    <li>Member: Sam Patel</li>
    <li>Member: Riley Gomez</li>
    </ul>

    <h2 className="section-title">Notices & Documents</h2>
    <ul className="list">
    <li><a href="/assets/agm-minutes-2025.pdf" target="_blank">2025 AGM Minutes (PDF)</a></li>
    <li><a href="/assets/building-insurance.pdf" target="_blank">Current Building Insurance Policy</a></li>
    </ul>

    <h2 className="section-title">Building Image</h2>
    <Image
    src="/assets/building.jpg"
    alt="Apartment Building"
    width={800}
    height={500}
    className="image"
    />

    <h2 className="section-title">Contact Us</h2>
    <p>For maintenance issues, levy inquiries, or general questions, email us at:</p>
    <a href="mailto:committee@strataharmony.com">committee@strataharmony.com</a>
    </section>
    </main>
  );
}
