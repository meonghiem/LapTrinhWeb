import { Radio } from 'antd'

export function RadioComponent({ children, ...props }) {
  return (
    <>
      <Radio className="radio-component" {...props}>
        {children}
      </Radio>
      <style jsx global>{`
        .radio-component .ant-radio-inner {
          width: 20px;
          height: 20px;
          border-color: #b3b3b3;
        }
        .radio-component .ant-radio-checked .ant-radio-inner {
          border-color: #3fa9f5 !important ;
          border-width: 5px;
        }
        .radio-component .ant-radio-checked .ant-radio-inner:after {
          background-color: unset !important;
        }
        .radio-component .ant-radio:hover .ant-radio-inner {
          border-color: #3fa9f5;
        }
        .radio-component span.ant-radio + * {
          padding-right: 10px;
          padding-left: 10px;
        }
      `}</style>
    </>
  )
}
