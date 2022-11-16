import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Select, Table } from 'antd'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import StaffModal from 'src/components/admin/StaffModal'
import AppLayout from 'src/containers/app-layout'
import { useLayoutStore } from 'src/stores/hooks'

interface staffInformationInterface {
  key: string
  employeeId: string
  employee: string
  department: string
  accountStatus: string
  role: string
  hiredDate: string
}

const staffInformation: staffInformationInterface[] = [
  {
    key: '1',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'Admin',
    hiredDate: '01/01/2022',
  },
  {
    key: '2',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'Admin',
    hiredDate: '01/01/2022',
  },
  {
    key: '3',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'Accountant',
    hiredDate: '01/01/2022',
  },
  {
    key: '4',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'Accountant',
    hiredDate: '01/01/2022',
  },
  {
    key: '5',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'User',
    hiredDate: '01/01/2022',
  },
  {
    key: '6',
    employeeId: '11111111',
    employee: 'Long',
    department: 'LOng',
    accountStatus: 'active',
    role: 'User',
    hiredDate: '01/01/2022',
  },
]

type AccountRole = {
  title: string
  active: boolean
}

const accountRoleArr: AccountRole[] = [
  { title: 'All Staff', active: true },
  { title: 'Admin', active: false },
  { title: 'Accountant', active: false },
  { title: 'User', active: false },
]

const Dashboard = () => {
  const [accountRole, setAccountRole] = useState<AccountRole[]>(accountRoleArr)
  const [staffInfo, setStaffInfo] = useState<staffInformationInterface[]>(staffInformation)
  const [type, setType] = useState('')
  const [fields, _setFields] = useState([
    { name: 'email', value: 'duong@gmail.com' },
    { name: 'name', value: 'duong' },
    { name: 'gender', value: 'male' },
    { name: 'dateOfBirth', value: dayjs(Date.now()) },
  ])
  const { open } = useLayoutStore()

  const handleCreateStaff = () => {
    setType('create')
    open()
  }

  const handleUpdateStaff = () => {
    setType('update')
    open()
  }

  const columns = [
    { title: 'Employee Id', dataIndex: 'employeeId', key: 'employeeId' },
    { title: 'Employee', dataIndex: 'employee', key: 'employee' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Account Status', dataIndex: 'accountStatus', key: 'accountStatus' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Hired Date', dataIndex: 'hiredDate', key: 'hiredDate' },
    {
      key: 'action',
      render() {
        return (
          <Button type="primary" onClick={handleUpdateStaff}>
            Update
          </Button>
        )
      },
    },
  ]

  const changeRoleHandler = (account: AccountRole) => {
    if (account.title === 'All Staff') {
      setStaffInfo(staffInformation)
      setAccountRole(accountRoleArr)
      return
    }
    const filteredAccount = staffInformation.filter((s) => {
      return s.role === account.title
    })
    setStaffInfo(filteredAccount)
    const updateAccountRole = accountRole
      .map((item) => {
        return { ...item, active: false }
      })
      .map((item) => {
        if (item.title === account.title) {
          return { ...item, active: true }
        }
        return { ...item, active: false }
      })
    setAccountRole(updateAccountRole)
  }

  return (
    <div className="admin px-4 pt-4">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 max-md:grid-cols-4 max-sm:grid-cols-2 items-end">
        <div className="text-[#004b8f]">
          <p>Employee ID</p>
          <Input className="default-cus-primary" />
        </div>
        <div className="text-[#004b8f]">
          <p>Employee</p>
          <Input className="default-cus-primary" />
        </div>
        <div className="text-[#004b8f]">
          <p>Department</p>
          <Select placeholder="Select department" className="w-full default-cus-primary">
            {['PM', 'HR'].map((s, id) => {
              return <Select.Option key={id}>{s}</Select.Option>
            })}
          </Select>
        </div>
        <div className="text-[#004b8f]">
          <p>Account status</p>
          <Select placeholder="Select status" className="w-full default-cus-primary">
            {['Active', 'Inactive'].map((s) => {
              return <Select.Option key={s}>{s}</Select.Option>
            })}
          </Select>
        </div>
        <Button icon={<SearchOutlined />} className="default-cus-primary">
          Search
        </Button>
        <Button type="primary" className="col-start-4">
          CSV Download
        </Button>
        <Button type="primary" className="col-start-5" onClick={handleCreateStaff}>
          Add New Staff
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {accountRole.map((a) => {
          return (
            <Button
              className={clsx('default-cus-primary !h-16', { '!border-b-4 !font-bold': a.active === true })}
              key={a.title}
              onClick={() => {
                changeRoleHandler(a)
              }}
            >
              {a.title}
            </Button>
          )
        })}
      </div>
      <Table dataSource={staffInfo} columns={columns} pagination={{ pageSize: 5 }} size={'middle'} />
      <StaffModal type={type} fields={fields} />
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout
      isBox={true}
      parentTab={[
        { text: 'Staff Attendance', url: '/admin/StaffAttendance/Dashboard', active: false },
        { text: 'Staff Information', url: '/admin/StaffInformation/Dashboard', active: true },
        { text: 'Accounting', url: '/admin/Accounting/Dashboard', active: false },
      ]}
      childTab={[
        { text: 'Dashboard', url: '/admin/StaffInformation/Dashboard', active: true },
        { text: 'Department Master', url: '/admin/StaffInformation/DepartmentMaster', active: false },
        { text: 'Org Chart', url: '/admin/StaffInformation/OrgChart', active: false },
      ]}
    >
      {page}
    </AppLayout>
  )
}

export default observer(Dashboard)
