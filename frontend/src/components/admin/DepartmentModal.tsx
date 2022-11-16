import { Button, Form, Input, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useLayoutStore } from 'src/stores/hooks'

const DepartmentModal = ({ type, fields }) => {
  const { isOpen, close } = useLayoutStore()
  const [form] = Form.useForm()

  type === 'update' && form.setFields(fields)

  const onFinish = (_values: any) => {
    form.resetFields()
  }

  return (
    <Modal open={isOpen} onCancel={close} centered closable={false} footer={null}>
      <h3 className="mb-8 text-xl">{type === 'create' ? 'Create New Department' : 'Update department'}</h3>
      <Form form={form} onFinish={onFinish}>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 items-center">
          <div>
            <p className="text-[#949494] text-xs uppercase">tier</p>
            <Form.Item name="tier">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] text-xs">Used to determine the tier for which the Org Chart displays</p>
          </div>
          <div>
            <p className="text-[#949494] text-xs uppercase">department name</p>
            <Form.Item name="name">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button
            className=" w-1/4 mr-2 default-cus-primary"
            type="default"
            htmlType="button"
            onClick={() => {
              form.resetFields()
              close()
            }}
          >
            Cancel
          </Button>
          <Form.Item className="w-1/4">
            <Button className="w-full" htmlType="submit" type="primary" onClick={close}>
              {type === 'create' ? 'Create' : 'Update'}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default observer(DepartmentModal)
