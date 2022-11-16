import { Select, SelectProps } from 'antd'
import cls from 'clsx'
import ArrowDown from 'public/svg/arrow_down.svg'

export type SelectListType = { key: string | number; value: string | number }

type SelectComponentProps<V> = SelectProps<V> & {
  width?: string
  height?: string
}

SelectComponent.defaultProps = {
  placeholder: '全て',
  height: '48px',
}

export function SelectComponent<V>(props: SelectComponentProps<V>) {
  const { className, width, height, ...rest } = props

  return (
    <>
      <Select {...rest} className={cls('select-container', className)} suffixIcon={<ArrowDown />} />
      <style jsx global>{`
        .select-container {
          width: 100%;
          ${width ? `width: ${width}` : ''}
        }
        .select-container > .ant-select-single .ant-select-selector .ant-select-selection-item,
        .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
          padding: 0;
          line-height: 30px;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
        }
        .select-container > .ant-select-arrow {
          transform: translate(-50%, -50%);
          margin-top: 0;
        }
        .ant-select-selection-item {
          display: inline-flex;
          align-items: center;
        }
        .select-container > .ant-select-selector {
          border: 1px solid #a5c8bc !important;
          width: 100%;
        }
        @media (max-width: 768px) {
          .select-container > .ant-select-selector {
            height: 40px !important;
            height: ${height ?? '48px'} !important;
          }
        }
        @media (min-width: 768px) {
          .select-container .ant-select-selector {
            height: ${height} !important;
          }
        }
      `}</style>
    </>
  )
}
