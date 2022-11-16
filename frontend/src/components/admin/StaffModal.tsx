import { Button, Form, Input, Modal, Select } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { DatePicker } from 'src/common/antd-overided'
import { useLayoutStore } from 'src/stores/hooks'

const StaffModal = ({ type, fields }) => {
  const { isOpen, close } = useLayoutStore()
  const [form] = Form.useForm()

  type === 'update' && form.setFields(fields)

  const onFinish = (_values: any) => {
    form.resetFields()
  }

  return (
    <Modal
      open={isOpen}
      onCancel={() => {
        close()
      }}
      centered
      footer={null}
      width={'90%'}
    >
      <h3 className="mb-2 text-2xl">{type === 'create' ? 'Create new user' : 'Update user'}</h3>
      <h4 className="mb-1 text-base text-[#737373]">Basic info</h4>

      <Form form={form} onFinish={onFinish}>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 max-sm:grid-rows-4 max-sm:grid-cols-2">
          <div>
            <p className="text-[#949494] uppercase text-xs">Email</p>
            <Form.Item name="email">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Name</p>
            <Form.Item name="name">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Gender</p>
            <Form.Item name="gender">
              <Select placeholder="select gender" className="w-full">
                {['male', 'female', 'other'].map((g, idx) => (
                  <Select.Option key={idx} value={g}>
                    {g}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Date of birth</p>
            <Form.Item name="dateOfBirth">
              <DatePicker size="middle" className="w-full" />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Birth Place</p>
            <Form.Item name="birthPlace">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Marital Status</p>
            <Form.Item name="maritalStatus">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Mobile Phone</p>
            <Form.Item name="mobilPhone">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">Address</p>
            <Form.Item name="address">
              <Input />
            </Form.Item>
          </div>
        </div>
        <h4 className="mb-1 mt-2 text-[#737373]">Work info</h4>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 max-sm:grid-rows-6 max-sm:grid-cols-2">
          <div>
            <p className="text-[#949494] uppercase text-xs">Employee ID</p>
            <Form.Item name="employeeId">
              <Input disabled={type === 'update'} />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">user type</p>
            <Form.Item name="userType">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">job title</p>
            <Form.Item name="jobTitle">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">job description</p>
            <Form.Item name="jobDes">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">department</p>
            <Form.Item name="department">
              <Select placeholder="select department" className="w-full">
                {['pm', 'cto', 'other'].map((d) => (
                  <Select.Option key={d}>{d.toUpperCase()}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">skill</p>
            <Form.Item name="skill">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">office</p>
            <Form.Item name="office">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">education</p>
            <Form.Item name="education">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">performance review</p>
            <Form.Item name="performanceReview">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">language</p>
            <Form.Item name="language">
              <Input />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">hired date</p>
            <Form.Item name="hiredDate">
              <DatePicker size="middle" className="w-full" disabled={type === 'update'} />
            </Form.Item>
          </div>
          <div>
            <p className="text-[#949494] uppercase text-xs">account status</p>
            <Form.Item name="accountStatus">
              <Select placeholder="choose status" className="w-full">
                {['active', 'inactive'].map((s) => (
                  <Select.Option key={s}>{s}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button className="mr-2 w-1/6 default-cus-primary" type="default" onClick={close}>
            Cancel
          </Button>
          <Form.Item className="w-1/6">
            <Button className="w-full" type="primary" onClick={close} htmlType="submit">
              {type === 'create' ? 'Create' : 'Update'}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default observer(StaffModal)
