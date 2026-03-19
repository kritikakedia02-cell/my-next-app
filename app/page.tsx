export default function Home() {
  return (
    <div className="space-y-12">

      {/* Hero */}
      <section className="text-center py-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-indigo-600">Kritika</span> 👋
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Builder, thinker, and maker of things. Turning ideas into reality,
          one line of code at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href="/blog"
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read my blog
          </a>
          <a
            href="/contact"
            className="inline-block border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Featured cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">What I&apos;m working on</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Favorite Books API',  desc: 'A simple Express API to track books, built with Node.js.' },
            { title: 'Profile Card',        desc: 'Accessible profile card with dark mode and smooth transitions.' },
            { title: 'This Site',           desc: 'Responsive Next.js 14 layout with Tailwind CSS.' },
          ].map(card => (
            <div
              key={card.title}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
