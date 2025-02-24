
const PolicyDiv = ({imag,heading,desc}) => {
    return (
        <div className="flex flex-col items-center">
            <img src={imag} alt="img" />
                <h2 className="uppercase text-xl font-medium">{heading}</h2>
                <p className="text-gray-500">{desc}</p>
        </div>
    );
}

export default PolicyDiv;
