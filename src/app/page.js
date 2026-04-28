export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      
      <div className="space-y-6 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold text-[rgb(var(--primary))]">
          Color System Test
        </h1>

        {/* Secondary text */}
        <p className="text-[rgb(var(--text-secondary))]">
          If colors look correct, your setup is working 🎉
        </p>

        {/* Primary box */}
        <div className="p-6 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))]">
          Secondary background test
        </div>

        {/* Accent button */}
        <button className="px-6 py-3 rounded-lg bg-[rgb(var(--accent))] text-black">
          Accent Button
        </button>

        {/* Gradient test */}
        <div
          className="h-20 w-60 mx-auto rounded-lg"
          style={{
            background: "linear-gradient(135deg, rgb(var(--primary)), rgb(var(--primary-light)))",
          }}
        />

      </div>
    </main>
  );
}