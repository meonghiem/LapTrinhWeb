import { Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import Link from 'next/link'
import ArrowRightIcon from 'public/svg/arrow_right.svg'
export type BreadcrumbItem = {
  text: string
  url: string
}

type Props = {
  breadcrumb: BreadcrumbItem[]
}
const Breadcrumb = ({ breadcrumb }: Props) => {
  return (
    <>
      <Header className="!bg-white !h-10 md:!h-[42px] flex items-center !px-0">
        <Row justify="space-between">
          {breadcrumb ? (
            <ul className={'container flex items-center overflow-auto gap-x-5'}>
              {breadcrumb.map((item, index) => {
                return (
                  <li key={index} className="flex flex-shrink-0 items-center">
                    {index < breadcrumb.length - 1 && (
                      <>
                        <Link href={item.url}>
                          <a className="note font-bold tracking-wider ">{item.text}</a>
                        </Link>
                        {breadcrumb.length > 1 && (
                          <span className="ml-5">
                            <ArrowRightIcon />
                          </span>
                        )}
                      </>
                    )}
                    {index === breadcrumb.length - 1 && (
                      <span className="note font-medium tracking-wider text-[#999999]">{item.text}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          ) : (
            <div></div>
          )}
        </Row>
      </Header>
    </>
  )
}

export default Breadcrumb
