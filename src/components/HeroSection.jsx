import React, { useEffect, useState } from 'react'

const URL = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`

function HeroSection() {

		const [item, setItem] = useState([])
		
		useEffect(() => {
			fetch(URL)
			.then(response => response.json())
			.then(data => setItem(data.articles))
			.catch(error => console.log(error))
		
		},[])

	

return (	
	<>
      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800" id="hero-section">
	      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
		  
		  	{item.slice(0,1).map(items => (		
			  <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group hover:scale-95" >
				  <div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50" > <img src={items.urlToImage} className='object-cover' alt="API Image"/></div>
			        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				        <a rel="REPORT" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-white dark:bg-yellow-300">{items.author}</a>
			        </div>					
					<h2 className="z-10 p-5">
						<a rel="NEWS" href={items.url}  className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-white drop-shadow-lg">{items.title}</a>			
					</h2>
		        </div>
		  	))}

			{item.slice(1,2).map(items => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group group hover:scale-95" >
			        <div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={items.urlToImage} className='object-cover' alt="API Image"/></div>
			          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
					      <a rel="REPORT" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-white dark:bg-yellow-300">{items.author}</a>
			          </div>
			          <h2 className="z-10 p-5">
				          <a rel="NEWS" href={items.url} className="font-medium text-md group-hover:underline text-white drop-shadow-lg"> {items.title}</a>
					  </h2>
		          </div>
			))}

			{item.slice(2,3).map(items => (
		          <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group hover:scale-95">
			          <div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={items.urlToImage} className='object-cover' alt="API Image"/></div>
			            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
							<a rel="REPORT" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-white dark:bg-yellow-300">{items.author}</a>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="NEWS" href={items.url} className="font-medium text-md group-hover:underline text-white drop-shadow-lg">{items.title}</a>
						</h2>
	  	          </div>
			))}

			{item.slice(3,4).map(items => (
		            <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group hover:scale-95" >
			            <div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={items.urlToImage} className='object-cover' alt="API Image"/></div>
			              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
							  <a rel="REPORT" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-white dark:bg-yellow-300">{items.author}</a>
			              </div>
			              <h2 className="z-10 p-5">
				              <a rel="NEWS" href={items.url} className="font-medium text-md group-hover:underline text-white drop-shadow-lg">{items.title}</a>
							</h2>
		              </div>
			))}

			{item.slice(4,5).map(items => (
		              <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group hover:scale-95" >
			              <div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={items.urlToImage} className='object-cover' alt="API Image"/></div>
			                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a rel="REPORT" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-white dark:bg-yellow-300">{items.author}</a>
			                </div>
			                <h2 className="z-10 p-5">
				                <a rel="NEWS" href={items.url} className="font-medium text-md group-hover:underline text-white drop-shadow-lg">{items.title}</a>
							</h2>
		                </div>
			))}

	                </div>
                </div>
    </>
  )
}

export default HeroSection