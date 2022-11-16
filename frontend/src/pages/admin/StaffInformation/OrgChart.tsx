import React from 'react'
import AppLayout from 'src/containers/app-layout'

const Dashboard = () => {
  return <div className="w-full "></div>
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
        { text: 'Dashboard', url: '/admin/StaffInformation/Dashboard', active: false },
        { text: 'Department Master', url: '/admin/StaffInformation/DepartmentMaster', active: false },
        { text: 'Org Chart', url: '/admin/StaffInformation/OrgChart', active: true },
      ]}
    >
      {page}
    </AppLayout>
  )
}

export default Dashboard
