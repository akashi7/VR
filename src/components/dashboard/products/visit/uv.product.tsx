/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
import '@google/model-viewer/'
import { Layout, notification } from 'antd'
import moment from 'moment'
import {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import chart from '../../../../assets/images/ChartTwo.png'
import { RootState } from '../../../../state'
import {
  productAnalyticsApi,
  productListApi,
} from '../../../../state/slices/product.slice'
import { CheckBox } from '../../../common/input'
import Paginator from '../../../common/paginator'
import UvCards from '../../common/products/uv.cards'
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

const UvProduct: FC = (): ReactElement => {
  const dispatch = useDispatch()

  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }

  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  )

  const { listData, analytics } = useSelector(
    (state: RootState) => state.product
  )

  useEffect(() => {
    if (selectedProductId) {
      dispatch(
        productAnalyticsApi({ id: selectedProductId.toString(), Error }) as any
      )
    }
    //eslint-disable-next-line
  }, [selectedProductId])

  const productContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      productContainerRef.current &&
      !productContainerRef.current.contains(event.target as Node)
    ) {
      setSelectedProductId(null)
    }
  }

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
    return () => {
      setSelectedProductId(null)
    }
  }, [])

  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    dispatch(productListApi({ page: currentPage, Error }) as any)
    //eslint-disable-next-line
  }, [currentPage])

  const options = [
    { label: '전체', value: 'all' },
    { label: '온도조절기', value: 'air_conditioner' },
  ]

  return (
    <Layout className=' h-[100%] p-[18px] bg-white '>
      <div
        className='mx-auto md:w-[100%] xl:w-[80%] '
        ref={productContainerRef}
      >
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold  text-black text-xl'>
              AR 서비스 애널리틱스
            </h1>
          </div>
          <div className='flex flex-row items-center '>
            <div>
              <select
                className={
                  'inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500 '
                }
              >
                <option className='text-tcolor'>Select option</option>
                {options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='mt-[30px]'>
          <UvCards analytics={analytics} />
        </div>
        <div className='flex justify-between items-center mt-[30px]'>
          <div>
            <h1 className='font-bold  text-black text-xl'>애널리틱스 그래프</h1>
          </div>
        </div>
        <div className='mt-[50px]'>
          <img src={chart} alt='graph' className='w-full' />
        </div>
        <div className='flex flex-row items-center mt-[35px]'>
          <div className='flex flex-row items-center '>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>방문자 수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>신규 방문자 수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>구매전환율(%)</p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[25px] mb-5'>
          <div>
            <h1 className='font-bold  text-black text-xl'>제품 리스트</h1>
          </div>
        </div>
        <div className='bg-[#FAFAFA]'>
          <div className=' border-t-2'></div>
          <p className='mt-3 mb-3 font-bold'>제품명</p>
          <div className=' border-b-2'></div>
        </div>
        <div className='mt-[6px]  mb-[70px]'>
          <div className='mt-[25px] mb-10'>
            <div
              className={`${
                listData?.results?.length === 0
                  ? ' relative'
                  : 'flex flex-wrap '
              }w-full  `}
            >
              {listData?.results?.length === 0 ? (
                <div className='bg-[#FAFAFA] mb-[150px]'>
                  <div className=' border-t-2'></div>
                  <p className='mt-3 mb-3 font-bold text-center text-[#999999]'>
                    아직 데이터가 없습니다.
                  </p>
                  <div className=' border-b-2'></div>
                </div>
              ) : (
                listData?.results?.map((product) => (
                  <div
                    key={product?.id}
                    className={`flex flex-row mt-[10px] w-[50%] cursor-pointer ${
                      selectedProductId === product?.id
                        ? 'border  bg-slate-200'
                        : ''
                    }`}
                    onClick={() => setSelectedProductId(product?.id)}
                  >
                    <div className='w-[20%]'>
                      <model-viewer
                        key={product?.id}
                        src={`${baseURL}${
                          product &&
                          product.products &&
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
                      <p className='text-tcolor mt-1 mb-1 '>
                        {product &&
                          product.products &&
                          product?.products[0]?.name}
                      </p>
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
                            (product &&
                              product.products &&
                              product?.products[0]?.file_size) ??
                            0
                          ).toFixed(2)}
                          -{' '}
                          {(product &&
                            product.products &&
                            product?.products[0]?.file_type) ??
                            'Unknown'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div className='mb-5'>
                <Paginator
                  total={listData?.count}
                  setCurrentPage={setCurrentPage}
                  totalPages={Math.round((listData?.count ?? 0) / 10)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UvProduct
