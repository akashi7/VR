/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@google/model-viewer/'
import { Layout, notification } from 'antd'
import { FieldArray, Form, Formik, FormikValues } from 'formik'
import { CSSProperties, FC, ReactElement, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Plus from '../../../assets/images/Plus.png'

import { useParams } from 'react-router-dom'
import { RootState } from '../../../state'
import { handleTogglePage } from '../../../state/slices/hidepage.slice'
import {
  addProductApi,
  deleteProductApi,
  updateJsonProductApi,
  updateProductApi,
  viewProductApi,
} from '../../../state/slices/product.slice'
import { categoryApi, healthApi } from '../../../state/slices/services.slice'
import { handleToggle } from '../../../state/slices/sidebar.slice'

import Minus from '../.././../assets/images/Minus.png'
import Vector from '../.././../assets/images/newVector.png'
import { InputSelect, InputText } from '../../common/input'
import { GlobalModel } from '../../modals'
import EditProduct from '../common/products/edit.product'
const baseURL = import.meta.env.VITE_SERVER_URL

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes
    }

    interface MyElementAttributes {
      src: string
      poster: string
      alt: string
      style: CSSProperties
    }
  }
}

const NewProduct: FC = (): ReactElement => {
  const { id } = useParams()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [toogles, setToogle] = useState<boolean>(false)

  const [formik, setFormik] = useState<FormikValues>()

  const [toogleCancel, setTooglecancel] = useState<boolean>(false)

  const [toogleDelete, setToogleDelete] = useState<boolean>(false)

  function Error() {
    notification.error({
      placement: 'top',
      message: <span className=' text-red'>'뭔가 잘못!!'</span>,
      duration: 3,
      key: 'error',
      style: {},
    })
  }

  const Toogle = (values?: FormikValues) => {
    values && setFormik(values)
    setToogle(!toogles)
    dispatch(handleTogglePage())
  }

  const ToogleDelete = () => {
    setToogleDelete(!toogleDelete)
  }

  const ToogleCancel = () => {
    setTooglecancel(!toogleCancel)
    dispatch(handleTogglePage())
    Edit && setEdit(false)
  }

  useEffect(() => {
    if (id) {
      dispatch(viewProductApi({ id, Error, publicType: false }) as any)
    }
    //eslint-disable-next-line
  }, [id])

  interface files {
    name: string
    model_file: string
  }

  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [firstFile, setFirstFile] = useState<File | null>(null)
  const [clicked, setClicked] = useState<number>(0)
  const [product, setProduct] = useState<Array<files>>([])
  const [category, setCategory] = useState<string>('')
  const [product_link, setProduct_link] = useState<string>('')
  const [health, setHealth] = useState<string>('')
  const [Edit, setEdit] = useState<boolean>(false)

  const { loading: Loading, oneProduct } = useSelector(
    (state: RootState) => state.product
  )

  useEffect(() => {
    if (id && oneProduct) {
      if (oneProduct.products?.length) {
        setProduct(oneProduct.products)
      }
      setCategory(oneProduct?.category)
      setProduct_link(oneProduct?.product_link)
      setHealth(oneProduct?.health_id)
    }
    return () => {
      setProduct([])
      setCategory('')
      setProduct_link('')
      setHealth('')
    }
  }, [id, oneProduct])

  const { toggle } = useSelector((state: RootState) => state.sidebar)
  const { loading, healthData } = useSelector(
    (state: RootState) => state.service
  )

  const initialValues = {
    products: product.length ? product : [],
    category: category ? category : '',
    product_link: product_link ? product_link : '',
    health: health ? health : '',
  }

  function success() {
    toggle && dispatch(handleToggle())
    navigate('/pr')
  }

  const handleUpdate = async () => {
    await onSubmit(formik)
  }

  function UpdateContent() {
    return (
      <div>
        <p>방금 변경한 내용은 바로 제품에 적용됩니다.</p>
        <div className='flex flex-row mt-5 items-center'>
          <div className='w-[45%]'>
            <button
              className='w-full rounded font-medium  text-sm p-[10px] text-center text-black bg-onOK'
              onClick={Toogle}
            >
              취소
            </button>
          </div>
          <div className='w-[50%] pl-[15px]'>
            <button
              className='w-full font-medium rounded  text-sm p-[10px] text-center text-white bg-black'
              onClick={handleUpdate}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    )
  }
  function UpdateCancelContent() {
    return (
      <div>
        <p>취소하시면 방금 수정한 내용은 따로 저장되지 않습니다.</p>
        <div className='flex flex-row mt-5 items-center'>
          <div className='w-[45%]'>
            <button
              className='w-full rounded font-medium  text-sm p-[10px] text-center text-black bg-onOK'
              onClick={ToogleCancel}
            >
              계속 수정하기
            </button>
          </div>
          <div className='w-[50%] pl-[15px]'>
            <button
              className='w-full font-medium rounded  text-sm p-[10px] text-center text-white bg-black'
              onClick={ToogleCancel}
            >
              네
            </button>
          </div>
        </div>
      </div>
    )
  }

  function DeleteSuccess() {
    ToogleDelete()
    navigate('/pr')
  }

  const handledelete = async () => {
    id &&
      dispatch(deleteProductApi({ id, success: DeleteSuccess, Error }) as any)
  }

  function DeleteContent() {
    return (
      <div>
        <p>취소하시면 방금 수정한 내용은 따로 저장되지 않습니다.</p>
        <div className='flex flex-row mt-5 items-center'>
          <div className='w-[45%]'>
            <button
              className='w-full rounded font-medium  text-sm p-[10px] text-center text-black bg-onOK'
              onClick={ToogleDelete}
            >
              취소
            </button>
          </div>
          <div className='w-[50%] pl-[15px]'>
            <button
              className='w-full font-medium rounded  text-sm p-[10px] text-center text-white bg-tred'
              onClick={handledelete}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    )
  }

  function UpdateSuccess() {
    Toogle()
    notification.success({
      placement: 'top',
      message: <span className=' text-hgreen'>성공적으로 수정되었습니다!</span>,
      duration: 3,
      key: 'success',
      style: {
        backgroundColor: 'black',
      },
    })
  }

  const onSubmit = async (values: any): Promise<void> => {
    try {
      let requestData
      if (
        firstFile ||
        values.products.some(
          (product: any) => product.model_file instanceof File
        )
      ) {
        const formData = new FormData()

        for (let i = 0; i < values.products.length; i++) {
          if (id) {
            const newProducts = values.products.filter(
              (product: any) => !product.id
            )
            values.products = newProducts
            formData.append(`products[${i}]name`, values.products[i].name)
            formData.append(
              `products[${i}]model_file`,
              values.products[i].model_file
            )
          } else {
            formData.append(`products[${i}]name`, values.products[i].name)
            if (values.products[i].model_file instanceof File) {
              formData.append(
                `products[${i}]model_file`,
                values.products[i].model_file
              )
            }
          }
        }

        formData.append('product_link', values.product_link)
        formData.append('category', values.category)
        formData.append('health', values.health)

        id && formData.append('id', id)

        requestData = formData
      } else {
        requestData = {
          products: values.products,
          product_link: values.product_link,
          category: values.category,
          health: values.health,
          id: id || undefined, // Prevent sending 'undefined' if id is not present
        }
      }

      if (id && requestData instanceof FormData) {
        await dispatch(
          updateProductApi({
            data: requestData,
            Error,
            success: UpdateSuccess,
          }) as any
        )
      } else {
        if (id) {
          await dispatch(
            updateJsonProductApi({
              Error,
              data: requestData,
              id,
              success: UpdateSuccess,
            }) as any
          )
        } else {
          await dispatch(
            addProductApi({ data: requestData, Error, success }) as any
          )
        }
      }
    } catch (error) {
      console.log({ error })
    }
  }

  let pushFunction: (obj: any) => void

  useEffect(() => {
    dispatch(categoryApi({ Error }) as any)
    dispatch(healthApi({ Error }) as any)
    //eslint-disable-next-line
  }, [])

  const onDrop = (File: any, index: number, formik: any) => {
    setIsDragging(false)
    const newProducts = [...formik.values.products]
    newProducts[index].model_file = File[0]
    formik.setFieldValue('products', newProducts)
    if (!firstFile) {
      setFirstFile(File[0])
    }
  }

  const handleAddProduct = () => {
    setClicked(clicked + 1)
    pushFunction && pushFunction({ name: '', model_file: '' })
  }

  return (
    <Layout
      className={`bg-white h-[100%]  ${
        toogles || toogleCancel ? ' hidden' : ' visible'
      } `}
    >
      {toogles && (
        <GlobalModel
          toogle={toogles}
          Toogle={Toogle}
          title='변경한 내용을 저장하시겠어요?'
          width={400}
          Component={UpdateContent}
        />
      )}
      {toogleCancel && (
        <GlobalModel
          toogle={toogleCancel}
          Toogle={ToogleCancel}
          title='정보 수정을 그만두시겠어요?'
          width={400}
          Component={UpdateCancelContent}
        />
      )}
      {toogleDelete && (
        <GlobalModel
          toogle={toogleDelete}
          Toogle={ToogleDelete}
          title='정말로 이 제품을 삭제하시겠어요?'
          width={400}
          Component={DeleteContent}
        />
      )}
      <div
        className={`left-7 fixed top-[90px] ${!toggle ? 'hidden' : 'block'}`}
      >
        <img
          src={Vector}
          alt='vector'
          onMouseOver={() => dispatch(handleToggle())}
        />
      </div>
      <div className='flex flex-row w-[80%]  mx-auto p-[40px] mb-[40px] h-[100%] '>
        <div className='relative w-[50%] h-[100%] '>
          {id || firstFile ? (
            <model-viewer
              src={
                id
                  ? `${baseURL}${
                      oneProduct?.products?.length &&
                      oneProduct?.products[0]?.model_file
                    }`
                  : firstFile
                  ? URL.createObjectURL(firstFile)
                  : ''
              }
              ios-src=''
              poster={''}
              alt='A 3D model of an astronaut'
              shadow-intensity='1'
              camera-controls
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F8F8F8',
              }}
            ></model-viewer>
          ) : (
            <div className=' bg-[#F8F8F8] h-[100%]'>
              <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <p className='font-bold lg:text-xl text-black text-base'>
                  아직 제품 파일이 등록되지 않았습니다.
                </p>
                <p className='text-[#858585]'>
                  파일을 업로드하시면 여기서 미리보기 화면을 보여드릴게요!
                </p>
              </div>
            </div>
          )}

          <div className=' absolute  bottom-2   right-2  flex justify-around  '>
            <img src={Plus} alt='plus' className='m-1' />
            <img src={Minus} alt='minus' className='m-1' />
          </div>
        </div>
        <div
          className={`relative  ${
            clicked > 2 || (id && Edit) ? 'h-fit ' : 'h-[100%]'
          }   p-[20px] ${toggle ? 'w-[35%]' : 'w-[40%]'}`}
        >
          {id && !Edit ? (
            <EditProduct product={oneProduct} />
          ) : (
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form action='#' className=''>
                    <div className='mb-[20px]'>
                      <h1 className='font-bold lg:text-3xl text-black text-xl'>
                        새 제품 등록하기
                      </h1>
                    </div>
                    <div className='mb-[15px]'>
                      <h1 className='font-bold lg:text-xl text-black text-xl'>
                        제품 기본 정보
                      </h1>
                    </div>
                    <div className='mb-[8px]'>
                      <h1 className='text-tcolor'>제품 메인 카테고리</h1>
                    </div>
                    <div className='w-full'>
                      <InputText name='category' />
                    </div>
                    <div className='mt-[8px] mb-3'>
                      <h1 className='text-tcolor'>제품 판매주소</h1>
                    </div>
                    <div className='w-full'>
                      <InputText name='product_link' />
                    </div>
                    <div className='mt-[15px]'>
                      <h1 className='text-tcolor'>상태 설정</h1>
                    </div>

                    <div className='mt-[25px] flex justify-between items-center'>
                      <h1 className='font-bold lg:text-xl text-black text-xl'>
                        제품 파일 관리
                      </h1>
                      <button
                        className=' text-2xl text-black '
                        onClick={() => handleAddProduct()}
                        type='button'
                      >
                        +
                      </button>
                    </div>
                    <FieldArray name='products'>
                      {({ push, remove, form }) => {
                        pushFunction = push
                        return (
                          <div>
                            {form?.values?.products?.map(
                              (product: any, index: number) => (
                                <div key={index}>
                                  <div
                                    onClick={() => {
                                      remove(index)
                                      setFirstFile(null)
                                      setClicked(clicked - 1)
                                    }}
                                    className='flex flex-row items-center mt-2 cursor-pointer'
                                  >
                                    <p className='text-tcolor'>제품</p>
                                    <p className='pl-2 text-tcolor'>X</p>
                                  </div>
                                  <div className='mt-4'>
                                    <InputText
                                      name={`products[${index}].name`}
                                    />
                                    <Dropzone
                                      multiple={false}
                                      onDrop={(file) =>
                                        onDrop(file, index, form)
                                      }
                                      onDragEnter={() => setIsDragging(true)}
                                      onDragLeave={() => setIsDragging(false)}
                                    >
                                      {({ getRootProps, getInputProps }) => (
                                        <section
                                          className={` relative border-dashed border w-full h-[80px]  mt-2 mb-2 ${
                                            isDragging
                                              ? 'border-blue-500'
                                              : 'border-gray-400'
                                          }`}
                                        >
                                          <div
                                            {...getRootProps({
                                              className:
                                                'text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full',
                                            })}
                                          >
                                            <input {...getInputProps()} />
                                            {product?.model_file ? (
                                              <div className=''>
                                                {product?.model_file?.path ||
                                                  (product?.model_file &&
                                                    product?.model_file.replace(
                                                      '/media/armodels/',
                                                      ''
                                                    ))}
                                              </div>
                                            ) : (
                                              <div className=''>
                                                <p className='text-[#999999]'>
                                                  드래그해서 업로드{' '}
                                                  <span className='text-hblue '>
                                                    또는 파일 찾기
                                                  </span>{' '}
                                                </p>
                                                <p className='mt-2 text-[#999999]'>
                                                  GLB 또는 GLTF (최대 9,999GB)
                                                </p>
                                              </div>
                                            )}
                                          </div>
                                        </section>
                                      )}
                                    </Dropzone>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )
                      }}
                    </FieldArray>
                    {(id || firstFile) && (
                      <div className='mt-[15px] mb-9 bg-black'>
                        <InputSelect
                          name='health'
                          options={healthData.results}
                        />
                      </div>
                    )}

                    <div className='mt-5'></div>
                    <div
                      className={` absolute ${
                        clicked > 2 || id
                          ? 'bottom-[-5] pb-[50px] w-full'
                          : 'bottom-0 right-0 w-[50%] px-[20px] '
                      }     `}
                    >
                      <div className=' w-full flex   flex-row items-center'>
                        {id && (
                          <p
                            className='text-tred w-fit hover:cursor-pointer'
                            onClick={ToogleDelete}
                          >
                            이 제품 삭제
                          </p>
                        )}
                        <button
                          className={`font-medium  ${
                            id ? 'ml-[50px]' : 'ml-0'
                          } text-sm p-[10px] text-center ${
                            id ? 'w-[20%]' : 'w-[30%]'
                          } text-black bg-onOK`}
                          onClick={() => {
                            ToogleCancel()
                          }}
                          type='button'
                        >
                          취소
                        </button>
                        {id ? (
                          <button
                            className={`font-medium ml-[30px] text-sm p-[10px] ${
                              loading
                                ? 'bg-tcolor text-black'
                                : 'bg-black text-white'
                            }  rounded text-center w-[40%]`}
                            onClick={() => Toogle(formik.values)}
                            type='button'
                          >
                            수정중
                          </button>
                        ) : (
                          <button
                            // disabled={!file.length}
                            disabled={Loading}
                            className={`font-medium ml-[10px] text-sm p-[10px] ${
                              loading
                                ? 'bg-tcolor text-black'
                                : 'bg-black text-white'
                            }  rounded text-center w-[40%]`}
                            // onClick={() => navigate('/pr/finished')}
                            type='submit'
                          >
                            등록하기
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          )}
          {id && !Edit ? (
            <div
              className={` ${
                Edit ? ' bottom-[-5] pb-[70px] mt-5' : 'bottom-0'
              }   absolute  right-0 w-[100%] px-[20px]`}
            >
              <button
                className='font-medium  text-sm p-[10px] text-center w-[90%] text-black bg-onOK'
                onClick={() => setEdit(true)}
              >
                정보 수정
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  )
}

export default NewProduct
