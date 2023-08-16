/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@google/model-viewer/'
import { notification } from 'antd'
import {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../state'
import {
  purchaseProductApi,
  recordProductApi,
  viewProductApi,
} from '../../state/slices/product.slice'
import { colorsWithBackground } from './utils'

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

const PublicProduct: FC = (): ReactElement => {
  const { id } = useParams()
  const dispatch = useDispatch()
  function Error() {
    notification.error({
      placement: 'top',
      message: <span className=' text-red'>'뭔가 잘못!!'</span>,
      duration: 3,
      key: 'error',
      style: {},
    })
  }

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const [selectedProductName, setSelectedProductName] = useState<string>('')

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (id) {
      dispatch(viewProductApi({ id, Error, publicType: true }) as any)
      dispatch(recordProductApi({ id, Error }) as any)
    }
    //eslint-disable-next-line
  }, [id])

  const { oneProduct } = useSelector((state: RootState) => state.product)

  interface productObj {
    id: number
    name: string
  }

  const [product, setProduct] = useState<Array<productObj>>([])
  const [Index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (oneProduct) {
      const array = oneProduct?.products?.map((obj, index) => {
        return {
          id: index,
          name: obj?.name,
        }
      })
      setProduct(array || [])
    }
  }, [oneProduct])

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (value: number) => {
    setIndex(value)
    setIsOpen(false)
  }

  useEffect(() => {
    if (oneProduct && oneProduct.products && oneProduct?.products?.length > 0) {
      setSelectedProductName(oneProduct?.products[Index]?.name)
    } else {
      setSelectedProductName('옵션 선택')
    }
  }, [oneProduct, Index])

  const Purchase = async () => {
    if (id) {
      dispatch(purchaseProductApi({ id, Error }) as any)
      window.open(oneProduct?.product_link, '_blank')
    }
  }

  return (
    <div className=' h-[100%] bg-white w-[100%] p-5 '>
      <div className='text-center mb-5 text-sm font-light mt-10'>
        <p className=' italic font-light'>Serviced by HelloVR</p>
      </div>
      <div className=' mx-auto  h-[650px] w-[100%] md:w-[60%] xl:w-[30%]  lg:w-[50%]'>
        <model-viewer
          src={`http://192.168.88.122:5000${
            oneProduct &&
            oneProduct.products &&
            oneProduct?.products[Index]?.model_file
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
      <div className=' absolute bottom-2 lg:w-[98%] w-[90%] '>
        {oneProduct &&
          oneProduct.products &&
          oneProduct?.products?.length > 1 && (
            <div className='relative w-full mt-10' ref={dropdownRef}>
              <div
                className='w-full bg-white border rounded p-2 cursor-pointer'
                onClick={toggleDropdown}
              >
                {selectedProductName}
              </div>
              {isOpen && (
                <div
                  className='absolute w-full mt-2 bg-white border rounded border-gray-300 shadow-md z-10 bottom-10'
                  style={{ top: 'auto' }}
                >
                  {product.map((option, index) => (
                    <div
                      key={index}
                      className='p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center'
                      onClick={() => handleChange(option?.id)}
                    >
                      <div className='flex flex-row items-center'>
                        {colorsWithBackground.map((color) => {
                          const productNameLowerCase =
                            option?.name?.toLowerCase()
                          const colorNameLowerCase = color.name.toLowerCase()
                          if (productNameLowerCase === colorNameLowerCase) {
                            return (
                              <div
                                key={`${color.name}-round-div`}
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  backgroundColor: color.background,
                                }}
                              />
                            )
                          }
                          return null
                        })}
                        <div className='pl-5'>{option?.name}</div>
                      </div>
                      <div>
                        {option?.id === Index && (
                          <span className=' text-green-600'>✔️</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        <button
          className={`font-medium  mt-5 text-sm p-[10px]  bg-black text-white  rounded text-center w-[100%]`}
          type='submit'
          onClick={Purchase}
        >
          구입
        </button>
      </div>
    </div>
  )
}

export default PublicProduct
