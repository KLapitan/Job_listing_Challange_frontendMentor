import JobListing from "./Job-Listing"

const Layout = () => {
return(
<>
<header>
<div className="h-39 bg-[url('./images/bg-header-mobile.svg')] bg-no-repeat object-cover bg-cover w-full  lg:bg-[url('./images/bg-header-desktop.svg')] ">


</div>
</header>
<main className="w-full h-auto bg-NGreen-50">
<JobListing/>

</main>


</>
)
}
export default Layout