import React, { useEffect, useState } from 'react'

const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6f439b829cff4fa4aef12d6c6b52a1b7`

function ContentSection() {
  const [itemContent, setItemContent] = useState([])
		
		useEffect(() => {
			fetch(URL)
			.then(response => response.json())
			.then(data => setItemContent(data.articles))
			.catch(error => console.log(error))
		
		},[])

  return (
   <>
    <div className="px-5 py-10 dark:bg-gray-100 dark:text-gray-800" id="content-section">
      <div  className='container grid grid-cols-12 mx-auto gap-y-6 md:gap-10'>
        <div className='flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3'>
          <div className='flex flex-col space-y-8 md:space-y-12'>
            <div  className='flex flex-col space-y-2'>
              <h3 className='flex items-center space-x-2 dark:text-gray-600'>
                <span className='flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-yellow-300'></span>
                <span className='text-xs font-bold tracking-wider uppercase'>Exclusive</span>
              </h3>
              {itemContent.slice(6,7).map(contentData => (
              <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
              ))}
              <p className='text-xs dark:text-gray-600'> 2min ago.
              {itemContent.slice(6,7).map(contentData => (<a href={contentData.url}className='hover:underline dark:text-yellow-300'> View details</a>))}
              </p>
            </div>
            <div  className='flex flex-col space-y-2'>
              <h3 className='flex items-center space-x-2 dark:text-gray-600'>
                <span className='flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-yellow-300'></span>
                <span className='text-xs font-bold tracking-wider uppercase'>Exclusive</span>
              </h3>
              {itemContent.slice(7,8).map(contentData => (
              <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
              ))}
              <p className='text-xs dark:text-gray-600'> 15min ago.
              {itemContent.slice(7,8).map(contentData => (<a href={contentData.url}className='hover:underline dark:text-yellow-300'> View details</a>))}
              </p>
            </div>
            <div  className='flex flex-col space-y-2'>
                <h3 className='flex items-center space-x-2 dark:text-gray-600'>
                  <span className='flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-yellow-300'></span>
                  <span className='text-xs font-bold tracking-wider uppercase'>Exclusive</span>
                </h3>
                {itemContent.slice(8,9).map(contentData => (
                  <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
                ))}
                <p className='text-xs dark:text-gray-600'> An hour ago.
                  {itemContent.slice(8,9).map(contentData => (<a href={contentData.url}className='hover:underline dark:text-yellow-300'> View details</a>))}
                </p>
            </div>
          </div>

            <div className='flex flex-col w-full space-y-2'>
              <div className='flex w-full h-1 bg-opacity-10 dark:bg-yellow-300'>
                <div className='w-1/2 h-full dark:bg-yellow-300'></div>
              </div>
              <a href="#" className='flex items-center justify-between w-full'>
                <span className='text-xs font-bold tracking-wider uppercase'>See more news updates</span>
                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-yellow-300">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
        </div>
        
        <div className='relative flex col-span-20 bg-no-repeat box-content xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96'>
        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:text-white hover:dark:border-yellow-500 uppercase">Live News</span>
          <iframe width="1093" height="486" src="https://www.youtube.com/embed/oJUvTVdTMyY" title="Watch Sky News" frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className='hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block'>
          <div className='mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-yellow-300'>
            <button type='button' className='pb-5 text-xs font-bold uppercase border-b-2 hover:dark:border-yellow-500'>Top Stories</button>
          </div>
          <div className='flex flex-col divide-y dark:divide-gray-300'>
            
          {itemContent.slice(11,12).map(contentData => (
            <div className='flex px-1 py-4'>
              <img src={contentData.urlToImage} alt="" className='flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500' />
              <div className='flex flex-col flex-grow'>
                <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
                <p className='mt-auto text-xs dark:text-gray-600'> 1 day ago.
                   <a href={contentData.url} className='block dark:text-yellow-300 lg:ml-2 lg:inline hover:underline'>Read more</a>
                </p>
              </div>
            </div>
          ))}

          {itemContent.slice(12,13).map(contentData => (
            <div className='flex px-1 py-4'>
              <img src={contentData.urlToImage} alt="" className='flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500' />
              <div className='flex flex-col flex-grow'>
                <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
                <p className='mt-auto text-xs dark:text-gray-600'> 2 days ago.
                   <a href={contentData.url} className='block dark:text-yellow-300 lg:ml-2 lg:inline hover:underline'>Read more</a>
                </p>
              </div>
            </div>
          ))}


          {itemContent.slice(13,14).map(contentData => (
            <div className='flex px-1 py-4'>
              <img src={contentData.urlToImage} alt="" className='flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500' />
              <div className='flex flex-col flex-grow'>
                <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
                <p className='mt-auto text-xs dark:text-gray-600'> 2 days ago.
                   <a href={contentData.url} className='block dark:text-yellow-300 lg:ml-2 lg:inline hover:underline'>Read more</a>
                </p>
              </div>
            </div>
          ))}

          {itemContent.slice(14,15).map(contentData => (
            <div className='flex px-1 py-4'>
              <img src={contentData.urlToImage} alt="" className='flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500' />
              <div className='flex flex-col flex-grow'>
                <a href={contentData.url} className='font-serif hover:underline'>{contentData.title}</a>
                <p className='mt-auto text-xs dark:text-gray-600'> 2 days ago.
                   <a href={contentData.url} className='block dark:text-yellow-300 lg:ml-2 lg:inline hover:underline'>Read more</a>
                </p>
              </div>
            </div>
          ))}
           

          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default ContentSection