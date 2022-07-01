import Link from 'next/link'
import React from 'react'

const navigation = [
    {
        title: "首页",
        name: "M597.333333 768h170.666667v-221.866667l-256-256-256 256V768h170.666667v-170.666667h170.666666v170.666667z m298.666667-213.333333h-42.666667v298.666666H170.666667v-298.666666H128l384-384 384 384z",
        href: '/',
        current: true
    },
    {
        title: "猎杀者排行榜",
        name: "M597.333333 768h170.666667v-221.866667l-256-256-256 256V768h170.666667v-170.666667h170.666666v170.666667z m298.666667-213.333333h-42.666667v298.666666H170.666667v-298.666666H128l384-384 384 384z",
        href: '#',
        current: false
    },
    {
        title: "复制器制作轮换",
        name: "M597.333333 768h170.666667v-221.866667l-256-256-256 256V768h170.666667v-170.666667h170.666666v170.666667z m298.666667-213.333333h-42.666667v298.666666H170.666667v-298.666666H128l384-384 384 384z",
        href: '#',
        current: false
    },
    {
        title: "服务器状态",
        name: "M597.333333 768h170.666667v-221.866667l-256-256-256 256V768h170.666667v-170.666667h170.666666v170.666667z m298.666667-213.333333h-42.666667v298.666666H170.666667v-298.666666H128l384-384 384 384z",
        href: '#',
        current: false
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <>
            {/* 导航 */}
            <div className="sm:h-[100vh] lg:w-[270px] bg-slate-800 sm:fixed" >
                <div className="sm:static bg-slate-800 fixed w-full bottom-0 z-50">
                    <div className='sm:flex justify-center py-5 hidden'>
                        <svg t="1653031262451" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2674" width="80" height="80"><path d="M896 832L128 938.666667V106.666667h768z" p-id="2675" fill="#d81e06" data-spm-anchor-id="a313x.7781069.0.i0" className="selected"></path><path d="M512 170.666667L213.333333 682.666667l85.333334 85.333333 170.666666-128h-110.933333L512 384l153.6 256H554.666667l170.666666 128 85.333334-85.333333z" p-id="2676" fill="#ffffff" data-spm-anchor-id="a313x.7781069.0.i1"></path></svg>
                    </div>
                    <div className="flex flex-col sm:py-5">
                        <ul className='w-full sm:block flex'>
                            {navigation.map((item) => (
                                <Link href={item.href}>
                                    <li className='fill-[#e6e6e6] text-white hover:text-red-600 hover:fill-red-600 w-full h-full py-2 sm:mt-3 sm:hover:border-r-2 sm:hover:border-red-700 flex cursor-pointer justify-center sm:items-center sm:px-5'>
                                        <svg t="1654974949461" className='icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7963" width="50" height="50"><path d={item.name} p-id="7964"></path></svg>
                                        <div className='w-full h-full ml-[20px] lg:block hidden'>
                                            <p className='font-bold text-xl'>{item.title}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}
