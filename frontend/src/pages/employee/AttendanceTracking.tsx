import { Table } from 'antd'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import ButtonComponent from 'src/common/components/button'
import AppLayout from 'src/containers/app-layout'
export default function AttendanceTracking() {
  const data = []
  for (let i = 0; i < 30; ++i) {
    data.push({
      key: i.toString(),
      day: 'Monday',
      date: '2014-12-24',
      in: '09:54',
      out: '16:54',
      total_break: '1.52',
      work_time: '5.39',
    })
  }
  const column = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'location_name',
    },
    {
      title: 'In',
      dataIndex: 'in',
      key: 'description',
    },
    {
      title: 'Out',
      dataIndex: 'out',
      key: 'status',
    },
    {
      title: 'Total Break',
      dataIndex: 'total_break',
      key: 'total_break',
    },
    {
      title: 'Work Time',
      dataIndex: 'work_time',
      key: 'work_time',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: () => <ButtonComponent className="button-color" children="Update" />,
    },
  ]

  const {data: session} = useSession()
  console.log(session)

  const handleclick = async () => {
    const data = await axios.get('http://localhost:3001/profile') ;
    console.log(data)

  }

  // async function handleClick(){
  //   const data = await axios.get('http://localhost:3001/profile') ;
  //   console.log(data)
  // }

  return (
    <><button onClick={()=>handleclick()}>call</button><div className="flex flex-col items-center justify-center pt-[30px] md:pt-[60px] pb-[100px] md:pb-[130px]">
      {!session && <><h1 className="!text-[#F19CA6] text-lg !font-bold  md:text-2xl leading-[36px] mb-10">Attendance</h1>
        <div className="text-sm mb-[40px] md:mb-[60px]">Data Attendance</div>
        <Link href="/">
          <a className=" hover:opacity-80 text-center w-[280px] py-[10px] bg-[#F19CA6] text-white rounded-full">TOPへ</a>
        </Link></>}
      <Table
        className="mt-12 table-attendance"
        columns={column}
        scroll={{
          y: 500,
        }}
        dataSource={data}
        pagination={false} />
    </div></>
  )
}

AttendanceTracking.getLayout = (page: React.ReactElement) => {
  return (
    <AppLayout
      parentTab={[
        { text: 'Attendance Tracking', url: '/employee/AttendanceTracking', active: true },
        { text: 'My Profile', url: '/employee/MyProfile/PersonalInfo', active: false },
        { text: 'Leave Request', url: '/employee/LeaveRequest', active: false },
      ]}
      isBox={true}
    >
      {page}
    </AppLayout>
  )
}
