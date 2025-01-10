

const Button = ({ text,  handleClick }) =>{

    return(
        //react fragment
        <>

            <button onClick={handleClick} className="px-[15px] py-[4px] bg-blue-300 text-white rounded-[4px] hover:shadow-lg">
                {text} 
            </button>
        </>
    )
}

export default Button;