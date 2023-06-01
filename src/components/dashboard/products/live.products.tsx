import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { productList } from '../utils'

const LiveProducts: FC = (): ReactElement => {
  return (
    <Layout className='xl:p-[0px] p-[18px] bg-white'>
      <div className='mx-auto xl:w-[80%] lg:w-[80%] md:w-[90%] w-full md:mt-[40px] mt-0 xl:mt-0 overflow-auto mb-10'>
        <div className='mb-[20px]'>
          <h1 className='font-bold lg:text-3xl text-black text-xl'>
            라이브 중인 제품
          </h1>
          <h1 className='lg:mt-[10px] lg:text-lg text-tcolor text-base mt-[10px]'>
            라이브할 수 있는 10개의 상품 중 3개를 사용하고 있어요!
          </h1>
        </div>
        <div
          className={`${
            productList.length === 0 ? ' relative' : 'flex flex-wrap '
          }w-full `}
        >
          {productList.length === 0 ? (
            <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <div>
                <h1>아직 등록된 제품이 없습니다.</h1>
                <button className='w-full mt-[10px] rounded-md font-medium text-sm p-[10px] text-center text-white bg-black'>
                  새 제품 등록하러 가기
                </button>
              </div>
            </div>
          ) : (
            productList.map((product) => (
              <div
                key={product.id}
                className='flex flex-row mt-[10px]  w-[50%]'
              >
                <div>
                  <img src={product.picture} alt='imaz' />
                </div>
                <div className='pl-[20px]'>
                  <p className='text-tcolor'>{product.title}</p>
                  <p className='text-black text-sm font-bold'>
                    {product.subTitle}
                  </p>
                  <div className='flex flex-row items-center'>
                    <p className='text-tcolor bg-mybcc p-[3px]'>
                      {product.status}
                    </p>
                    <p className='text-black pl-[10px]'>{product.date}</p>
                  </div>
                  <p className='text-tcolor'>{product.fileSize}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

export default LiveProducts
