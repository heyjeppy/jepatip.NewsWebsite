import React from 'react'
import Navbar from './Navbar'

const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchBtn.addEventListener(click, NewsUpdates)


function SearchedNews() {

	const [search, setSearch] = useState([])
		
	
			fetch(`https://newsapi.org/v2/everything?page=1&q=${searchInput}&apiKey=6df99241aa05450a86db0b13380e28d6`)
			.then(response => response.json())
			.then(data => setSearch(data.articles))
			.catch(error => console.log(error))

  return (
    <>
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
	        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
		        
			{search.map(searchItems => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={searchItems.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Search</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={searchItems.url} className="font-medium text-md hover:underline dark:text-white">{searchItems.title}</a>
			            </h2>
		        </div>
			))}
            </div>
        </div>

    </>
  )
}

export default SearchedNews