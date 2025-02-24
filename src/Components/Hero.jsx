import { assets } from "../assets/assets";
const Hero = () => {
    return (
        <section className="flex flex-col sm:flex-row   h-[450px] border ">
            {/* hero content */}
            <div className="flex-1 flex flex-col items-center justify-center">
               <div>
               <div className=" flex items-center gap-3">
                    <div className="w-12 h-[1.5px] bg-neutral-400 rounded-2xl"></div>
                    <p className="uppercase text-xl text-neutral-600">our bestseller</p>
                </div>
                <p className="uppercase text-4xl text-neutral-600 ">lastes arrivals</p>
                <div className=" flex items-center gap-3">
                    <p className="uppercase text-xl text-neutral-600">our bestseller</p>
                    <div className="w-12 h-[1.5px] bg-neutral-400 rounded-2xl"></div>
                </div>
               </div>
            </div>
            {/* hero image */}
            <div className="flex-1 overflow-hidden">
                <img className=' object-cover  '  src={assets.hero_img} alt="hero img " title="hero img"/>
            </div>
            
        </section>
    );
}

export default Hero;
