import clsx from 'clsx'

type Props = {
  title: string
  className?: string
}

const PageTitle = ({ title, className }: Props) => {
  return <h1 className={clsx(className, 'leading-[170%] my-[60px] text-center')}>{title}</h1>
}

export default PageTitle
