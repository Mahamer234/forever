
const Subscrip = () => {
    const handlesubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <section className="my-8 sm:my-36 flex flex-col gap-4 justify-center items-center">
            <h2 className=" text-base sm:text-4xl font-semibold capitalize  ">subscibe  now & get 20% off</h2>
            <p className="text-gray-500 text-lg ">Lorem, ipsum dolor . quo ipsam maxime assumenda quae deserunt sit cum maiores vero, modi sint!</p>
            <form className="md:w-28rem  flex flex-col gap-4 sm:block"> 
                <input type="text" name="subscrip" placeholder="Enter  Your Email " className="px-4  py-2 border w-72 md:w-[26rem]"  />
                <button className="bg-black text-gray-100 uppercase py-2 px-4" onClick={handlesubmit}>subscribe</button>
            </form>

            
        </section>
    );
}

export default Subscrip;
