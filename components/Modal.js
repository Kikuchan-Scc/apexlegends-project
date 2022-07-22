import React from 'react'
import Link from 'next/link'

const Modal = ({ closeModal, club }) => {
    console.log(club)
    return (
        <div className='w-full h-[100vh] font-light bg-black bg-opacity-80 fixed z-[9999] flex justify-center items-center'>
            <div className='w-[95vw] h-[95vh] bg-[#1b1b53] overflow-hidden overflow-y-scroll px-2 py-2'>
                <div className='flex justify-end h-[5%]'>
                    <button className='w-10 h-10 flex justify-center items-center' onClick={() => { closeModal(false) }}>
                        <svg t="1657778973125" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3166" width="32" height="32"><path d="M709.492364 742.4 742.4 709.492364 544.907636 512 742.4 314.507636 709.492364 281.6 512 479.092364 314.507636 281.6 281.6 314.507636 479.092364 512 281.6 709.492364 314.507636 742.4 512 544.907636Z" p-id="3167" fill="#ffffff"></path><path d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512c0 282.763636 229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM46.545455 512C46.545455 254.929455 254.929455 46.545455 512 46.545455s465.454545 208.384 465.454545 465.454545-208.384 465.454545-465.454545 465.454545S46.545455 769.070545 46.545455 512z" p-id="3168" fill="#ffffff"></path></svg>
                    </button>
                </div>
                <div className='lg:flex block h-full'>
                    <div className='lg:w-[20%] w-full flex flex-col items-center'>
                        <div className='lg:h-[250px] h-[100px] flex lg:flex-col flex-row justify-center items-center lg:space-y-1 lg:space-x-0 space-x-3'>
                            <div className='space-y-4'>
                                <img className='lg:w-[120px] w-[70px] lg:h-[120px] h-[70px] mx-auto' src={club.data.club.logo} />
                            </div>
                            <div className='text-center '>
                                <div className='lg:text-[25px] text-[20px] text-white text-center'>{club.data.club.name}</div>
                                <div className='text-[15px] text-white text-opacity-30'>[{club.data.club.tag}]</div>
                            </div>
                        </div>
                        <div className='lg:h-[200px] h-[50px] space-y-2 flex lg:flex-col flex-row items-center justify-center lg:space-x-0 space-x-4'>
                            <div className='text-white text-opacity-30 text-center'><nobr className='lg:text-3xl text-2xl text-white'>{club.data.club.groupSize}</nobr>/{club.data.club.maxGroupSize} 成员</div>
                            <div className='flex justify-center items-center space-x-2'>
                                <svg t="1657792485144" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1545" width="30" height="30"><path d="M895.010309 541.690722c-16.494845 0-29.690722-13.195876-29.690721-29.690722V271.835052c0-7.917526-5.938144-13.85567-13.85567-13.855671-87.092784 0-168.907216-33.649485-230.268042-95.670103l-98.969072-98.969072c-3.958763-3.298969-7.917526-3.958763-10.556701-3.958763C495.175258 59.381443 481.979381 46.185567 481.979381 29.690722S495.175258 0 511.670103 0c19.793814 0 37.608247 7.917526 51.463918 21.113402l98.969072 98.969072c50.14433 50.14433 117.443299 77.85567 188.701031 77.85567 40.247423 0 73.237113 32.989691 73.237113 73.237114v240.164948c0.659794 17.154639-12.536082 30.350515-29.030928 30.350516z" fill="#d81e06" p-id="1546"></path><path d="M511.670103 1024c-110.185567 0-213.773196-42.886598-291.628866-120.742268C142.185567 824.742268 99.298969 721.154639 99.298969 610.969072V271.835052c0-40.247423 32.989691-73.237113 73.237113-73.237114 71.257732 0 137.896907-27.71134 188.701031-77.85567l98.969073-98.969072C474.061856 7.917526 492.536082 0 511.670103 0 528.164948 0 541.360825 13.195876 541.360825 29.690722S528.164948 59.381443 511.670103 59.381443c-1.979381 0-5.938144 0.659794-9.896907 3.958763l-98.969072 98.969072C341.443299 224.329897 259.628866 257.979381 172.536082 257.979381c-7.917526 0-13.85567 5.938144-13.85567 13.855671v339.13402c0 94.350515 36.948454 182.762887 103.587629 250.061856 66.639175 66.639175 155.71134 103.587629 250.061856 103.587629 16.494845 0 29.690722 13.195876 29.690722 29.690721s-13.85567 29.690722-30.350516 29.690722z" fill="#d81e06" p-id="1547"></path><path d="M511.670103 1024c-16.494845 0-29.690722-13.195876-29.690722-29.690722s13.195876-29.690722 29.690722-29.690721c94.350515 0 182.762887-36.948454 250.061856-103.587629s103.587629-155.71134 103.587629-250.061856v-98.969072c0-16.494845 13.195876-29.690722 29.690721-29.690722s29.690722 13.195876 29.690722 29.690722v99.628866c0 110.185567-42.886598 213.773196-120.742268 291.628866-78.515464 77.85567-182.103093 120.742268-292.28866 120.742268z" fill="#d81e06" p-id="1548"></path><path d="M511.670103 349.030928l93.690722-93.690722L554.556701 204.536082l-42.886598 42.886598z" fill="#d81e06" p-id="1549"></path><path d="M511.670103 247.42268L216.742268 541.690722v81.814433c0 6.597938 0 12.536082 0.659794 19.13402l294.268041-294.268041V247.42268z" fill="#d81e06" p-id="1550"></path><path d="M511.670103 597.773196L780.206186 329.896907c-1.979381-0.659794-4.618557-0.659794-7.257732-0.659794-27.71134 0-54.103093-5.278351-79.175258-14.515464L511.670103 496.164948v101.608248z" fill="#d81e06" p-id="1551"></path><path d="M511.670103 496.164948L249.731959 758.762887c11.216495 21.773196 25.072165 42.226804 40.907216 60.041237l221.030928-221.030928V496.164948z" fill="#d81e06" p-id="1552"></path><path d="M511.670103 847.175258l294.927835-294.927835V451.298969L511.670103 745.56701z" fill="#d81e06" p-id="1553"></path><path d="M511.670103 745.56701l-138.556701 138.556701c23.752577 12.536082 48.824742 21.773196 74.556701 27.051547l64-64V745.56701z" fill="#d81e06" p-id="1554"></path></svg>
                                <div className='text-white lg:text-2xl text-lg'>{club.data.club.members[0].name}</div>
                            </div>
                        </div>
                        <div className='h-[45px] space-y-2 flex items-center'>
                            <div className='text-white text-opacity-30'>{club.data.club.canInviteToJoin === true ? '可申请加入' : '不可申请加入'}</div>
                        </div>
                    </div>
                    <div className='lg:w-[80%] w-full'>

                        <div className='mt-2 h-[95%]'>
                            <div className=''>
                                <div className='w-[100%]'>
                                    <div className='grid grid-cols-1 px-2'>
                                        {
                                            club.data.club.members.map((e) => (
                                                <div key={e.id} className="w-full ">
                                                    <div className="w-full lg:px-0 px-5">
                                                        <div className=" w-full text-white flex lg:justify-center justify-between">
                                                            <div className="flex text-left lg:w-1/3 w-1/2 leading-[60px] truncate">
                                                                <div>{e.platform === 'PC' ? <svg t="1655445801245" className="icon mt-[21px] mr-2 lg:hidden block w-[20px] h-[20px]" viewBox="0 0 1024 1024" version="1.1" fill='#02a8e4' xmlns="http://www.w3.org/2000/svg" p-id="1562" width="20" height="20"><path d="M430.59456 494.1504 430.59456 81.93536 7.04 141.18528 7.04 494.1504Z" p-id="1563"></path><path d="M465.88672 494.1504 1016.32 494.1504 1016.32 0 465.88672 77.00864Z" p-id="1564"></path><path d="M430.59456 529.44256 7.04 529.44256 7.04 882.41152 430.59456 941.664Z" p-id="1565"></path><path d="M465.88672 529.44256 465.88672 946.59072 1016.32 1023.59168 1016.32 529.44256Z" p-id="1566"></path></svg> : ''}</div>
                                                                <div>[{e.role === 'Creator' ? '创建者' : e.role === 'Admin' ? '管理员' : '成员'}]</div>
                                                                <div>{e.name}</div>
                                                            </div>
                                                            <div className="lg:flex text-left lg:w-1/3 w-1/2 leading-[60px] hidden">{e.platform === 'PC' ? <div className='items-center flex space-x-4'><svg t="1655445801245" className="icon" viewBox="0 0 1024 1024" version="1.1" fill='#02a8e4' xmlns="http://www.w3.org/2000/svg" p-id="1562" width="20" height="20"><path d="M430.59456 494.1504 430.59456 81.93536 7.04 141.18528 7.04 494.1504Z" p-id="1563"></path><path d="M465.88672 494.1504 1016.32 494.1504 1016.32 0 465.88672 77.00864Z" p-id="1564"></path><path d="M430.59456 529.44256 7.04 529.44256 7.04 882.41152 430.59456 941.664Z" p-id="1565"></path><path d="M465.88672 529.44256 465.88672 946.59072 1016.32 1023.59168 1016.32 529.44256Z" p-id="1566"></path></svg><div>{e.platform}</div></div> : ''}</div>
                                                            <div className="flex lg:text-left text-right lg:w-1/3 leading-[60px]">
                                                                <button className='text-white text-opacity-50 hover:text-opacity-100 flex'>
                                                                    <Link className=' text-right' href={'/uid/' + e.uid}>查看玩家</Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal