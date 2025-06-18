export default function TalentSection() {
  return (
    <section className="py-16 px-6 bg-[#10101A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-gray-200">
          <h3 className="text-2xl font-bold mb-4">Connecting Talent and Opportunity</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>Streamlined hiring experiences</li>
            <li>Data-driven decision making</li>
            <li>AI-powered candidate match models</li>
          </ul>
        </div>
        <img src="/assets/talent.png" alt="Talent" className="w-full md:w-1/2 rounded-xl" />
      </div>
    </section>
  );
}