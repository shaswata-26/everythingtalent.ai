export default function VisionSection() {
  return (
    <section className="py-16 text-center bg-[#0A0A23]">
      <h2 className="text-3xl font-bold mb-6">The Fuel for <span className="text-[#A560F0]">Our Vision</span></h2>
      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
        {['Strategy', 'Structure', 'Talent', 'Velocity'].map(tag => (
          <span key={tag} className="px-4 py-2 bg-gray-800 rounded-full">{tag}</span>
        ))}
      </div>
    </section>
  );
}