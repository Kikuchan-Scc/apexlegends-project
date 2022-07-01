import React, { useState, useEffect } from 'react'
import { get } from '../encapsulation/http'
import { useQuery } from 'react-query'
import Image from 'next/image'

async function getCrafting() {
    if (typeof window !== 'undefined') {
        const result = await get('/crafting')
        return result.data
    }
}

export default function Crafting() {

    const getCraftingQuery = useQuery('getCrafting', getCrafting)
    console.log(getCraftingQuery.data)

    return (
        <div className='lg:w-[50%] w-full font-light'>
            <div className='lg:pl-5 lg:pr-2 px-5'>
                <div className='grid grid-cols-3 gap-4 text-white bg-slate-600 rounded-lg'>
                    <div className='flex flex-col items-center'>
                        <div className="mt-2">制造器每日轮换</div>
                        {getCraftingQuery.data &&
                            <div className='flex py-5 space-x-5'>
                                <div>
                                    <Image src={getCraftingQuery.data[0].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[0].bundleContent[0].cost}
                                    </div>
                                </div>
                                <div className=''>
                                    <Image src={getCraftingQuery.data[0].bundleContent[1].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[0].bundleContent[1].cost}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="mt-2">制造器每周轮换</div>
                        {getCraftingQuery.data &&
                            <div className='flex py-5 space-x-5'>
                                <div className=''>
                                    <Image src={getCraftingQuery.data[1].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[1].bundleContent[0].cost}
                                    </div>
                                </div>
                                <div className=''>
                                    <Image src={getCraftingQuery.data[1].bundleContent[1].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[1].bundleContent[1].cost}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="mt-2">赛季轮换枪械</div>
                        {getCraftingQuery.data &&
                            <div className='flex py-5 space-x-5'>
                                <div className=''>
                                    <Image src={getCraftingQuery.data[2].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[2].bundleContent[0].cost}
                                    </div>
                                </div>
                                <div className=''>
                                    <Image src={getCraftingQuery.data[3].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[20px] h-[20px]' src="https://seikim.com/i/2022/06/14/10qfgeg.png" />
                                        {getCraftingQuery.data[3].bundleContent[0].cost}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div>
                        {getCraftingQuery.isLoading && <div>加载中</div>}
                    </div>
                    <div>
                        {getCraftingQuery.isLoading && <div>加载中</div>}
                    </div>
                    <div>
                        {getCraftingQuery.isLoading && <div>加载中</div>}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
