import ButtonAtd, { ButtonProps } from 'antd/lib/button'
import clsx from 'clsx'

type Props = Omit<ButtonProps, 'type'> & {
  className?: string
  type?:  'primary' | 'success' | 'white' | 'default' | 'link'
  rounded?: 'small' | 'middle' | 'large'
}

const ButtonComponent = ({
  children,
  className,
  type = 'primary',
  size = 'small',
  rounded = 'small',
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <>
      <ButtonAtd
        {...props}
        className={clsx(
          '!font-bold !max-w-[calc(100vw-40px)]',
          className,
          type,
          {
            'w-[120px] h-[46px] !rounded-[5px]': size === 'small',
            'md:w-[260px] md:!h-[50px] !h-11 md:!text-base': size === 'middle',
          },
          {
            '!bg-[#3FA9F5] !text-white': type === 'primary',
            '!bg-[#8CC63F] !border-[#8CC63F] !text-white': type === 'success',
            '!bg-white !text-[#3FA9F5] !border-[#3FA9F5]': type === 'default',
            '!bg-white !text-black !border-white': type === 'white',
            '!bg-white !text-[#3FA9F5] !border-none md:!text-base w-fit h-fit': type === 'link',
          },
          {
            '!rounded-[5px]': rounded === 'small',
            '!rounded-[30px]': rounded === 'middle',
          }
        )}
      >
        {children}
      </ButtonAtd>
    </>
  )
}

export default ButtonComponent
