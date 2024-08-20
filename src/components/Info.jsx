import Skill from './Skills';


//Ceate CV

function Info() {
  return (
    <section id="Info" className="info bg-[#3f3e77] text-[#e2e8f0] py-[4em]">
      <h1 className="text-3xl font-bold py-[1rem] md:text-4xl ">My Info</h1>
      <div>
        <p className="text-xl p-[1rem] md:text-2xl">
          I am passionate about creating
          <span className="text-[#ffb85c]"> Websites</span> and 
          <span className="text-[#ffb85c]"> Web applications</span> with
          beautiful interfaces. I have years of experience in
          <span className="text-[#ffb85c]"> Front-end development</span> with
          several projects completed and through the use of multiple programming
          languages and frameworks.
        </p>
      </div>

      <button className="mt-[1rem] rounded bg-[#ffb85c] p-[1rem] md:text-xl">
        Download CV
      </button>
      <Skill>
          </Skill>
    </section>
          

  );
}

export default Info;
