import { Avatar } from 'antd'
import clsx from 'clsx'
import SearchIcon from 'public/svg/search_header_icon.svg'
import { InputText } from 'src/common/components/input/input-text'
type Props = {
  isLoggedIn?: boolean
}

export default function Navbar({ isLoggedIn }: Props) {
  return (
    <nav
      className={clsx('flex items-center justify-between gap-x-10 max-lg:hidden navbar-container', {
        '!gap-x-[30px]': isLoggedIn,
      })}
    >
      {!isLoggedIn ? (
        linksGuest.map(({ href, text }, index) => (
          <a href={href} key={index}>
            {text}
          </a>
        ))
      ) : (
        <>
          {links.map(({ href, text }, index) => (
            <a href={href} key={index}>
              {text}
            </a>
          ))}
          <div>
            <a className="font-bold text-[#3FA9F5] px-5 border-x border-[#3FA9F5]">テキストで学ぶ</a>
            <a className="font-bold text-[#3FA9F5] px-5 border-r border-[#3FA9F5]">オンライン集合学習</a>
          </div>
          <div className="flex items-center justify-end gap-x-[30px] ml-[60px]">
            <InputText
              prefix={<SearchIcon />}
              placeholder="授業を検索する"
              className="border !border-[#B3B3B3B2] !h-[34px] !w-[180px]"
            />
            <Avatar src={'https://joeschmoe.io/api/v1/random/'} size={40} />
          </div>
        </>
      )}

      <style jsx global>
        {`
          .navbar-container .ant-input-affix-wrapper {
            padding-left: 0px !important;
            border: 1px solid rgba(179, 179, 179, 0.7);
            border-radius: 3px;
          }
        `}
      </style>
    </nav>
  )
}

const linksGuest = [
  {
    href: '/employee/attendance',
    text: 'Attendance Tracking',
  },
  {
    href: '',
    text: 'My profile',
  },
  {
    href: '/employee/leave_request',
    text: 'Leave Request',
  },
  {
    href: '',
    text: 'Trang số 4',
  },
  {
    href: '',
    text: 'Trang sô 5',
  },
]

const links = [
  {
    href: '',
    text: 'カテゴリで探す',
  },
  {
    href: '',
    text: '職種・階層から探す',
  },
  {
    href: '',
    text: '先生から探す',
  },
]
