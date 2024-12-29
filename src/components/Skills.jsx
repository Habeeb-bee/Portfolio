


function Skill() {
  return (
    <section className=" text-[#e2e8f0] pt-[4em] pb-[2em]" id="Skill">
      <h1 className=" font-bold text-3xl py-[1em] md:text-4xl ">Skills</h1>
      <div className=" ">


     <div className="skill-content grid grid-cols-3 gap-4 justify-around items-end md:grid-cols-4 md:gap-12 ">
        <div className="skill-box grid place-items-center	 text-center transition-transform hover:-translate-y-1 ">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/html.svg" alt="" />
        <span className="skill-name   text-sm">HTML</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/css.svg" alt="" />
        <span className="skill-name  text-sm">CSS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/js.svg" alt="" />
        <span className="skill-name  text-sm">JS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/sass.svg" alt="" />
        <span className="skill-name  text-sm">SASS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/bootstrap.svg" alt="" />
        <span className="skill-name  text-sm">BOOTSTRAP</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/tailwind.svg" alt="" />
        <span className="skill-name  text-sm">TAILWIND</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[10vh]  pb-[1em]  " src="assets/react.svg" alt="" />
        <span className="skill-name  text-sm">REACT</span>
        </div>
     </div>

      </div>
    </section>
  );
}

export default Skill;
