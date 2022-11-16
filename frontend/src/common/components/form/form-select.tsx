import { Select, SelectProps } from 'antd'
import cls from 'clsx'
// import ArrowDown from 'public/images/icon/arrow-down.svg'

export type SelectListType = { key: string | number; value: string | number }

type FormSelectProps<T, V> = SelectProps<V> & {
  selectList: Array<T>
  RenderItem: (item: T, index: number) => React.ReactNode
  width?: string
}

FormSelect.defaultProps = {
  placeholder: '全て',
}

export function FormSelect<T, V>(props: FormSelectProps<T, V>) {
  const { className, selectList, RenderItem, width, ...rest } = props

  return (
    <>
      <Select
        {...rest}
        className={cls('select-container', className)}
        // suffixIcon={
        //   <div className="text-[#333]">
        //     <ArrowDown fill="#333" />
        //   </div>
        // }
        notFoundContent={null}
      >
        {selectList.map(RenderItem)}
      </Select>
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
        @media (max-width: 640px) {
          .select-container > .ant-select-selector {
            height: 40px !important;
          }
        }
        @media (min-width: 640px) {
          .select-container > .ant-select-selector {
            height: 48px !important;
          }
        }
      `}</style>
    </>
  )
}
