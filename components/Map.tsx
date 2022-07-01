import React from 'react'
import { get } from '../encapsulation/http'
import { useQuery } from 'react-query'
import Image from 'next/image'

async function getMapRotate() {
  if (typeof window !== 'undefined') {
    const result = await get('/map-rotate')
    return result.data
  }
}

const Map = () => {

  const getMapRotateQuery = useQuery('getMapRotate', getMapRotate)
  // console.log(getMapRotateQuery.data)

  return (
    <div className=' bg-slate-700 font-light'>
      <div className="w-full h-full justify-center">
        <div className='text-center'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mx-auto px-5 '>

            {getMapRotateQuery.isLoading && <div>正在加载玩家档案......</div>}
            {getMapRotateQuery.error && <div>错误</div>}
            {getMapRotateQuery.data &&
              <div>
                <div>
                  <Image className='object-cover' src={getMapRotateQuery.data.arenas.current.asset} width={3000} height={2000} layout="intrinsic" />
                </div>
                <div>
                  <p className='text-white'>当前匹配竞技场地图为：{getMapRotateQuery.data.arenas.current.map}</p>
                  <p className='text-center text-white'>距离结束还有：{getMapRotateQuery.data.arenas.current.remainingTimer}</p>
                  <div className='text-xl text-white'>下一张竞技场地图为：{getMapRotateQuery.data.arenas.next.map}</div>
                </div>
              </div>}


            {getMapRotateQuery.isLoading && <div>正在加载玩家档案......</div>}
            {getMapRotateQuery.error && <div>错误</div>}
            {getMapRotateQuery.data &&
              <div>
                <Image className='object-cover' src={getMapRotateQuery.data.arenas.next.asset} width={3000} height={2000} layout="intrinsic" />
                <div className='text-white'>
                  <p className='text-center'>当前竞技场排位地图为：{getMapRotateQuery.data.arenasRanked.current.map}</p>
                  <p className='text-center text-white'>距离结束还有：{getMapRotateQuery.data.arenasRanked.current.remainingTimer}</p>
                  <div className='text-xl text-white'>下一张竞技场地图为：{getMapRotateQuery.data.arenasRanked.next.map}</div>
                </div>
              </div>}

            {getMapRotateQuery.isLoading && <div>正在加载玩家档案......</div>}
            {getMapRotateQuery.error && <div>错误</div>}
            {getMapRotateQuery.data &&
              <div>
                <Image className='object-cover' src={getMapRotateQuery.data.battle_royale.current.asset} width={3000} height={2000} layout="intrinsic" />
                <div className='text-white'>
                  <p className='text-white'>当前匹配大逃杀地图为：{getMapRotateQuery.data.battle_royale.current.map}</p>
                  <p className='text-center text-white'>距离结束还有：{getMapRotateQuery.data.battle_royale.current.remainingTimer}</p>
                  <div className='text-xl text-white'>下一张大逃杀地图为：{getMapRotateQuery.data.battle_royale.next.map}</div>
                </div>
              </div>}

            {getMapRotateQuery.isLoading && <div>正在加载玩家档案......</div>}
            {getMapRotateQuery.error && <div>错误</div>}
            {getMapRotateQuery.data &&
              <div>
                <Image className='object-cover' src={getMapRotateQuery.data.battle_royale.next.asset} width={3000} height={2000} layout="intrinsic" />
                <div className='text-white'>
                  <p className='text-white'>当前排位大逃杀地图为：{getMapRotateQuery.data.ranked.current.map}</p>
                  <p className='text-center text-white'>距离结束还有：{getMapRotateQuery.data.ranked.current.remainingTimer}</p>
                  <div className='text-xl text-white'>下一赛季排位地图为：{getMapRotateQuery.data.ranked.next.map}</div>
                </div>
              </div>}
          </div>
        </div>
      </div >
    </div >
  )
}

export default Map