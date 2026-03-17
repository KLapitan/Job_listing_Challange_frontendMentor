import { useEffect,  useState } from "react"
import List from "./List"
import FilterList from "./filterList"

const JobListing = () => {

const [jobList,setJobList]=useState([])

// single filter
// const [selectedFilter ,setSelectedFilter]=useState(null)

// multipleActiveFilter

const [activeFilterItems,setActiveFilterItems ]=useState([])



const [showList,setShowList]=useState(false)






const handleAddFilterItems= (item) => {
  console.log("Clicked tag:", item, typeof item);
setActiveFilterItems((prev) => {
// advoid duplication
if(!prev.includes(item)) return [...prev,item];

return prev
}
)



setShowList(true)

}





useEffect(() => {
  console.log("Active filters updated:", activeFilterItems);
}, [activeFilterItems]);


const handleDeleteFilterItems =(item)=> {

const deleteItem = activeFilterItems.filter(i => i !== item)
setActiveFilterItems(deleteItem)

console.log(activeFilterItems)
}


// todo filtered 


const filteredRoles = activeFilterItems.length === 0 ? jobList :jobList.filter((job) => 
activeFilterItems.some(item => item === job.role || item === job.level))





useEffect(() => {
const fetchJobList = async ()  =>{
  const api_URL=import.meta.env.VITE_JOB_LIST

  try {
    const response = await fetch(api_URL)
    if(!response.ok){
    throw new Error (`Error fetching the data ${response.status}`)
    }

  const data = await response.json()

  setJobList(data)  
  } catch (error) {
  console.error(`Error in collecting data ${error}`)
    
  }

}
fetchJobList()
},[])








return(
<section className="relative">

<div className="absolute bg-white w-auto -top-20 h-20 ">
<ul className="flex flex-row gap-2 flex-wrap w-auto">
{activeFilterItems?.map((item,index) => (
<li key={index} className="border flex flex-row items-center h-8">{item}<button className="border h-8 w-6" onClick={() => handleDeleteFilterItems(item)}>x</button> </li>
))}
</ul>





</div>


<ul className="flex flex-col gap-13 pt-10 p-3 min-w-auto items-center">

  {showList ? 
(<FilterList filterRoles={filteredRoles}/>) : (


<List jobList={jobList}  onHandleItem={handleAddFilterItems} />
)}  


</ul>



</section>



)



}
export default JobListing