import React, { useState, useEffect } from 'react'
import { get } from '../encapsulation/http'
import Image from 'next/image'
import Link from 'next/link'
import ClockLoader from 'react-spinners/ClockLoader'
import Router from 'next/router'
import Pagination from './Pagination'

const platformIcon = [
    {
        name: 'origin',
        path: 'M537.088 132.693333a374.613333 374.613333 0 0 1 145.792 39.210667 374.4 374.4 0 0 1 115.456 89.344 388.778667 388.778667 0 0 1 73.173333 126.421333 369.066667 369.066667 0 0 1 19.797334 149.418667 350.890667 350.890667 0 0 1-13.056 78.848 391.424 391.424 0 0 1-28.757334 72.661333 851.541333 851.541333 0 0 1-62.72 102.912 751.36 751.36 0 0 1-75.178666 90.368 793.984 793.984 0 0 1-182.869334 139.989334l-1.578666 1.109333a8.362667 8.362667 0 0 1-4.650667 0.981333 12.501333 12.501333 0 0 1-6.784-4.138666 11.349333 11.349333 0 0 1-2.645333-7.381334c0-1.237333 0.170667-2.517333 0.512-3.626666a7.936 7.936 0 0 1 1.578666-2.645334c11.818667-16.768 21.589333-34.389333 29.269334-52.693333a231.253333 231.253333 0 0 0 15.701333-57.984 5.034667 5.034667 0 0 0-1.621333-3.626667 4.693333 4.693333 0 0 0-3.626667-1.621333 390.613333 390.613333 0 0 1-33.92 2.645333 210.133333 210.133333 0 0 1-33.962667-1.578666 376.234667 376.234667 0 0 1-261.248-128.554667 387.754667 387.754667 0 0 1-73.173333-126.421333 369.578667 369.578667 0 0 1-19.84-149.418667 350.890667 350.890667 0 0 1 13.056-78.848 366.848 366.848 0 0 1 28.8-71.68c18.730667-36.864 39.722667-71.509333 62.677333-103.936A769.450667 769.450667 0 0 1 312.405333 142.08 802.133333 802.133333 0 0 1 495.274667 2.176l1.621333-1.066667a7.978667 7.978667 0 0 1 4.650667-1.066666 12.586667 12.586667 0 0 1 6.741333 4.181333 10.88 10.88 0 0 1 2.645333 7.424 10.410667 10.410667 0 0 1-0.512 3.584 6.997333 6.997333 0 0 1-1.536 2.602667 275.072 275.072 0 0 0-29.312 52.778666c-7.722667 18.474667-12.8 37.76-15.616 57.941334 0 1.408 0.512 2.688 1.536 3.669333a4.992 4.992 0 0 0 3.626667 1.578667c11.178667-1.408 22.485333-2.261333 33.92-2.602667 11.605333-0.384 22.869333 0.128 34.048 1.493333z m-34.432 527.658667a141.653333 141.653333 0 0 0 107.562667-36.48c30.72-27.264 47.317333-61.354667 50.176-102.4a143.232 143.232 0 0 0-36.522667-108.16 140.501333 140.501333 0 0 0-102.4-49.578667 143.36 143.36 0 0 0-108.117333 36.48 140.757333 140.757333 0 0 0-49.664 102.4 144.256 144.256 0 0 0 36.096 108.16c26.794667 30.933333 61.098667 47.573333 102.869333 49.578667z',
    },
    {
        name: 'PS',
        path: 'M383.36 110.762667v748.714666l167.04 53.802667V285.354667c0-29.44 12.970667-49.109333 33.877333-42.282667 27.136 7.722667 32.426667 34.730667 32.426667 64.213333v250.709334c104.149333 50.901333 186.112-0.085333 186.112-134.528 0-138.112-48.042667-199.466667-189.354667-248.618667-55.765333-19.114667-159.061333-50.602667-230.016-64.085333h-0.085333z m198.656 692.992l268.629333-97.066667c30.506667-11.008 35.242667-26.666667 10.496-34.901333-25.002667-8.192-69.845333-5.930667-100.565333 5.248l-179.413333 63.957333v-101.76l10.24-3.626667s51.242667-17.92 124.288-26.24c72.362667-7.68 161.493333 1.237333 231.978666 28.202667 78.848 25.642667 87.082667 62.805333 67.242667 88.405333s-69.205333 44.202667-69.205333 44.202667l-364.544 132.565333v-98.005333l0.853333-0.981333zM77.141333 793.6c-81.066667-23.253333-94.464-71.168-57.685333-99.029333 34.176-24.96 92.117333-44.842667 92.117333-44.842667l239.616-85.888v98.688L179.456 725.333333c-30.08 11.562667-35.2 26.965333-10.197333 35.242667 25.002667 8.32 69.845333 6.4 99.968-5.12L351.914667 725.333333v88.490667c-5.162667 1.237333-10.922667 1.877333-16.682667 3.114667-82.688 14.122667-170.453333 8.362667-257.578667-20.437334l-0.512-2.901333z',
    },
    {
        name: 'XBOX',
        path: 'M175.01902 897.407626A509.738454 509.738454 0 0 0 512.000213 1023.999573a510.293121 510.293121 0 0 0 337.15186-126.591947c80.0853-81.578633-184.149257-371.583845-337.15186-487.12513-152.831936 115.541285-417.237159 405.546498-336.981193 487.12513z m476.159802-614.655744c106.666622 126.335947 319.3172 440.02115 259.242559 550.911771A509.525121 509.525121 0 0 0 1024 512.170453a509.866454 509.866454 0 0 0-152.319937-364.202515s-1.152-0.938666-3.498665-1.791999a35.157319 35.157319 0 0 0-11.989328-1.919999c-25.258656 0-84.693298 18.517326-205.013248 138.495942zM155.904362 146.175939c-2.431999 0.853333-3.498665 1.749333-3.669332 1.791999A510.122454 510.122454 0 0 0 0.000427 512.170453c0 121.770616 42.581316 233.514569 113.535952 321.407866-59.775975-111.14662 152.703936-424.575823 259.413226-550.826437-120.31995-120.021283-179.882592-138.453276-205.055915-138.453275a30.93332 30.93332 0 0 0-11.989328 1.962665v-0.085333zM512.000213 151.50927S386.346932 77.994634 288.21364 74.495969c-38.527984-1.407999-62.037307 12.586661-64.895973 14.463994C314.837629 27.562655 412.117588 0 511.317547 0H512.000213c99.583959 0 196.479918 27.562655 288.682547 88.959963-2.901332-1.962666-26.239989-15.871993-64.853307-14.463994C637.696161 77.994634 512.000213 151.25327 512.000213 151.25327v0.256z',
    }
]

export default function Banner({ }) {

    const [isShow, setIsShow] = useState(0);
    const listStatus = (item, index) => {
        setIsShow(index)
        console.log(index)
        console.log(item)
    }
    //搜索跳转
    const [searchText, setSearchText] = useState('')
    const handlePlayerSearch = (e) => {
        Router.push({
            pathname: '/profiles/',
            query: {
                id: searchText
            }
        }, '/profiles/' + searchText)
    }
    //地图轮换
    const [mapRotate, setMapRotate] = useState([]);
    useEffect(() => {
        get('/map-rotate').then((response) => {
            setMapRotate(response)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    //制造器
    const [crafting, setCrafting] = useState([])
    useEffect(() => {
        get('http://72.44.68.173:3001/api/crafting').then((response) => (
            setCrafting(response)
        )).catch((err) => {
            console.log(err)
        })
    },[])
    //新闻
    const [currentPage, setCrrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)
    const [news, setNews] = useState([])
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    console.log(news.data?.slice(indexOfFirstPost, indexOfLastPost))

    useEffect(() => {
        get('/news').then((response) => {
            setNews(response)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    // 翻页
    const paginate = (pageNumber) => setCrrentPage(pageNumber)
    //loading状态
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        if (news.data !== undefined && crafting.data !== undefined && mapRotate.data !== undefined) {
            setLoading(false)
        }
    })

    return (
        
        <div className="font-light">
            <div className='flex flex-col bg-cover items-center pt-[20px] w-full' >
            {/* style={{ backgroundImage: "url(.././static/images/olps.png" }} */}
                <div className=''>
                    <div className='mx-auto flex sm:flex-row flex-col items-center'>
                        <div>
                            <svg t="1653031262451" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2674" width="100" height="100"><path d="M896 832L128 938.666667V106.666667h768z" p-id="2675" fill="#d81e06" data-spm-anchor-id="a313x.7781069.0.i0" className="selected"></path><path d="M512 170.666667L213.333333 682.666667l85.333334 85.333333 170.666666-128h-110.933333L512 384l153.6 256H554.666667l170.666666 128 85.333334-85.333333z" p-id="2676" fill="#ffffff" data-spm-anchor-id="a313x.7781069.0.i1"></path></svg>
                        </div>
                        <div>
                            <div className='sm:text-4xl text-3xl text-white text-center'>APEX LEGENDS追踪器</div>
                            <div className='text-white text-opacity-70 text-center'>详细查看玩家数据与世界排行榜</div>
                        </div>
                    </div>
                </div>
                {/* 搜索框 */}
                <div className='flex items-center space-x-10 w-full sm:mt-0 mt-5'>
                    <div className='w-full'>
                        <div className=" rounded-l-md rounded-r-md">
                            <ul className="flex items-center justify-center">
                                {
                                    platformIcon.map((item, index) => (
                                        <li key={item.id} id={item.name} onClick={(e) => listStatus(item, index)} className={isShow === index ? 'px-[50px] py-5 fill-[#fff] rounded-md' : 'px-[50px] py-5 fill-[#fff] opacity-50 rounded-md'}>
                                            <svg t="1652518841850" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10950" width="25" height="25"><path d={item.path} p-id="10951"></path></svg>
                                        </li>
                                    ))
                                }
                            </ul>
                            <form className='w-full flex px-5'>
                                <input type="search" onChange={e => setSearchText(e.target.value)} className="outline-none rounded-l-md py-5 pl-5 w-full bg-[#000012] bg-opacity-80 text-white text-opacity-80 sm:h-[100px] h-[60px]" placeholder="查找Origin账户" />
                                <Link href={'/profiles/' + searchText}>
                                    <button onClick={handlePlayerSearch} className='flex justify-center items-center rounded-r-md sm:w-[120px] w-[80px] bg-[#3a3a8a] bg-opacity-80 text-white'>
                                        <svg t="1654981222879" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11183" width="35" height="35"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" fill="#ffffff" p-id="11184"></path></svg>
                                    </button>
                                </Link>
                            </form>
                        </div>
                        <div>
                            <div className='text-white text-xs opacity-80 text-center py-5'>请不要通过Steam名和Switch名查找</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 制造 地图 新闻 */}
            {loading ?
                <div className='flex flex-col h-[100vh] justify-center items-center space-y-5'>
                    <ClockLoader size={100} color={'#1e293b'} />
                    <div className='text-2xl text-slate-800'>Loading...</div>
                </div>
                :
                <div>
                    <div className="w-full h-full justify-center">
                        <div className='text-center'>
                            <div className='grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mx-auto px-5 '>
                                <div className='rounded-md bg-[#000012] bg-opacity-80'>
                                    <div>
                                        {
                                            mapRotate.data === undefined ? '' : <Image className='object-cover' src={mapRotate?.data.arenas.current.asset} width={3000} height={2000} layout="intrinsic" />
                                        }
                                    </div>
                                    <div className='text-white py-5'>
                                        <p className='text-center'>当前匹配竞技场地图为：{mapRotate.data?.arenas.current.map}</p>
                                        <p className='text-center text-white'>距离结束还有：{mapRotate.data?.arenas.current.remainingTimer}</p>
                                        <div className='text-xl text-white'>下一张竞技场地图为：{mapRotate.data?.arenas.next.map}</div>
                                    </div>
                                </div>

                                <div className='rounded-md bg-[#000012] bg-opacity-80'>
                                    {
                                        mapRotate.data === undefined ? '' : <Image className='object-cover' src={mapRotate?.data.arenas.next.asset} width={3000} height={2000} layout="intrinsic" />
                                    }
                                    <div className='text-white py-5'>
                                        <p className='text-center'>当前竞技场排位地图为：{mapRotate.data?.arenasRanked.current.map}</p>
                                        <p className='text-center text-white'>距离结束还有：{mapRotate.data?.arenasRanked.current.remainingTimer}</p>
                                        <div className='text-xl text-white'>下一张竞技场地图为：{mapRotate.data?.arenasRanked.next.map}</div>
                                    </div>
                                </div>

                                <div className='rounded-md bg-[#000012] bg-opacity-80'>
                                    {
                                        mapRotate.data === undefined ? '' : <Image className='object-cover' src={mapRotate?.data.battle_royale.current.asset} width={3000} height={2000} layout="intrinsic" />
                                    }

                                    <div className='text-white py-5'>
                                        <p className='text-white'>当前匹配大逃杀地图为：{mapRotate.data?.battle_royale.current.map}</p>
                                        <p className='text-center text-white'>距离结束还有：{mapRotate.data?.battle_royale.current.remainingTimer}</p>
                                        <div className='text-xl text-white'>下一张大逃杀地图为：{mapRotate.data?.battle_royale.next.map}</div>
                                    </div>
                                </div>

                                <div className='rounded-md bg-[#000012] bg-opacity-80'>
                                    {
                                        mapRotate.data === undefined ? '' : <Image className='object-cover' src={mapRotate?.data.battle_royale.next.asset} width={3000} height={2000} layout="intrinsic" />
                                    }

                                    <div className='text-white py-5'>
                                        <p className='text-white'>当前排位大逃杀地图为：{mapRotate.data?.ranked.current.map}</p>
                                        <p className='text-center text-white'>距离结束还有：{mapRotate.data?.ranked.current.remainingTimer}</p>
                                        <div className='text-xl text-white'>下一赛季排位地图为：{mapRotate.data?.ranked.next.map}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="lg:flex mt-5 sm:pb-5 pb-[80px] lg:space-y-0 space-y-5">
                        {/* crafting */}
                        <div className='lg:w-[50%] w-full font-light'>
                            <div className='lg:pl-5 lg:pr-2 px-5'>
                                <div className='grid grid-cols-3 gap-4 text-white bg-[#000012] bg-opacity-80 border-opacity-80 rounded-lg'>
                                    <div className='flex flex-col items-center'>
                                        <div className="mt-2">制造器每日轮换</div>
                                        <div className='flex py-5 space-x-5'>
                                            <div>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[0].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[0].bundleContent[0].cost}
                                                </div>
                                            </div>
                                            <div className=''>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[0].bundleContent[1].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[0].bundleContent[1].cost}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div className="mt-2">制造器每周轮换</div>

                                        <div className='flex py-5 space-x-5'>
                                            <div className=''>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[1].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[1].bundleContent[0].cost}
                                                </div>
                                            </div>
                                            <div className=''>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[1].bundleContent[1].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[1].bundleContent[1].cost}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div className="mt-2">赛季轮换枪械</div>

                                        <div className='flex py-5 space-x-5'>
                                            <div className=''>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[2].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[2].bundleContent[0].cost}
                                                </div>
                                            </div>
                                            <div className=''>
                                                {
                                                    crafting.data === undefined ? '' : <Image src={crafting.data[3].bundleContent[0].itemType.asset} width={80} height={80} layout="intrinsic" />
                                                }
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[20px] h-[20px]' src=".././static/images/crafting_materials.png" />
                                                    {crafting.data === undefined ? '' : crafting.data[3].bundleContent[0].cost}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* crafting */}
                        {/* News */}
                        <div className='lg:w-[50%] w-full lg:pl-2 lg:pr-5 px-5 text-white font-light lg:mt-0'>
                            <div className='w-full rounded-lg px-2 py-2 lg:mt-0 bg-[#000012] bg-opacity-80'>
                                <div className=' space-y-4'>
                                    {news.data?.slice(indexOfFirstPost, indexOfLastPost).map(e =>
                                        <div key={e.id} className='w-full h-[174.48px] bg-[#3a3a8a] bg-opacity-50'>
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
                                                        <p className='cursor-pointer hover:underline opacity-50 hover:opacity-100'>前往EA官网查看</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <Pagination
                                    postsPerPage={postPerPage}
                                    totalPost={news.data?.length}
                                    paginate={paginate}
                                />
                            </div>
                        </div>
                        {/* News */}
                    </div>
                </div>}
        </div>
    )
}
