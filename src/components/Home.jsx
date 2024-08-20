import home from "./img/home.png";

function Home() {
  return (
    <section id="Home">
      <div className=" home-container py-[2em] flex flex-wrap justify-center  ">
      <div className=" home-data pb-[2em]  md:w-[45vw] md:pt-[8%]">
          <h4 className="text-xl md:text-2xl lg:text-3xl lg:pb-[.5rem]">Welcome, I'm</h4>
          <h1 className=" font-bold text-3xl  md:text-4xl lg:text-5xl lg:pb-[.5rem] text-[#3f3e77] ">Adeogun Habeeb</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl" >a Frontend <span className="text-[#888df5] ">developer</span></h2>
        </div>

        <img className="home-img px-[5em] pb-[2em] w-[75vw] md:w-[50vw]  " src={home} alt="" /> 
      </div>

      
    </section>
  );
}

export default Home;
