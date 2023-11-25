const Section2 = () => {


    return (<>
        <div className=" flex flex-col noscrollbar overflow-auto border border-sky-400 hover:border-sky-600 transition-all mt-40 mx-5 md:w-3/5 md:mx-auto h-[90vh] bg-sky-200/20 rounded-t-2xl  backdrop-blur-lg ">
            <AboutMe />
            
        </div>
    </>)
}

export default Section2


const AboutMe = () => {

    return (
        <>
            <div className="flex flex-col gap-10 w-full p-5">
                <p className="text-xl md:text-3xl text-center tracking-[0.2em] font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 ">ABOUT ME</p>
                <p className="text-blue-800 md:w-3/4 mx-auto text-center md:text-lg">
                    Hi there, my name is Prakash and I am a full-stack web developer with experience in creating dynamic and interactive web applications. With a strong experience in C#, Javascript, HTML/CSS etc. I am capable of bringing your vision to life and delivering high-quality results in a timely manner.
                    <br />
                    Thank you for taking the time to read about me.
                </p>
            </div>
        </>
    )
}