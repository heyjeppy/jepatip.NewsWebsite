import React, { useEffect, useState } from 'react'

const URLPolitics = `https://newsapi.org/v2/everything?q=politics&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLHealth = `https://newsapi.org/v2/everything?q=health&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLBusiness = `https://newsapi.org/v2/everything?q=business&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLSports = `https://newsapi.org/v2/everything?q=sports&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLHistory = `https://newsapi.org/v2/everything?q=history&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLArts = `https://newsapi.org/v2/everything?q=arts&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLEntertainment = `https://newsapi.org/v2/everything?q=entertainment&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`
const URLReligion = `https://newsapi.org/v2/everything?q=religion&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`

function ArticleSection() {

	const [itemPolitics, setItemPolitics] = useState([])
		
	useEffect(() => {
		fetch(URLPolitics)
		.then(response => response.json())
		.then(data => setItemPolitics(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemHealth, setItemHealth] = useState([])
		
	useEffect(() => {
		fetch(URLHealth)
		.then(response => response.json())
		.then(data => setItemHealth(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemBusiness, setItemBusiness] = useState([])
		
	useEffect(() => {
		fetch(URLBusiness)
		.then(response => response.json())
		.then(data => setItemBusiness(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemSports, setItemSports] = useState([])
		
	useEffect(() => {
		fetch(URLSports)
		.then(response => response.json())
		.then(data => setItemSports(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemHistory, setItemHistory] = useState([])
		
	useEffect(() => {
		fetch(URLHistory)
		.then(response => response.json())
		.then(data => setItemHistory(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemArts, setItemArts] = useState([])
		
	useEffect(() => {
		fetch(URLArts)
		.then(response => response.json())
		.then(data => setItemArts(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemEntertainment, setItemEntertainment] = useState([])
		
	useEffect(() => {
		fetch(URLEntertainment)
		.then(response => response.json())
		.then(data => setItemEntertainment(data.articles))
		.catch(error => console.log(error))
	
	},[])

	const [itemReligion, setItemReligion] = useState([])
		
	useEffect(() => {
		fetch(URLReligion)
		.then(response => response.json())
		.then(data => setItemReligion(data.articles))
		.catch(error => console.log(error))
	
	},[])

  return (
    <>
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
	        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
		        
			{itemPolitics.slice(0,1).map(itemsPolitics => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsPolitics.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Politics</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsPolitics.url} className="font-medium text-md hover:underline dark:text-white">{itemsPolitics.title}</a>
			            </h2>
		        </div>
			))}

			{itemHealth.slice(0,1).map(itemsHealth => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsHealth.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Health</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsHealth.url} className="font-medium text-md hover:underline dark:text-white">{itemsHealth.title}</a>
			            </h2>
		        </div>
			))}

			{itemBusiness.slice(0,1).map(itemsBusiness => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsBusiness.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Business</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsBusiness.url} className="font-medium text-md hover:underline dark:text-white">{itemsBusiness.title}</a>
			            </h2>
		        </div>
			))}

			{itemSports.slice(1,2).map(itemsSports => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsSports.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Sports</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsSports.url} className="font-medium text-md hover:underline dark:text-white">{itemsSports.title}</a>
			            </h2>
		        </div>
			))}

			{itemHistory.slice(1,2).map(itemsHistory => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsHistory.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">History</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsHistory.url} className="font-medium text-md hover:underline dark:text-white">{itemsHistory.title}</a>
			            </h2>
		        </div>
			))}

			{itemArts.slice(1,2).map(itemsArts => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsArts.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Arts</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsArts.url} className="font-medium text-md hover:underline dark:text-white">{itemsArts.title}</a>
			            </h2>
		        </div>
			))}

			{itemEntertainment.slice(1,2).map(itemsEntertainment => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsEntertainment.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Entertainment</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsEntertainment.url} className="font-medium text-md hover:underline dark:text-white">{itemsEntertainment.title}</a>
			            </h2>
		        </div>
			))}

			{itemReligion.slice(1,2).map(itemsReligion => (
				<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96 hover:scale-105" >
					<div className="absolute flex top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"><img src={itemsReligion.urlToImage} className='object-cover' alt="API Image"/> </div>
			            
						<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-yellow-300">Religion</a>
				            <div className="flex flex-col justify-start text-center dark:text-gray-800">
					           
				            </div>
			            </div>
			            <h2 className="z-10 p-5">
				            <a rel="" href={itemsReligion.url} className="font-medium text-md hover:underline dark:text-white">{itemsReligion.title}</a>
			            </h2>
		        </div>
			))}
		                   
	        </div>
        </div>
    </>
  )
}

export default ArticleSection