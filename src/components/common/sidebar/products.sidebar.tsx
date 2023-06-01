import { Layout, Menu } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { productDasboardRoutes } from '../../../routes/menu.routes'

const { Sider } = Layout

const ProductSiderBar: FC = (): ReactElement => {
  const newProducts = useMatch('/pr/k')
  const liveProducts = useMatch('/pr/')
  const location = useLocation()

  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const handleMenuClick = (e: any) => {
    console.log(typeof e)
    setSelectedKey(e.key)
  }

  const menuItemStyle = {
    borderRight: 'none',
    background: 'none',
    marginLeft: '-17px',
  }

  return (
    <Sider
      width={300}
      className='border-t-2 border-r-2 border-navactive bg-white lg:block hidden'
      style={{
        backgroundColor: 'white',
        // height: 'calc(100vh - 64px)',
        position: 'sticky',
        // top: 64,
      }}
    >
      <div className='p-[10px] mt-[15px]'>
        <h1 className='font-semibold lg:text-lg text-black'>AR 서비스</h1>
      </div>
      <div className='flex flex-col h-full overflow-y-auto'>
        <Link
          to={'/pr/k'}
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
          <h2 className='font-semibold lg:text-lg text-black'>
            AR 서비스 애널리틱스
          </h2>
        </div>
        <div>
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
        </div>
        <div className='p-[10px]'>
          <h1 className='font-semibold lg:text-lg text-black'>구매 전환</h1>
        </div>
      </div>
    </Sider>
  )
}

export default ProductSiderBar
