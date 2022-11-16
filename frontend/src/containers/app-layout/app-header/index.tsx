import Link from 'next/link'
import Logo from 'public/svg/logo.svg'
import MenuIcon from 'public/svg/menu.svg'
import { useLayoutStore } from 'src/stores/hooks'

import Navbar from './navbar'

type Props = {
  isLoggedIn?: boolean
}

const AppHeader = ({ isLoggedIn }: Props) => {
  const store = useLayoutStore()

  return (
    <header className="header relative flex h-[60px] lg:h-[90px] justify-between items-center md:pl-10 py-[22px] lg:pr-[70px] px-5">
      <div className="flex justify-between w-full lg:w-fit">
        <div className="lg:w-[154px] lg:h-8 w-[125px] h-[26px]">
          <Link href={'/'}>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="lg:hidden">
          <a className="cursor-pointer" onClick={store.open}>
            <MenuIcon />
          </a>
        </div>
      </div>

      <Navbar />

      {!isLoggedIn && (
        <>
          <div className="flex gap-x-[10px] max-lg:hidden">Đăng nhập</div>
        </>
      )}

      <style jsx>
        {`
          .header {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </header>
  )
}

export default AppHeader
