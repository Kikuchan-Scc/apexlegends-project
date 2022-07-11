import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import { get } from '../../api/http'
import ClockLoader from 'react-spinners/ClockLoader'
import Search from '../../components/Search'
import Footer from "../../components/Footer"
import { useRouter } from 'next/router'
import moment from 'moment'

//moment.js中文配置
moment.locale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY年MM月DD日',
        LLL: 'YYYY年MM月DD日Ah点mm分',
        LLLL: 'YYYY年MM月DD日ddddAh点mm分',
        l: 'YYYY-M-D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        const hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
})

export default function Profiles() {
    moment.locale('zh-cn')

    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const { playerId } = router.query
    //选手资料
    const [player, setPlayer] = useState('')
    const [playerData, setPlayerData] = useState([])
    const [match, setMatch] = useState([])
    const [origin, setOrigin] = useState([])
    useEffect(() => {
        setLoading(true)
        if (router.asPath !== router.route && playerData !== undefined) {
            setPlayer(playerId)
            get(`/player/` + playerId).then((response) => {
                setPlayerData(response)
                get(`/match-history/` + response.data?.global.uid).then((response) => {
                    console.log(response)
                    setMatch(response)
                })
                get(`/origin/` + playerId).then((response) => {
                    setOrigin(response)
                }).catch((err) => {
                    console.log(err)
                })
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })

        }
    }, [router])
    console.log(player)
    console.log(match)
    console.log(origin)

    return (
        <div>
            <Nav />
            <div className='lg:ml-[270px] h-[100vh] sm:ml-[90px] ml-0'>
                {/* {isLoading && router.asPath !== router.route ? <IsLoad /> : <div></div>} */}
                {loading ?
                    <div className='flex flex-col h-full justify-center items-center space-y-5'>
                        <ClockLoader size={100} color={'#1e293b'} />
                        <div className='text-2xl text-slate-800'>Loading...</div>
                    </div>
                    :
                    <div className='sm:pb-0 pb-[65px]'>
                        <Search />
                        <div className='py-10 px-4 h-[200px]'>
                            <div className='h-full font-light flex bg-[#363682] bg-opacity-50 rounded-md items-center justify-center'>
                                <div className='flex justify-center items-center space-x-5 text-white'>
                                    {origin.data === undefined ?
                                        <svg t="1657307222035" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2259" width="80" height="80"><path d="M513.536 628.6336c101.6832 0 280.8832 38.7072 310.8864 193.7408 77.5168-77.5168 124.928-185.9584 124.928-305.0496 0-241.152-194.6624-435.8144-435.8144-435.8144S77.7216 277.0944 77.7216 517.2224c0 119.0912 47.4112 227.6352 124.928 306.0736 30.0032-154.9312 209.2032-194.6624 310.8864-194.6624z m0-439.7056c112.3328 0 204.3904 91.0336 204.3904 204.3904 0 112.3328-91.0336 204.3904-204.3904 204.3904a203.776 203.776 0 0 1-204.3904-204.3904c0.1024-112.4352 92.0576-204.3904 204.3904-204.3904z m0 0" p-id="2260"></path><path d="M515.4816 1006.8992c-65.8432 0-129.8432-12.9024-189.952-38.4-58.1632-24.576-110.2848-59.8016-155.136-104.5504A485.56032 485.56032 0 0 1 65.8432 708.8128c-25.6-60.2112-38.5024-124.1088-38.5024-189.952 0-65.8432 12.9024-129.8432 38.4-189.952 24.576-58.1632 59.8016-110.2848 104.5504-155.136 44.8512-44.8512 96.9728-79.9744 155.136-104.5504C385.6384 43.6224 449.536 30.72 515.4816 30.72c65.8432 0 129.8432 12.9024 189.952 38.4 58.1632 24.576 110.2848 59.8016 155.136 104.5504 44.8512 44.8512 79.9744 96.9728 104.5504 155.136C990.6176 389.0176 1003.52 452.9152 1003.52 518.8608c0 65.8432-12.9024 129.8432-38.4 189.952-24.576 58.1632-59.8016 110.2848-104.5504 155.136a485.56032 485.56032 0 0 1-155.136 104.5504 484.39296 484.39296 0 0 1-189.952 38.4z m0-936.8576c-60.6208 0-119.3984 11.8784-174.6944 35.2256a447.76448 447.76448 0 0 0-142.6432 96.1536A444.42624 444.42624 0 0 0 101.9904 344.064a446.70976 446.70976 0 0 0-35.2256 174.6944c0 60.6208 11.8784 119.3984 35.2256 174.6944 22.6304 53.4528 54.9888 101.4784 96.1536 142.6432 41.1648 41.2672 89.1904 73.6256 142.6432 96.1536 55.296 23.3472 114.0736 35.2256 174.6944 35.2256 60.6208 0 119.3984-11.8784 174.6944-35.2256 53.4528-22.6304 101.4784-54.9888 142.6432-96.1536 41.2672-41.1648 73.6256-89.1904 96.1536-142.6432 23.3472-55.296 35.2256-114.0736 35.2256-174.6944 0-60.6208-11.8784-119.3984-35.2256-174.6944a447.76448 447.76448 0 0 0-96.1536-142.6432 444.42624 444.42624 0 0 0-142.6432-96.1536 447.44704 447.44704 0 0 0-174.6944-35.2256z m0 0" p-id="2261"></path></svg>
                                        :
                                        <img className='w-[80px] h-[80px] rounded-[50%]' src={origin.data.avatar} />
                                    }
                                    <div>
                                        <div className='text-4xl '>{playerData.data?.global.name}</div>
                                        <div>
                                            <div className='flex items-center'>
                                                <div>Level:{playerData.data?.global.level}</div>
                                                <svg t="1655456600524" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6023" width="30" height="30"><path d="M896 659.2 896 659.2c-6.4 0-19.2-25.6-32-38.4-19.2-32-38.4-76.8-83.2-76.8l0 0c-44.8 0-64 38.4-83.2 76.8 0 12.8-12.8 32-19.2 38.4C672 640 659.2 556.8 652.8 512 633.6 390.4 620.8 307.2 563.2 307.2l0 0c-51.2 0-64 83.2-83.2 204.8-6.4 44.8-19.2 121.6-32 153.6-12.8-12.8-19.2-32-25.6-38.4C409.6 588.8 390.4 544 345.6 544l0 0c-44.8 0-64 38.4-83.2 76.8C256 640 243.2 659.2 236.8 659.2c-12.8 0-25.6-25.6-32-38.4C192 588.8 172.8 544 128 544l0 0c-19.2 0-32 12.8-32 32 0 19.2 12.8 32 32 32l0 0c6.4 0 19.2 25.6 32 38.4 19.2 32 38.4 76.8 83.2 76.8l0 0c44.8 0 64-38.4 83.2-76.8 6.4-19.2 19.2-38.4 32-38.4C358.4 601.6 371.2 627.2 384 640c19.2 32 38.4 76.8 83.2 76.8l0 0c51.2 0 64-83.2 83.2-204.8C556.8 473.6 563.2 416 569.6 384c12.8 38.4 19.2 96 25.6 134.4 19.2 121.6 32 204.8 83.2 204.8l0 0c44.8 0 64-38.4 83.2-76.8 6.4-19.2 19.2-38.4 32-38.4 12.8 0 19.2 25.6 32 38.4 19.2 32 38.4 76.8 83.2 76.8l0 0c12.8 0 25.6-12.8 25.6-32C928 672 915.2 659.2 896 659.2z" p-id="6024" fill="#ffffff"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <svg t="1655445801245" className="icon" viewBox="0 0 1024 1024" version="1.1" fill='#02a8e4' xmlns="http://www.w3.org/2000/svg" p-id="1562" width="50" height="50"><path d="M430.59456 494.1504 430.59456 81.93536 7.04 141.18528 7.04 494.1504Z" p-id="1563"></path><path d="M465.88672 494.1504 1016.32 494.1504 1016.32 0 465.88672 77.00864Z" p-id="1564"></path><path d="M430.59456 529.44256 7.04 529.44256 7.04 882.41152 430.59456 941.664Z" p-id="1565"></path><path d="M465.88672 529.44256 465.88672 946.59072 1016.32 1023.59168 1016.32 529.44256Z" p-id="1566"></path></svg>
                                </div>
                            </div>
                        </div>
                        {/* main */}
                        <div className='lg:flex px-2 font-light sm:py-5 py-0'>
                            <div className='lg:w-[40%] w-full px-2 space-y-5'>
                                <div className=' w-full bg-[#363682] bg-opacity-50 rounded-md border-white'>
                                    <div className='grid grid-cols-2 justify-center items-center py-5'>
                                        <div className='text-white'>
                                            <div className='text-center'>大逃杀</div>
                                            <div className='w-full flex justify-center py-3'>
                                                <img className='w-[70px]' src={playerData.data?.global.rank.rankImg} />
                                            </div>
                                            <div className='text-center'>{playerData.data?.global.rank.rankScore} RP</div>
                                            <div>
                                                <p className='text-center text-red-700'>#{playerData.data?.global.rank.ladderPosPlatform}</p>
                                            </div>
                                        </div>
                                        <div className='text-white'>
                                            <div className='text-center'>竞技场</div>
                                            <div className='w-full flex justify-center py-3'>
                                                <img className='w-[70px]' src={playerData.data?.global.arena.rankImg} />
                                            </div>
                                            <div className='text-center text-white'>{playerData.data?.global.arena.rankScore} AP</div>
                                            <div>
                                                {playerData.data?.global.arena.ladderPosPlatform === -1 ? <p className='text-center text-white'>无排名</p> : <p className='text-center text-red-700'>{player.data?.global.arena.ladderPosPlatform}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-full bg-[#363682] bg-opacity-50 rounded-md'>
                                    <div className='py-5 px-5 text-white'>
                                        {playerData.data?.realtime.isOnline === 0 ?
                                            <div className='flex items-center'>
                                                <div className='w-5 h-5 flex justify-center items-center'>
                                                    <div className='w-2 h-2 rounded-[50%] bg-red-700 shadow-sm shadow-red-700'></div>
                                                </div>
                                                <p className='opacity-30'>离线</p>
                                            </div>
                                            :
                                            <div className=''>
                                                <div className='flex items-center'>
                                                    <div className='w-5 h-5 flex justify-center items-center'>
                                                        <div className='w-2 h-2 rounded-[50%] bg-green-500 shadow-sm shadow-green-500'></div>
                                                    </div>
                                                    <p className='opacity-30'>在线</p>
                                                    {playerData.data?.realtime.currentState === "inLobby" ? <p className='opacity-30'>（大厅中</p> : playerData.data?.realtime.currentState === "inMatch" ? <p className='opacity-30'>（比赛中</p> : ''}
                                                    <p className=' opacity-30'>{playerData.data?.realtime.currentStateAsText.slice(10, 15)}）</p>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                                {playerData.data?.club == null || playerData.data?.club.name === null ?
                                    <div className=' bg-[#363682] bg-opacity-50 rounded-md w-full p-5 flex items-center space-x-5 relative'>
                                        <div className=' text-white opacity-30'>
                                            未搜索到相关俱乐部信息
                                        </div>
                                    </div>
                                    :
                                    <div className=' bg-[#363682] bg-opacity-50 rounded-md w-full p-5 flex items-center space-x-5 relative'>
                                        <div>
                                            <img className='w-[100px]' src={playerData.data?.club.logo} />
                                        </div>
                                        {
                                            console.log(playerData)
                                        }
                                        <div className=' text-white'>
                                            <div className='text-lg py-1'>俱乐部</div>
                                            <div className='text-lg'>[{playerData.data?.club.tag}]</div>
                                            <div className=' text-[20px] opacity-50'>{playerData.data?.club.name}</div>
                                        </div>
                                        <div className='text-white opacity-50 absolute top-2 right-5'>
                                            详细信息
                                        </div>
                                    </div>

                                }
                            </div>
                            <div className='lg:w-[60%] w-full lg:px-0 px-2 lg:space-y-0 space-y-5 sm:pb-0 pb-5'>
                                {/* 选项卡 */}
                                <div className='font-light w-full h-[50px] lg:mt-0 mt-5 bg-[#363682] bg-opacity-50 rounded-md grid grid-cols-4 justify-center items-center text-center text-white'>
                                    <div className='h-full leading-[50px]'>
                                        <p>比赛历史</p>
                                    </div>
                                </div>
                                <div className='lg:h-[30px]'>

                                </div>
                                {/* 卡片 */}
                                <div className=' bg-[#363682] bg-opacity-50 rounded-md overflow-hidden '>
                                    {match.data?.map(e =>
                                        <div key={e.id} className='flex my-4 mx-5 rounded-2xl'>
                                            <div className='w-[30%]'>
                                                <div className='w-full'>
                                                    <img src={playerData.data?.legends.all[e.legendPlayed].ImgAssets.icon} />
                                                </div>
                                            </div>
                                            <div className='w-[70%]'>
                                                <div className='py-5 text-white'>
                                                    <div className=' text-white font-light'>
                                                        <div className='lg:text-2xl text-xl '>
                                                            {e.gameMode === 'BATTLE_ROYALE' ? '大逃杀排位赛' : '娱乐模式'}
                                                        </div>
                                                        <div className=' space-y-2 lg:text-base sm:text-[15px] text-[10px] '>
                                                            <div className='lg:text-xl text-lg'>
                                                                {e.legendPlayed}
                                                            </div>
                                                            <div className='flex space-x-20'>
                                                                <div>
                                                                    本场加分：{e.BRScoreChange}
                                                                </div>
                                                                <div>
                                                                    分数变化：{e.BRScore}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                经验值：+{e.estimatedLevelProgress} XP
                                                            </div>
                                                            <div>
                                                                比赛时间：
                                                                {moment(e.gameEndTimestamp * 1000).fromNow()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                }

            </div>
        </div>
    )


}