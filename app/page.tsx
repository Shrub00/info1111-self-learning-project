import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
    <section className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
    <h1 className="text-4xl font-bold text-blue-900 mb-4">Strata Harmony</h1>
    <p className="text-gray-700 mb-6">
    Welcome to the official management portal for our strata-titled apartment building in New South Wales.
    </p>

    <h2 className="text-2xl font-semibold text-blue-800 mb-2">Strata Committee</h2>
    <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li><strong>Chairperson:</strong> Alex Lee</li>
    <li><strong>Secretary:</strong> Morgan Reid</li>
    <li><strong>Treasurer:</strong> Jamie Chen</li>
    <li>Member: Sam Patel</li>
    <li>Member: Riley Gomez</li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-800 mb-2">Notices & Documents</h2>
    <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li><a className="text-blue-600 underline" href="/assets/agm-minutes-2025.pdf" target="_blank">2025 AGM Minutes (PDF)</a></li>
    <li><a className="text-blue-600 underline" href="/assets/building-insurance.pdf" target="_blank">Current Building Insurance Policy</a></li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-800 mb-2">Building Image</h2>
    <Image
    src="/assets/building.jpg"
    alt="Apartment Building"
    width={800}
    height={500}
    className="rounded-lg shadow-md"
    />

    <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">Contact Us</h2>
    <p className="text-gray-700 mb-2">For maintenance issues, levy inquiries, or general questions, email us at:</p>
    <a href="mailto:committee@strataharmony.com" className="text-blue-600 underline">committee@strataharmony.com</a>
    </section>
    </main>
  );
}
