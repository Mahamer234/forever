import PolicyDiv from "./PolicyDiv";
import { assets } from "../assets/assets";
const Ploicy = () => {
    return (
        <section className="my-32 grid grid-cols-1 sm:grid-cols-3 gap-16">
             <PolicyDiv imag={assets.exchange_icon} heading={"easy exchange policy"} desc={"we have more exchange plocy  more exchange plocy "}/>
             <PolicyDiv imag={assets.quality_icon} heading={"7daya return policy"} desc={"we have more exchange plocy  more exchange plocy"}/>
             <PolicyDiv imag={assets.support_img} heading={"best customer support"} desc={"we have more exchange plocy  more exchange plocy"}/>
        </section>
    );
}

export default Ploicy;
