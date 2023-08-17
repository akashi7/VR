/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
import '@google/model-viewer/'
import { Layout, notification } from 'antd'
import moment from 'moment'
import { CSSProperties, FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../state'
import { productListApi } from '../../../state/slices/product.slice'
import { handleToggle } from '../../../state/slices/sidebar.slice'
const baseURL = import.meta.env.VITE_SERVER_URL

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes
    }
    interface MyElementAttributes {
      key?: number
      src: string
      poster: string
      alt: string
      style: CSSProperties
    }
  }
}

const LiveProducts: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function Error() {
    notification.error({
      placement: 'top',
      message: <span className=' text-red'>'뭔가 잘못!!'</span>,
      duration: 3,
      key: 'error',
      style: {},
    })
  }

  useEffect(() => {
    dispatch(productListApi({ Error }) as any)
    //eslint-disable-next-line
  }, [])

  const { listData } = useSelector((state: RootState) => state.product)
  const { toggle } = useSelector((state: RootState) => state.sidebar)

  const navigates = () => {
    dispatch(handleToggle())
    navigate('/pr/new')
  }

  return (
    <Layout className='xl:p-[0px] p-[18px] bg-white'>
      <div className='mx-auto xl:w-[80%] lg:w-[80%] md:w-[90%] w-full md:mt-[40px] mt-0 xl:mt-0 overflow-auto mb-10'>
        <div className='mb-[20px]'>
          <h1 className='font-bold lg:text-3xl text-black text-xl'>
            라이브 중인 제품
          </h1>
          <h1 className='lg:mt-[10px] lg:text-lg text-tcolor text-base mt-[10px]'>
            라이브할 수 있는 {listData?.results.length}개의 상품 중{' '}
            {listData?.results.length}
            개를 사용하고 있어요!
          </h1>
        </div>
        <div
          className={`${
            listData?.results.length === 0 ? ' relative' : 'flex flex-wrap '
          }w-full `}
        >
          {listData?.results.length === 0 ? (
            <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <div>
                <h1>아직 등록된 제품이 없습니다.</h1>
                <button
                  className='w-full mt-[10px] rounded-md font-medium text-sm p-[10px] text-center text-white bg-black'
                  onClick={() => navigates()}
                >
                  새 제품 등록하러 가기
                </button>
              </div>
            </div>
          ) : (
            listData?.results?.map((product) => (
              <div
                key={product?.id}
                className='flex flex-row mt-[10px] w-[50%] cursor-pointer'
                onClick={() => navigate(`/pr/edit/${product?.id}`)}
              >
                <div className='w-[20%]'>
                  <model-viewer
                    key={product?.id}
                    src={`${baseURL}${
                      product?.products?.length &&
                      product?.products[0]?.model_file
                    }`}
                    ios-src=''
                    poster={''}
                    alt=''
                    shadow-intensity='1'
                    camera-controls
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#F8F8F8',
                    }}
                  ></model-viewer>
                </div>
                <div className='ml-10'>
                  <p className='text-tcolor mt-1 mb-1 '>{product?.category}</p>
                  <p className='text-black text-sm font-bold'>
                    {product?.product_link}
                  </p>
                  <div className='flex flex-row items-center mt-1 mb-1 '>
                    <p
                      className={` bg-mybcc p-[3px] ${
                        product.health === 'Live'
                          ? 'text-[#15BD66]'
                          : 'text-tcolor'
                      }`}
                    >
                      {product?.health}
                    </p>
                    <p className='text-black pl-[10px]'>
                      {moment(product?.created_at).format('YYYY.MM.DD')}부터
                      라이브
                    </p>
                  </div>
                  <div>
                    <p className='text-tcolor'>
                      {(
                        (product?.products &&
                          product?.products[0]?.file_size) ??
                        0
                      ).toFixed(2)}
                      -{' '}
                      {(product?.products && product?.products[0]?.file_type) ??
                        'Unknown'}
                    </p>
                  </div>
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
