 
 const Title = ({text1 , text2}) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <p className="uppercase text-base sm:text-3xl text-neutral-700 "> <span className="text-neutral-500" >{text1}</span> {text2}</p>
            <div className="w-6 sm-w-12 h-[1.5px] bg-neutral-700 rounded-2xl"></div>
        </div>
    );
 }
 
 export default Title;
 