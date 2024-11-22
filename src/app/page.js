import MainNav from "@/components/mainNav";

export default function Home() {
  return (
    <>
    <section className="relative">
    <MainNav/>
    </section>
    <section className="relative w-full h-full min-h-screen pb-10 bg-blue-200" >
    <div className="w-full h-full relative ">
      <div className="flex  flex-row gap-10 p-3 sm:flex-col items-center">
        <section className="w-full lg:w-[50%] flex flex-col md:px-2  p-3 lg:p-10 sm:pt-0 sm:mt-0 order-1 sm:order-2">
          <div className="w-full flex justify-center flex-col h-auto lg:pt-7 sm:pt-0">
            <span className="flex space-x-2 sm:hidden">
              <span className="block w-14  mb-2 dark:border-white border-b-2 border-gray-700"></span>
              <span className="font-medium w-full dark:text-white text-gray-600">
                Get the Job done with...
              </span>
            </span>
            <h1 className="text-6xl dark:text-white mt-5  sm:mt-0 sm:text-4xl lg:text-6xl text-black font-extrabold">
             Laboratory Information Management System
            </h1>            
          </div>
        </section>
        <section className="relative w-full lg:w-[50%] flex items-center justify-end order-2 sm:order-1 sm:w-full">
        <picture>
          <img
            src="/elab.jpg"
            alt="Hero"
            className="h-full w-full object-contain z-10"
            />
            </picture>  
        </section>
      </div>
    </div>
  </section>
  </>
  );
}
