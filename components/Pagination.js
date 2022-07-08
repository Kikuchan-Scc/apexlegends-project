import React from 'react'

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            {/* 翻页按钮 */}
            <div className='flex justify-center items-center py-2 space-x-2'>
                {pageNumber.map(number => (
                        <div key={number.id} onClick={() => paginate(number)} className='bg-[#1d1d50] bg-opacity-50 h-[42px] rounded-md w-[42px] text-center leading-[42px] text-black cursor-pointer'>
                            <a className='text-white'>{number}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pagination