import { Input, InputProps } from 'antd'
import clsx from 'clsx'

type Props = InputProps & {
  className?: string
  error?: boolean
  size?: 'small' | 'middle' | 'large'
}
export function InputText({ size = 'small', error, className, ...props }: Props) {
  return (
    <>
      <Input
        {...props}
        status={error ? 'error' : ''}
        className={clsx(className, {
          '!h-10': size === 'small',
          '!h-12': size === 'middle',
        })}
      />
      <style jsx global>
        {`
          .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
          .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
            border: ${size === 'middle' ? '2px' : '1px'} solid #ef3f5e;
          }
        `}
      </style>
    </>
  )
}
