import { assets } from "../assets/frontend_assets/assets";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="txt-[#414141]">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-[#414141]"></span>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Lastes Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <span className="w-8 md:w-11 h-[1px] bg-[#414141]"></span>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img src={assets.hero_img} alt="Hero Image" className="w-full sm:w-1/2" />
    </section>
  );
}
