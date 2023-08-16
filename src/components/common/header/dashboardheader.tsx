import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashNavBar: FC = (): ReactElement => {
  const navigate = useNavigate()
  const [openDrawer, setDrawer] = useState<boolean>(false)

  function ToogleDrawer(): void {
    setDrawer(!openDrawer)
  }

  const CloseIcon = (
    <CloseOutlined
      style={{ position: 'absolute', top: 20, right: 10, color: 'black' }}
    />
  )

  function navigates(type?: string): void {
    openDrawer && ToogleDrawer()
    navigate(`/${type}`)
  }

  // const Navigate=(type?: string):void=>{
  //   const dispatch = useDispatch()
  // }

  return (
    <>
      <div className='w-full flex justify-between  items-center   p-[5px]'>
        <div
          className='text-base font-bold hover:cursor-pointer'
          onClick={() => navigates('pr')}
        >
          hello, ar
        </div>
        <div className='flex lg:justify-between items-center '>
          <div className='text-sm m-[8px] hidden lg:block hover:cursor-pointer'>
            고객 센터
          </div>
          <div
            className='text-sm m-[8px] hidden lg:block hover:cursor-pointer'
            onClick={() => navigates('sd')}
          >
            관리 분석
          </div>
          <div
            className='text-sm m-[8px] hidden lg:block hover:cursor-pointer'
            onClick={() => navigates('pr')}
          >
            마이 페이지
          </div>
          <MenuOutlined
            className='text-xl m-[8px] lg:hidden hover:cursor-pointer'
            onClick={ToogleDrawer}
          />
        </div>
      </div>
      {openDrawer && (
        <Drawer
          placement='right'
          open={openDrawer}
          onClose={ToogleDrawer}
          width={'250px'}
          closeIcon={CloseIcon}
          headerStyle={{ border: 'none' }}
        >
          <div className='flex flex-col items-left mt-[10px] '>
            <div
              className='text-sm m-[8px] hover:cursor-pointer'
              onClick={() => navigates('login')}
            >
              로그인
            </div>
            <div className='text-sm m-[8px] hover:cursor-pointer'>
              관리 분석
            </div>
          </div>
        </Drawer>
      )}
    </>
  )
}

export default DashNavBar
