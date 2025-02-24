import { assets } from '../assets/assets';
import {Title } from '../Components'
const About = () => {
    return (
        <section className=" mt-4 sm:mt-16 mb-16 sm:mb-32">
        <Title  text1={"About"} text2={"Us"}/>
        <div className="flex flex-col sm:flex-row gap-8 w-[100%] sm:w-[85%] md:w-[70%] mx-auto my-8 sm:my-20">
          {/* image */} 
          <div className=" rounded-tl-[50px] rounded-br-[50px] flex-1 shadow-xl">
              <img draggable={false} src={assets.about_img} alt="contact img" className=" h-[100%] rounded-tl-[50px] rounded-br-[50px]" />
          </div>
          {/* Contant  */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur   Voluptatem vel, non sequi exercitationem laborum porro. In, ipsam reiciendis maiores quia.</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur  Sunt similique nihil rerum ipsam nulla voluptates minus alias accusamus earum corrupti </p>
            <div className="my-4 text-gray-500">
              <p>tel: +201050035241</p>
              <p>Email : admin@yahmou.com</p>
            </div>
            <h2 className="font-semibold  uppercase  text-gray-600">Careers at Forfer</h2>
            <p> Learn more about our teams and jobs opening</p>
          </div>
        </div> 

        {/* -----------------why choose us  */}
        <section className=' my-8 sm:my-32'>
            <div className='flex justify-start'> 
                <Title text1={"why"} text2={"choose us"}/>
            </div>
            <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row  my-8'>
                <div className='border p-8'>
                    <h2 className='uppercase font-semibold'>Quality</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt molestiae quae nobis dolores ipsa placeat eos, corporis vel ducimus. Cupiditate numquam </p>
                </div>
                <div className='border p-8'>
                    <h2 className='uppercase font-semibold'>Material</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt molestiae quae nobis dolores ipsa placeat eos, corporis vel ducimus. Cupiditate numquam </p>
                </div>
                <div className='border p-8'>
                    <h2 className='uppercase font-semibold'>fridays</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt molestiae quae nobis dolores ipsa placeat eos, corporis vel ducimus. Cupiditate numquam </p>
                </div>

            </div>
            
        </section>
      </section>
    );
}

export default About;
