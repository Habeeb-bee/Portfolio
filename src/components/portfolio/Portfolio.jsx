import exp from '../img/expense.png';
import rex from '../img/rex.png';
import country from '../img/country.png';
import bee from '../img/bee.png';
import todo from '../img/todo.png';
import guess from '../img/guess.png';
import dice from '../img/dice.png';
import rowzea from '../img/rowzea.png';




function Portfolio () {
    return (
      <section className=" py-[5em] px-[1em] bg-[#ffb85c]" id='Portfolio'>
  <h1 className="pb-[3em] text-3xl font-bold text-[#3f3e77] md:text-4xl ">PORTFOLIO</h1>

  <div className="cards p-[1rem]  flex flex-wrap justify-between gap-[3.5em]">

  <div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Rex-kitchen</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={rex} alt="" />
  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ffb85c]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Rex-kitchen/">
      OPEN </a></button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">RowZea</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className="  h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={rowzea} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Rowzea/">
      OPEN</a> </button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Bee-Airways</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={bee} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Bee-Airways/">
      OPEN </a></button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Expense App</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] scale-105 bg-cover group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={exp} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "><a href="https://habeeb-bee.github.io/Expense-App/">
      OPEN </a> </button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Country App</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={country} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/country/">
      OPEN</a></button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Todo-list</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={todo} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Todo-list/">
      OPEN </a> </button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Dice-game</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={dice} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Dice-Game/">
      OPEN </a></button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Guess-game</h1>
    <p className='font-thin text-lg pb-[1.5em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum!</p>

    <img className=" h-[40vh] w-full p-[.2rem] bg-cover scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src={guess} alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Guess/">
      OPEN </a></button>
  </div> 
</div>
 </div>

</section>
    )
}

export default Portfolio