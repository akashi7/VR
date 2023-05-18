import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import imageOne from '../../assets/images/Image01.png'
import imagethree from '../../assets/images/Image03.png'
import blue from '../../assets/images/LT_Blue_on_4000x4000 1.png'
import green from '../../assets/images/LT_Green_on_4000x4000 1.png'
import pink from '../../assets/images/LT_Pink_on_4000x4000 1.png'
import white from '../../assets/images/LT_White_on_4000x4000 1.png'
import likethis from '../../assets/images/Logo_likethix.png'
import mask from '../../assets/images/Maskgroup.png'
import salysix from '../../assets/images/Saly-26.png'
import vector from '../../assets/images/Vector.png'
import godbrave from '../../assets/images/brave.png'
import clear from '../../assets/images/clear.png'
import beformative from '../../assets/images/formative.png'
import mockup from '../../assets/images/mockup.png'
import salyeight from '../../assets/images/saly-28.png'

const videos =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

const HomePage: FC = (): ReactElement => {
  return (
    <Layout className='w-full h-[100%] bg-white'>
      <div className='p-[8px] lg:p-[0px] xl:p-[30px] '>
        <div className='flex flex-col lg:mt-[-50px] mt-[60px]  w-full lg:h-[720px] lg:flex-row items-center lg:w-[80%] lg:mx-auto  lg:p-[0px] '>
          <div className=' w-full lg:mt-[0px] mt-[15px] md:w-[80%] lg:w-[100%]  xl:w-[60%]  md:pl-[0px]   md:text-center xl:text-left'>
            <div className='lg:mb-[15px] w-full'>
              <p className='font-bold lg:text-3xl text-black md:text-2xl text-base w-full'>
                hello, ar과 함께 하는
              </p>
              <p className='font-bold lg:text-3xl md:text-2xl text-black  text-base w-full'>
                AR 커머스의 시작
              </p>
            </div>
            <div>
              <p className='font-medium lg:text-sm md:text-sm break-all text-xs text-Hblack w-full'>
                이미지, 글만 보고 제품을 상상해서 구매했던 시대는 이제 NO
              </p>
              <p className='font-medium lg:text-sm md:text-sm break-all text-Hblack '>
                AR로 구현한 실제 제품을 3D 입체로 확인할 수 있습니다.
              </p>
            </div>
          </div>
          <div className='w-full md:pl-[0px] p-[10px] lg:p-[0px] lg:flex lg:justify-end'>
            <img src={mockup} alt='mockup' className=' md:w-[100%]  w-[100%]' />
          </div>
        </div>
        <div className='md:mb-[50px] xl:mb-[136px]'></div>
        <div className='flex  flex-col-reverse  mt-[15px] lg:flex-row  items-center w-full lg:w-[80%] lg:mx-auto  lg:p-[0px]'>
          <div className='w-[100%]  md:pl-[0px] lg:text-left  md:text-center xl:text-left'>
            <div className='lg:mb-[10px] mt-[10px] xl:mt-[0px]'>
              <p className='text-hblue'>손쉬운 파일 등록</p>
            </div>
            <div className='lg:mb-[15px] mt-[10px]'>
              <p className='font-bold lg:text-3xl text-xl break-all text-black'>
                내 제품은 내 손으로 직접 관리
              </p>
              <p className='font-bold lg:text-3xl  text-xl break-all text-black'>
                할 수 있도록
              </p>
            </div>
            <div className='mt-[10px]'>
              <p className='font-medium text-sm break-all text-Hblack'>
                AR 관리 페이지를 통해 제품 AR 파일들을 직접 등록하고 손쉽
              </p>
              <p className='font-medium text-sm break-all text-Hblack'>
                게 관리할 수 있습니다.
              </p>
            </div>
          </div>
          <div className='w-[70%] xl:w-[100%] md:w-[60%] lg:flex lg:justify-end md:pl-[0px]  mb-[30px] mt-[20px] lg:mt-[0px]  lg:mb-[0px]'>
            <img
              src={imageOne}
              alt='imageOne'
              className=' md:w-[100%] xl:w-[70%] w-fit '
            />
          </div>
        </div>
        <div className='md:mb-[120px] xl:mb-[236px] mt-[50px] lg:mt-[0px]'></div>
        <div className='flex  flex-col w-full  lg:flex-row items-center lg:w-[80%] lg:mx-auto  lg:p-[0px] '>
          <div className='md:w-[50%] xl:w-[65%] w-[100%]  mb-[50px] lg:mb-[0px]'>
            <div className='flex justify-between '>
              <div className='bg-hgrey w-full m-[5px]  xl:m-[5px] lg:m-[10px] rounded-lg'>
                <img src={blue} alt='blue' />
              </div>
              <div className='bg-hgrblue  w-full m-[5px] xl:m-[5px] lg:m-[10px] rounded-lg'>
                <img src={green} alt='green' />
              </div>
            </div>
            <div className='flex justify-between '>
              <div className='bg-hgreen xl:w-full m-[5px] xl:m-[5px] lg:m-[10px] rounded-lg'>
                <img src={pink} alt='pink' />
              </div>
              <div className='bg-hgray xl:w-full m-[5px] xl:m-[5px] lg:m-[10px] rounded-lg'>
                <img src={white} alt='white' />
              </div>
            </div>
          </div>
          <div className='w-full  mt-[10px] lg:mt-[0px] md:pl-[0px] md:text-center lg:text-left  lg:flex lg:justify-end xl:justify-center  xl:text-left  xl:pl-[150px]'>
            <div>
              <div className='lg:mb-[10px] mb-[10px]'>
                <p className='text-sm text-hpurple break-all'>
                  실제와 가까운 제품 확인을 위해
                </p>
              </div>
              <div className='lg:mb-[15px] mt-[10px] lg:mt-[0px]'>
                <p className='font-bold lg:text-3xl text-xl break-all text-black'>
                  하나의 제품이라도 다른
                </p>
                <p className='font-bold lg:text-3xl text-xl break-all text-black'>
                  사이즈, 칼라, 소재를 모두 담아
                </p>
              </div>
              <div className='mt-[10px] mb-[10px] lg:mt-[0px] lg:mb-[0px]'>
                <p className='font-medium lg:text-sm break-all text-Hblack'>
                  사이즈, 칼라, 소재까지 모두 반영해서 쇼핑몰 고객들이 실제와
                </p>
                <p className='font-medium lg:text-sm break-all text-Hblack'>
                  차이 없는 경험을 할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:mb-[200px] lg:mb-[200px]'></div>
        <div className='flex  flex-col-reverse lg:flex-row items-center lg:w-[80%] lg:mx-auto  lg:p-[0px] '>
          <div className='w-[100%]  xl:text-left  mt-[20px] md:text-center lg:text-left '>
            <div className='lg:mb-[10px] mt-[10px] lg:mt-[0px] '>
              <p className='text-sm text-htgreen'>AR 서비스 애널리틱스</p>
            </div>
            <div className='lg:mb-[15px] mt-[10px] lg:mt-[0px] '>
              <p className='font-bold lg:text-3xl text-black'>
                지금보다 더 나은 쇼핑몰이
              </p>
              <p className='font-bold lg:text-3xl text-black'>될 수 있도록</p>
            </div>
            <div className='mt-[10px] lg:mt-[0px]  mb-[20px] lg:mb-[0px] '>
              <p className='font-medium lg:text-sm text-Hblack break-all'>
                방문, 유입, 구매 전환 등 샵과 제품들에 관한 모든 데이터를 확
              </p>
              <p className='font-medium lg:text-sm text-Hblack break-all'>
                인하고 분석할 수 있습니다
              </p>
            </div>
          </div>
          <div className='w-[50%] xl:w-full md:w-full   md:flex md:justify-center xl:justify-center lg:justify-center md:text-center xl:text-left  md:pl-[0px] mt-[50px] lg:mt-[0px]'>
            <img
              src={imagethree}
              alt='imagethre'
              className=' md:w-[40%] xl:w-[50%] lg:w-[50%] w-full '
            />
          </div>
        </div>
        <div className='md:mb-[120px] xl:mb-[200px] mb-[50px]'></div>
        <div className='mb-[50px] lg:mb-[0px]  lg:p-[0px]  '>
          <p className='text-center font-bold  lg:text-4xl text-xl break-all'>
            hello, ar을 이용하면 어떤 점이 좋아요?
          </p>
        </div>
        <div className='lg:mb-[78px]'></div>
        <div className='flex  flex-col lg:flex-row lg:items-center lg:w-[80%] w-full lg:mx-auto  lg:p-[0px]'>
          <div className='w-[100%]  flex flex-col  '>
            <div className='md:pl-[0px] mb-[60px] lg:mb-[0px] xl:flex xl:justify-center '>
              <div>
                <div className='flex justify-center bg-hroundy rounded-full mx-auto xl:w-[260px] md:w-[290px] w-[66%] xl:h-[240px] h-fit lg:p-[65px] p-[45px] '>
                  <img
                    src={salyeight}
                    alt='salyeight'
                    className='object-cover object-center w-full lg:w-full '
                  />
                </div>
              </div>
            </div>
            <div className='w-full md:pl-[0px] lg:mt-[40px] md:text-center  xl:text-center'>
              <div className='lg:mb-[15px]'>
                <p className='font-bold lg:text-2xl text-black break-all'>
                  복잡한 등록 과정이나 절차 없이 손쉬운 제품
                </p>
                <p className='font-bold lg:text-2xl text-black break-all'>
                  관리를 할 수 있어요.
                </p>
              </div>
              <div>
                <p className='font-medium lg:text-sm text-Hblack break-all'>
                  AR 관리 페이지에서 간단한 제품 정보와 파일만 업로드하면
                  고객님의 쇼핑몰에 붙
                </p>
                <p className='font-medium lg:text-sm text-Hblack break-all'>
                  여넣을 수 있는 코드를 제공해 드립니다.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[100%] flex flex-col   mt-[100px] lg:mt-[0px] md:pl-[20px] xl:pl-[0px]'>
            <div className=' md:pr-[0px] mb-[30px] lg:mb-[0px] xl:flex xl:justify-center'>
              <div>
                <div className='flex justify-center bg-hroundp rounded-full mx-auto xl:w-[260px] md:w-[290px] w-[80%] h-fit xl:h-[240px] lg:p-[45px] p-[45px]'>
                  <img
                    src={salysix}
                    alt='salysix'
                    className='object-cover object-center w-[70%] '
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:pl-[0px] lg:mt-[40px] md:text-center xl:text-center  '>
              <div className='lg:mb-[15px]'>
                <p className='font-bold lg:text-2xl text-black text-base break-all'>
                  AR뿐만 아니라 쇼핑몰 운영에 필요한 모든
                </p>
                <p className='font-bold lg:text-2xl text-black text-base break-all'>
                  데이터를 제공해 드려요.
                </p>
              </div>
              <div>
                <p className='font-medium lg:text-sm text-xs break-all text-Hblack'>
                  단순히 AR 서비스에서 그치지 않고 고객님의 쇼핑몰을 더
                  업그레이드 할 수 있도록
                </p>
                <p className='font-medium lg:text-sm text-xs break-all text-Hblack'>
                  다양한 데이터까지 분석해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:mb-[107px] xl:mb-[237px] mt-[80px] lg:mt-[0px]'></div>
        <div className='lg:w-[80%] xl:w-[80%]  w-full lg:mx-auto'>
          <div className='md:w-[100%] xl:w-[100%]  w-full md:pl-[0px]'>
            <video src={videos} controls></video>
          </div>
        </div>
        <div className='md:mb-[20px] xl:mb-[20px] mb-[40px]'></div>
        <div className='lg:w-[80%] w-full lg:mx-auto  lg:p-[0px]'>
          <div className='lg:w-[50%] w-full md:pl-[0px]  mb-[20px]'>
            <p className='font-bold lg:text-3xl text-xl  text-black'>
              AR 서비스 관리는 이렇게 이용해 보세요!
            </p>
          </div>
          <div className='w-fit md:pl-[0px] '>
            <p className='font-medium lg:text-sm text-xs break-all text-Hblack'>
              ·원하는 제품만 골라서 라이브시킬 수 있고 나머지 제품들은 대기중인
              목록에서 관리할 수 있습니다
            </p>
            <p className='font-medium lg:text-sm text-xs break-all text-Hblack'>
              . 한 제품이라도 여러 소재, 칼라, 재질을 등록할 수 있습니다.
            </p>
          </div>
        </div>
        <div className='lg:mb-[157px] mb-[80px] '></div>
        <div className='lg:w-[80%] lg:mx-auto'>
          <div className='md:w-[100%] xl:w-[100%]  w-full md:pl-[0px] border-solid border-1 border-black '>
            <video src={videos} controls></video>
          </div>
        </div>
        <div className='lg:mb-[20px] mb-[40px] '></div>
        <div className='lg:w-[80%] w-full lg:mx-auto  lg:p-[0px]'>
          <div className='lg:w-[50%] w-full md:pl-[0px]  lg:mb-[20px]  '>
            <p className='font-bold lg:text-3xl text-xl  text-black break-all'>
              AR 서비스 관리는 이렇게 이용해 보세요!
            </p>
          </div>
          <div className='w-fit md:pl-[0px]  '>
            <p className='font-medium lg:text-sm text-Hblack break-all'>
              · 몇 명의 사람들이 얼마나 고객님의 몰에 머물렀는지 분석할 수
              있습니다.
            </p>
            <p className='font-medium lg:text-sm text-Hblack break-all'>
              · 어떤 환경에서 어떤 경로로 고객님의 몰에 방문했는지 확인할 수
              있습니다.
            </p>
            <p className='font-medium lg:text-sm text-Hblack break-all'>
              · 일반적인 구매 전환율뿐만 아니라 AR 서비스로 인해 발생한 비율까지
              확인할 수 있습니다.
            </p>
          </div>
        </div>
        <div className='lg:mb-[240px] mb-[100px] '></div>
        <div className=' lg:p-[0px] w-full'>
          <p className='text-center font-bold lg:text-4xl text-xl break-all'>
            hello, ar과 함께하고 있는 기업들
          </p>
        </div>
        <div className='lg:mb-[50px] mb-[40px]  '></div>
        <div className='md:w-[100%] xl:w-[80%] w-full lg:mx-auto  lg:p-[0px] '>
          <div className='md:pl-[0px] '>
            <div className=' w-full flex  md:justify-evenly flex-wrap md:flex-nowrap  items-center '>
              <div className=' w-[50%] '>
                <img src={godbrave} alt='godbrave' className=' md:w-[60%]' />
              </div>
              <div className='  w-[50%] '>
                <img
                  src={beformative}
                  alt='beformative'
                  className=' md:w-[60%]'
                />
              </div>
              <div className='  w-[50%] '>
                <img src={clear} alt='clear' className=' md:w-[60%]' />
              </div>
              <div className=' w-[50%] '>
                <img src={likethis} alt='likethis' className=' md:w-[60%]' />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:mb-[200px] mb-[100px]'></div>
      </div>
      <div className='bg-hfooter w-full'>
        <div className='lg:relative w-full'>
          <img src={mask} alt='mask' className='w-full h-auto' />
          <div className='lg:absolute  mx-auto top-0 left-0 w-[80%] lg:w-full h-full flex items-center justify-center'>
            <div className='p-5 w-fit'>
              <p className='lg:text-2xl w-full  text-xl font-bold lg:mb-[20px] break-all'>
                더 궁금한 점이 있거나 상담을 원하신다면?
              </p>
              <div className='bg-hblue w-full lg:w-fit justify-center flex lg:flex-row p-[6px] lg:items-center  mx-auto  '>
                <p className='font-medium text-sm text-white break-all'>
                  공지 사항 및 자주 묻는 질문
                </p>
                <img
                  src={vector}
                  alt='vector'
                  className='lg:pl-[7px] pl-[15px] '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
