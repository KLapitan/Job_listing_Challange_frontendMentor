const FilterList =({filterRoles }) => {



return(
<>

{filterRoles.map((job) => (
<li key={job.id} className="flex flex-col lg:flex-row  border-l-8 min-w- rounded-lg bg-white shadow-lg shadow-PGreen-400/30 justify-between items-center h-64 border-l-PGreen-400 lg:w-5xl lg:h-40  ">

<section className="flex flex-col lg:flex-row border gap-2  lg:gap-3  justify-items-start   w-full  p-3">
<img src={job.logo} className="-mt-10 lg:mt-0 w-13 h-13   lg:w-20 lg:h-20"/>

<div className="flex flex-col  gap-2 ">

<span className="text-PGreen-400 font-League-Spartan text-md font-bold">{job.company}</span>
<span className="text-NGreen-900 font-League-Spartan font-bold">{job.position}</span>

<span className="flex flex-row  gap-3 text-NGray-400 font-League-Spartan"> 
<p>{job.postedAt} </p>
<p>{job.contract}</p>
<p>{job.location}</p>
</span>
</div>

{/* border gap */}
<div className="border-b w-full border-b-NGray-400  lg:hidden"></div>

</section>

{/* langauges,tools,role,level */}
<div className=" w-full   mb-4 p-2 font-League-Spartan text-md font-bold -mt-3">
<span className="flex  flex-row gap-3  lg:gap-5 border flex-wrap lg:flex-nowrap w-full  lg:justify-end">
<p className="bg-NGreen-50 text-PGreen-400 px-3 py-1 cursor-pointer active:bg-NGreen-900 active:text-PGreen-400 " > {job?.role}</p>

<p className="bg-NGreen-50 text-PGreen-400 px-3 py-1  cursor-pointer active:bg-NGreen-900 active:text-PGreen-400">
{job?.level}
</p>
{job?.languages.map((language) => (
<p className="bg-NGreen-50 text-PGreen-400 px-3 py-1 cursor-pointer active:bg-NGreen-900 active:text-PGreen-400">{language}</p>
))}

{job?.tools.map((tool) => (
<p className="bg-NGreen-50 text-PGreen-400 px-3 py-1 cursor-pointer active:bg-NGreen-900 active:text-PGreen-400 ">{tool}</p>
))}


</span>
</div>

</li>
))}



</>
)
}
export default FilterList