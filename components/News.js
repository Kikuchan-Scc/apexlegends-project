import React, { useState } from 'react'
import { get, post } from '../encapsulation/http'
import Pagination from './Pagination'
import { useQuery } from 'react-query'
import Image from 'next/image'
import Link from 'next/link'

async function getNews() {
  if (typeof window !== 'undefined') {
    const result = await get('/news')
    return result.data
  }
}

const News = ({ }) => {
  const [currentPage, setCrrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const getNewsQuery = useQuery('getNews', getNews)
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  console.log(getNewsQuery.data?.slice(indexOfFirstPost, indexOfLastPost))

  // 翻页
  const paginate = (pageNumber) => setCrrentPage(pageNumber)

  return (
    <div className='lg:w-[50%] w-full lg:pl-2 lg:pr-5 px-5 text-white font-light'>
      <div className='w-full bg-slate-600 rounded-lg px-2 py-2 lg:mt-0 mt-59'>
        <div className='mb-2'>官网推送</div>
        <div className=' space-y-4'>
          {getNewsQuery.data?.slice(indexOfFirstPost, indexOfLastPost).map(e =>
            <div key={e.id} className='w-full h-[174.48px] bg-slate-700'>
              <div className='flex h-full relative'>
                <div className='w-[40%]'>
                  <Link href={e.link}>
                    <img className='object-cover w-full h-full cursor-pointer' src={e.img} />
                  </Link>
                </div>
                <div className='w-[60%] p-2'>
                  <Link href={e.link}>
                    <p className='cursor-pointer hover:underline hover:underline-offset-1'>{e.short_desc}</p>
                  </Link>
                </div>
                <div className='absolute right-0 bottom-0 p-2'>
                  <Link href={e.link}>
                    <p className='cursor-pointer hover:underline hover:underline-offset-1 opacity-30'>前往EA官网查看</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <Pagination
          postsPerPage={postPerPage}
          totalPost={getNewsQuery.data?.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default News