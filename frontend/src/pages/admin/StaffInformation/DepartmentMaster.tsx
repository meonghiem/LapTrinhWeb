import { Button, Table } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import DepartmentModal from 'src/components/admin/DepartmentModal'
import AppLayout from 'src/containers/app-layout'
import { useLayoutStore } from 'src/stores/hooks'

interface departmentMasterInterface {
  key: string
  name: string
  tier: string
  dateAdded: string
}

const departmentMasters: departmentMasterInterface[] = [
  {
    key: '1',
    name: 'PM',
    tier: '1',
    dateAdded: '01/01/2022',
  },
  {
    key: '2',
    name: 'PM',
    tier: '1',
    dateAdded: '01/01/2022',
  },
  {
    key: '3',
    name: 'PM',
    tier: '1',
    dateAdded: '01/01/2022',
  },
]

const DepartmentMaster = () => {
  const [type, setType] = useState('')
  const { open } = useLayoutStore()
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Tier', dataIndex: 'tier', key: 'tier' },
    { title: 'Date Added', dataIndex: 'dateAdded', key: 'hiredDate' },
    {
      key: 'action',
      render() {
        return (
          <Button type="primary" onClick={handleUpdateDep}>
            Update
          </Button>
        )
      },
    },
  ]

  const handleUpdateDep = () => {
    open()
    setType('update')
  }
  const handleCreateDep = () => {
    open()
    setType('create')
  }

  return (
    <div className="admin px-4 pt-4">
      <div className="flex mb-4 justify-end">
        <Button type="primary" size="large" onClick={handleCreateDep}>
          Add New Dept
        </Button>
      </div>
      <Table dataSource={departmentMasters} columns={columns} pagination={{ pageSize: 5 }} size={'middle'} />
      <DepartmentModal
        type={type}
        fields={[
          { name: 'name', value: 'PM' },
          { name: 'tier', value: '1' },
        ]}
      />
      s
    </div>
  )
}

DepartmentMaster.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout
      isBox={true}
      parentTab={[
        { text: 'Staff Attendance', url: '/admin/StaffAttendance/Dashboard', active: false },
        { text: 'Staff Information', url: '/admin/StaffInformation/Dashboard', active: true },
        { text: 'Accounting', url: '/admin/Accounting/Dashboard', active: false },
      ]}
      childTab={[
        { text: 'Dashboard', url: '/admin/StaffInformation/Dashboard', active: false },
        { text: 'Department Master', url: '/admin/StaffInformation/DepartmentMaster', active: true },
        { text: 'Org Chart', url: '/admin/StaffInformation/OrgChart', active: false },
      ]}
    >
      {page}
    </AppLayout>
  )
}

export default observer(DepartmentMaster)
