import { Layout } from 'antd'
import { FC, ReactElement, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom'
import { RootState } from '../../../state'
import { handleToggle } from '../../../state/slices/sidebar.slice'

const { Sider } = Layout

const ProductSiderBar: FC = (): ReactElement => {
  const newProducts = useMatch('/pr/k')
  const liveProducts = useMatch('/pr/')
  const location = useLocation()

  const dispatch = useDispatch()
  const { toggle } = useSelector((state: RootState) => state.sidebar)
  const { toggle: ToogleState } = useSelector((state: RootState) => state.page)

  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const handleMenuClick = (e: { key: SetStateAction<string | null> }) => {
    setSelectedKey(e.key)
  }

  const navigate = useNavigate()

  function Toogle(): void {
    dispatch(handleToggle())
  }

  return (
    <Sider
      width={toggle || ToogleState ? 0 : 300}
      className={`border-t-2 border-r-2 border-navactive bg-white`}
      style={{
        backgroundColor: 'white',
        position: 'sticky',
        visibility: toggle || ToogleState ? 'hidden' : 'visible',
      }}
    >
      <div className='p-[10px] mt-[15px]'>
        <h1 className='font-semibold lg:text-lg text-black'>AR 서비스</h1>
      </div>
      <div className='flex flex-col h-full overflow-y-auto'>
        <Link
          to={'/pr/new'}
          onClick={() => Toogle()}
          className={
            newProducts
              ? 'bg-navactive text-black p-[10px] font-semibold hover:text-black'
              : 'bg-white p-[10px] hover:text-black  font-semibold'
          }
        >
          새 제품 등록
        </Link>
        <Link
          to={'/pr/'}
          className={
            liveProducts
              ? 'bg-navactive text-black p-[10px] hover:text-black font-semibold'
              : 'bg-white p-[10px] hover:text-black font-semibold'
          }
        >
          라이브 중인 제품
        </Link>
        <div className='p-[10px]'>
          <h2
            className='font-semibold lg:text-lg text-black cursor-pointer'
            onClick={() => navigate('/pr/analytics')}
          >
            AR 서비스 애널리틱스
          </h2>
        </div>
        {/* <div>
          <Menu
            mode='inline'
            style={menuItemStyle}
            onClick={handleMenuClick}
            defaultSelectedKeys={[selectedKey || location.pathname]}
            className='font-semibold classMenu'
          >
            {productDasboardRoutes.map((route) => {
              if (route.children) {
                return (
                  <Menu.SubMenu key={route.key} title={route.label}>
                    {route.children.map((child) => (
                      <Menu.Item key={child.key}>
                        <Link to={child.key}>{child.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                )
              }

              return (
                <Menu.Item key={route.key}>
                  <Link to={route.key}>{route.label}</Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </div> */}
        {/* <div className='p-[10px]'>
          <h1 className='font-semibold lg:text-lg text-black'>구매 전환</h1>
        </div> */}
      </div>
    </Sider>
  )
}

export default ProductSiderBar
