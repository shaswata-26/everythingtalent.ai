// components/FloatingText.jsx
"use client";

export default function FloatingText() {
  const layers = [1, 0.4, 0.2, 0.15, 0.1, 0.05, 0.02];

  return (
    <div className="absolute bottom-60 max-lg:bottom-40 right-20 hidden sm:block">
      <div className="w-[600px] h-[250px] flex items-center justify-center bg-transparent p-4 mb-4">
        <div className="relative w-full max-w-2xl h-64 rounded-lg transition-shadow duration-300">
          {/* Text Layers */}
          {layers.map((opacity, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
              style={{ zIndex: layers.length - index, opacity }}
            >
              <h1
                className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text select-none"
                style={{
                  backgroundImage: "linear-gradient(90deg, #B11AFF 0%, #FF689F 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                EVERYTHINGTALENT.AI
              </h1>
            </div>
          ))}

          {/* Optional Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full grid grid-cols-40 grid-rows-24 rounded-lg overflow-hidden">
              {Array.from({ length: 40 * 24 }).map((_, i) => (
                <div key={i}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
