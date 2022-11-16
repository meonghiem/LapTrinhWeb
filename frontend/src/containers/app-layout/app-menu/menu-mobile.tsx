import { CloseCircleOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useLayoutStore } from 'src/stores/hooks'

const MenuMobile = () => {
  const store = useLayoutStore()

  return (
    <div
      className={clsx('page-mobile-menu flex justify-end', {
        open: store.isOpen,
      })}
    >
      <div className="page-mobile-menu-wrapper py-3">
        <div className="mb-[60px] flex items-center  px-[30px]">
          {/* <div className="page-mobile-menu-header">
              <UserIcon width={20} height={20} />
              <span className="user-name">{isLoggedIn ? 'あなたの名前' : 'ゲストさん'}</span>
            </div> */}
          <button className="p-3" onClick={store.close}>
            <CloseCircleOutlined width={20} height={20} />
          </button>
        </div>

        <div className="page-mobile-menu-content">
          <ul className="menu-content">
            <li className="menu-item">
              <Link href={'/'}>
                <a className="menu-link flex items-center">
                  <div className="ml-2 text-sm font-medium leading-[20px] text-[#003B54]">{'test'}</div>
                </a>
              </Link>
            </li>

            <li className="menu-item">
              <Link href={'/'}>
                <a className="menu-link flex items-center">
                  <div className="ml-2 text-sm font-medium leading-[20px] text-[#003B54]">{'test'}</div>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="page-mobile-menu-footer">MENU FOOTER</div> */}
      </div>

      <style jsx>
        {`
          .page-mobile-menu {
            position: fixed;
            right: -200%;
            top: 0;
            bottom: 0;
            transition: all 0.3s ease-in-out;
            z-index: 999;
            width: 100%;
          }
          .page-mobile-menu.open {
            right: 0;
          }
          .page-mobile-menu.open::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(51, 51, 51, 0.5);
            pointer-events: none;
          }

          .page-mobile-menu-wrapper {
            width: 90%;
            max-width: 15rem;
            max-height: 100vh;

            z-index: 99;
            position: relative;
            overflow-y: auto;
            background-color: #ffffff;
            padding-bottom: 0.625rem;
          }
          .page-mobile-menu-content {
            width: 100%;
            height: calc(100% - 6.875rem);
          }
          .page-mobile-menu-header {
            background-color: #faf9f8;
            display: flex;
            align-items: center;
            height: 3.125rem;
            padding: 0 1.25rem;
          }
          .user-name {
            margin-left: 0.3125rem;
          }
          .page-mobile-menu-footer {
            height: 3.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.25rem;
            border-top: 1px solid #f8f4ed;
          }
          .footer-social-item {
            margin: 0 0.625rem;
          }
          @media (min-width: 1024px) {
            .page-desktop-menu {
              display: block;
              width: 17.5rem;
            }
            .page-mobile-menu {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default observer(MenuMobile)
