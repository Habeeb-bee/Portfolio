




function Portfolio () {
    return (
      <section className=" py-[5em] px-[1em] bg-[#ffb85c]" id='Portfolio'>
  <h1 className="pb-[3em] text-3xl font-bold text-[#3f3e77] md:text-4xl ">PORTFOLIO</h1>

  <div className="cards p-[1rem] grid md:grid-cols-2 md:justify-evenly  justify-between gap-[3.5em] 
    ">

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Emploi</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>A Great platform for the job seekers
    searching for new career heights. </p>

    <img className=" w-full  object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/emploi.png" alt="" />
  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ffb85c]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Emploi/">
      OPEN </a></button>
  </div> 
</div>


  <div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Rex-kitchen</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'> Experience the flavours of the best dishes from anywhere around the globe </p>

    <img className=" w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/rex.png" alt="" />
  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ffb85c]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Rex-kitchen/">
      OPEN </a></button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">RowzEA</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em] '>
        Get the best gadgets you need at your doorstep on the RowzEA website</p>

    <img className="  w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/rowzea.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Rowzea/">
      OPEN</a> </button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Bee-Airways</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'> 
      Plan your next trip around the world on the Bee-Airways website
    </p>

    <img className=" w-full object-fit h-full scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/bee.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Bee-Airways/">
      OPEN </a></button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Expense App</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>
      Track your expense with the Expense App</p>

    <img className=" w-full p-[.2rem] object-fit h-full scale-105 bg-cover  group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/expense.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "><a href="https://habeeb-bee.github.io/Expense-App/">
      OPEN </a> </button>
  </div> 
</div>


<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Country App</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>
      Know more about different countries around the globe</p>

    <img className=" w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/country.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/country/">
      OPEN</a></button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Todo-list</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>
      Plan your schedule with the Todo-list app
    </p>

    <img className=" w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/todo.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Todo-list/">
      OPEN </a> </button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Dice-game</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>
      Have fun with your friends on the dice game </p>

    <img className=" w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/dice.png" alt="" />

  </div>

   <div className="order bg-black place-content-center text-center duration-1000  opacity-70  absolute w-full h-1/8 group-hover:translate-y-[-100%]  ">
    <button className=" inset-0  py-3  text-[#ea8d67]
     md:px-6 md:py-3 md:text-xl  hover:text-white "> <a href="https://habeeb-bee.github.io/Dice-Game/">
      OPEN </a></button>
  </div> 
</div>

<div className="group card1 flex-auto bg-slate-100 rounded-lg relative hover:shadow-2xl  shadow-lg overflow-hidden">
  <div className="disc h-[60vh] bg-[#2f3a3f] text-[#e2e8f0] text-left  px-[.5em] pt-[1em]  ">
    <h1 className=" project1  text-2xl font-bold pb-[.5rem] ">Guess-game</h1>
    <p className='font-thin text-lg pb-[1.5em] h-[4.5em]'>
      If you think you're good at guessing numbers then
      you should hop on this</p>

    <img className=" w-full object-fit h-full p-[.2rem] bg-cover  scale-105 group-hover:rotate-1 group-hover:scale-110 group-hover:bg-black/15 duration-500  " src="assets/guess.png" alt="" />

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