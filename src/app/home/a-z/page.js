"use client";
import speciesData from "../../json/species.json"; // importing JSON directly

export default function Page() {
  return (
    <div className="w-[400px] h-[90vh] relative my-6 rounded-xl bg-[#5a6e5c] overflow-y-auto no-scrollbar m-auto">
      <h1 className="text-xl font-bold text-center text-white py-4">
        Lista delle Specie
      </h1>

      <div className="w-full px-3 space-y-4 pb-6">
        {speciesData.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-[#6b7f6c] rounded-xl shadow-md overflow-hidden"
          >
            {/* Left side - Image */}
            <div className="w-2/5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 object-cover"
              />
            </div>

            {/* Right side - Title & Description */}
            <div className="w-3/5 p-2 text-white">
              <h2 className="text-lg font-semibold leading-tight">
                {item.title}
              </h2>
              <p className="text-xs opacity-90 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
