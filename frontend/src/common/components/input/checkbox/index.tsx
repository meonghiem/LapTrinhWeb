import { Checkbox, CheckboxProps } from 'antd'

type Props = CheckboxProps & {
  size?: 'small' | 'middle' | 'large'
}
export default function CheckboxComponent({ size = 'small', ...props }: Props) {
  return (
    <>
      <div className="checkbox-component">
        <Checkbox {...props} />

        <style jsx global>
          {`
            .checkbox-component .ant-checkbox-inner {
              width: ${size === 'small' ? '16px' : size === 'middle' ? '20px' : size === 'large' ? '24px' : '16px'};
              height: ${size === 'small' ? '16px' : size === 'middle' ? '20px' : size === 'large' ? '24px' : '16px'};
            }
            .checkbox-component .ant-checkbox-checked .ant-checkbox-inner {
              background-color: #fff !important;
            }
            ${size === 'large' &&
            `.checkbox-component .ant-checkbox-checked .ant-checkbox-inner:after {
              border-color: #3fa9f5 !important;
              width: 9px;
              height: 16px;
              border: 4px solid #fff;
              border-top: 0;
              border-left: 0;
              top: 10.5px;
              left: 4.4px;
            }
            .checkbox-component .ant-checkbox-checked::after {
              border-color: #3fa9f5 !important;
            }
            .checkbox-component .ant-checkbox-inner {
              border: 1px solid #b3b3b3;
              border-radius: 5px;
            }`}
          `}
        </style>
      </div>
    </>
  )
}
