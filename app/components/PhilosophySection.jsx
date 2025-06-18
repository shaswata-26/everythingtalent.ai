export default function PhilosophySection() {
  const items = [
    "We show up even when it’s hard.",
    "We act with urgency, resource progress and deliver results relentlessly.",
    "We focus hard work.",
    "We believe in long-term thinking.",
    "Do hard things.",
    "Commit to continual learning and improvement.",
    "Be a good human.",
    "Measure impact, not activity.",
    "Every project, every ambition we create is aimed at contributing to society’s big questions."
  ];
  return (
    <section className="py-16 px-6 bg-[#0B0B1E]">
      <h3 className="text-3xl font-bold text-center mb-12">Our Philosophy in <span className="text-[#A560F0]">Action</span></h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-200">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-4 min-h-[100px] flex items-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}