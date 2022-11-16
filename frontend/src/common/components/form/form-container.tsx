type Props = {
  className?: string
}
export const FormContainer = ({ children, className }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <div className={`form-container ${className}`}>{children}</div>
      <style jsx global>{`
        .form-container .ant-radio-checked .ant-radio-inner {
          border-color: #b3b3b3 !important ;
          border-width: 4px;
        }
        .form-container .ant-radio-checked .ant-radio-inner:after {
          background-color: unset !important;
        }
        .form-container .ant-radio:hover .ant-radio-inner {
          border-color: #b3b3b3;
        }
        .form-container .ant-checkbox-wrapper:hover .ant-checkbox-inner,
        .form-container .ant-checkbox:hover .ant-checkbox-inner,
        .form-container .ant-checkbox-input:focus + .ant-checkbox-inner {
          border-color: #b3b3b3;
        }
        .form-container .ant-checkbox-checked .ant-checkbox-inner {
          background-color: transparent;
          border-color: #b3b3b3;
        }
        .form-container .ant-checkbox-checked::after {
          border-color: #e51862;
        }
        .form-container .ant-checkbox-checked .ant-checkbox-inner:after {
          border-color: #e51862;
        }
        .form-container .secondary .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #b3b3b3;
          border-color: #b3b3b3;
        }
        .form-container .secondary .ant-checkbox-checked::after {
          border-color: #b3b3b3;
        }
        .form-container .secondary .ant-checkbox-checked .ant-checkbox-inner:after {
          border-color: #ffffff;
        }
        .form-container .ant-select:not(.ant-select-customize-input) .ant-select-selector {
          border: 1px solid #b3b3b3;
          border-radius: 3px;
        }

        .form-container .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
          height: 48px;
        }

        .form-container .ant-select-selection-placeholder {
          align-self: center;
          font-size: 14px;
          color: #999999;
          font-weight: 400;
        }

        .form-container input.ant-input {
          padding: 10px 20px;
          border-radius: 3px;
          border-color: #b3b3b3;
        }
        .form-container .ant-input-affix-wrapper {
          border-radius: 3px;
          border-color: #b3b3b3;
        }
        .form-container .ant-input-affix-wrapper > input.ant-input {
          padding: 6px 9px;
        }
        .form-container textarea.ant-input {
          border-radius: 3px;
          border-color: #b3b3b3;
          font-size: 14px;
        }
        .form-container .ant-input-group > .ant-input:first-child,
        .ant-input-group-addon:first-child {
          border-radius: 3px !important;
        }
        .form-container .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
          right: 40px;
          top: 8px;
          position: absolute;
          left: auto;
        }
        .form-container
          .ant-input-search
          > .ant-input-group
          > .ant-input-group-addon:last-child
          .ant-input-search-button {
          border: none;
        }
        .form-container .ant-select-auto-complete {
          border-color: 1px solid #499f9a;
        }
        @media (max-width: 768px) {
          .form-container .ant-select-auto-complete {
            width: 100% !important;
          }
          .form-container .ant-select-selector {
            height: 40px !important;
            border-color: #b3b3b3 !important;
          }
        }
        @media (min-width: 768px) {
          .form-container .ant-select-selector {
            height: 40px !important;
            border-color: #b3b3b3 !important;
          }
          .form-container .ant-select-selector input {
            height: 40px !important;
            border-color: #b3b3b3 !important;
          }
        }
      `}</style>
    </>
  )
}
