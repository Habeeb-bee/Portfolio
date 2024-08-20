import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import sass from "./img/sass.png";
import bootstrap from "./img/bootstrap.png";
import tailwind from "./img/tailwind.png";
import react from "./img/react.png";

function Skill() {
  return (
    <section className=" text-[#e2e8f0] pt-[4em] pb-[2em]" id="Skill">
      <h1 className=" font-bold text-3xl py-[1em] md:text-4xl ">Skills</h1>
      <div className=" ">


     <div className="skill-content grid grid-cols-3 gap-4 justify-around items-end md:grid-cols-5 ">
        <div className="skill-box grid place-items-center	 text-center transition-transform hover:-translate-y-1 ">
        <img className="   h-[20vh] p-[1.5em]  " src={html} alt="" />
        <span className="skill-name   text-sm">HTML</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={css} alt="" />
        <span className="skill-name  text-sm">CSS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={js} alt="" />
        <span className="skill-name  text-sm">JS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={sass} alt="" />
        <span className="skill-name  text-sm">SASS</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={bootstrap} alt="" />
        <span className="skill-name  text-sm">BOOTSTRAP</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={tailwind} alt="" />
        <span className="skill-name  text-sm">TAILWIND</span>
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[20vh] p-[1.5em]  " src={react} alt="" />
        <span className="skill-name  text-sm">REACT</span>
        </div>
     </div>

      </div>
    </section>
  );
}

export default Skill;
