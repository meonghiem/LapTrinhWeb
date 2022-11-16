import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Select, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'
import React from 'react'
import AppLayout from 'src/containers/app-layout'

interface DataType {
  key: string
  employeeId: string
  employee: string
  status: string
  hourThisMonth: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Employee Id',
    dataIndex: 'employeeId',
    key: 'employeeId',
  },
  {
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Hour This Month',
    dataIndex: 'hourThisMonth',
    key: 'hourThisMonth',
  },
]

const data: DataType[] = [
  {
    key: '1',
    employeeId: 'abc',
    employee: '32',
    status: 'in',
    hourThisMonth: 132,
  },
  {
    key: '2',
    employeeId: 'abc',
    employee: '32',
    status: 'out',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
  {
    key: '3',
    employeeId: 'abc',
    employee: '32',
    status: 'back',
    hourThisMonth: 132,
  },
]

const Dashboard = () => {
  const status = ['in', 'out', 'rest', 'back']

  const router = useRouter()
  return (
    <div className="admin px-2">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 items-center max-sm:grid-rows-3 max-sm:grid-cols-2 mb-8">
        <Button size="middle" type="primary">
          10 October 2022
        </Button>
        <Button size="middle" type="primary">
          17:18
        </Button>
        <Button size="middle" type="default" className="!h-fit !py-4 col-start-1 default-cus-primary">
          <p>15</p>
          <p>Woking</p>
        </Button>
        <Button size="middle" type="default" className="!h-fit !py-4 default-cus-success">
          <p>15</p>
          <p>Resting</p>
        </Button>
        <Button size="middle" type="default" className="!h-fit !py-4 default-cus-error">
          <p>15</p>
          <p>Took Leave</p>
        </Button>
        <Button
          size="middle"
          type="default"
          className="!h-fit !py-4 default-cus-warning"
          onClick={() => {
            router.push('/admin/StaffAttendance/WorkhourApproval')
          }}
        >
          <p>15</p>
          <p>Pending</p>
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-4 max-md:grid-cols-4 max-sm:grid-cols-2 items-end">
        <div className="text-[#004b8f]">
          <p>Employee ID</p>
          <Input className="default-cus-primary" />
        </div>
        <div className="text-[#004b8f]">
          <p>Employee</p>
          <Input className="default-cus-primary" />
        </div>
        <div className="text-[#004b8f]">
          <p>Status</p>
          <Select placeholder="Select status" className="w-full default-cus-primary">
            {status.map((s, id) => {
              return <Select.Option key={id}>{s}</Select.Option>
            })}
          </Select>
        </div>
        <Button icon={<SearchOutlined />} className="default-cus-primary">
          Search
        </Button>
      </div>
      <div className="py-4">
        <Table dataSource={data} columns={columns} size={'middle'} pagination={false} scroll={{ y: 230 }} />
      </div>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout
      isBox={true}
      parentTab={[
        { text: 'Staff Attendance', url: '/admin/StaffAttendance/Dashboard', active: true },
        { text: 'Staff Information', url: '/admin/StaffInformation/Dashboard', active: false },
        { text: 'Accounting', url: '/admin/Accounting/Dashboard', active: false },
      ]}
      childTab={[
        { text: 'Dashboard', url: '/admin/StaffAttendance/Dashboard', active: true },
        { text: 'Workhour Approval', url: '/admin/StaffAttendance/WorkhourApproval', active: false },
        { text: 'Leave Approval', url: '/admin/StaffAttendance/LeaveApproval', active: false },
      ]}
    >
      {page}
    </AppLayout>
  )
}

export default Dashboard
