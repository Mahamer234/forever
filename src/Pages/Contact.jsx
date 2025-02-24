import { assets } from "../assets/assets";
import { Subscrip, Title } from "../Components";

const Contact = () => {
  return (
    <section className=" mt-4 mb-8 sm:mt-16 sm:mb-32">
      <Title text1={"Contact"} text2={"Us"} />
      <div className="flex flex-col sm:flex-row gap-8 w-[100%]  md:w-[70%] mx-auto my-8 sm:my-20">
        {/* image */} 
        <div className=" rounded-tl-[50px] rounded-br-[50px] flex-1 shadow-xl ">
            <img draggable={false} src={assets.contact_img} alt="contact img" className=" rounded-tl-[50px] rounded-br-[50px] w-full h-full" />
        </div>
        {/* Contant  */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <h2 className="font-semibold  uppercase  text-gray-600">Our Store</h2>
          <div className="my-4 text-gray-500">
            <p>54709 wilms station</p>
            <p>suite 350, wachingtan, Usa</p>
          </div>
          <div className="my-4 text-gray-500">
            <p>tel: +201050035241</p>
            <p>Email : admin@yahmou.com</p>
          </div>
          <h2 className="font-semibold  uppercase  text-gray-600">Careers at Forfer</h2>
          <p> Learn more about our teams and jobs opening</p>
          <button className="border px-5 py-3 mt-4 w-40 rounded-tl-[10px] rounded-br-[10px] hover:shadow-md transition-shadow duration-300">Explore jobs</button>
        </div>
      </div>
      <Subscrip/>
    </section>
  );
};

export default Contact;
