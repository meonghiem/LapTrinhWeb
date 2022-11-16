import React from 'react'
import AppLayout from 'src/containers/app-layout'
export default function Page() {
  const list1 = {
    'Job Title': 'CEO',
    'User Type': 'User',
    'Job Description': 'IT Help Desk',
    'Employee ID': 'P00005',
    Department: 'IT',
    Skill: 'LeaderShip',
    'Hired Date': '04/05/2021',
    Office: 'Tokyo',
    Education: 'IT Faculty of Hanoi Open University',
    'Termination Date': '------------',
    'Performance Review': '5',
    Language: 'Polish',
  }

  const list2 = {
    Date: '-------------',
    Detail: '-------------',
    History: '-------------',
    Action: '-------------',
  }
  return (
    <>
      <div className="px-6">
        {/* <div className='font--bold text-[16px] line-[19px] text-[#004B8F]'>Work Sumary</div>
        <div className="flex flex-row justify-around">
            <div className='flex flex-col'>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Job Title</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Employee ID</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Hired Date</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Termination Date</p> <p>CEO</p></div>
            </div>
            <div className='flex flex-col'>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Job Title</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Employee ID</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Hired Date</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Termination Date</p> <p>CEO</p></div>
            </div>
            <div className='flex flex-col'>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Job Title</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Employee ID</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Hired Date</p> <p>CEO</p></div>
              <div><p className='font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]'>Termination Date</p> <p>CEO</p></div>
            </div>
        </div> */}

        <div className="overflow-x-auto relative">
          <table className="w-full  text-left ">
            <thead className=" ">
              <tr>
                <th scope="col" className="py-3  font-bold text-[16px] line-[19px] text-[#004B8F] font-[Inter]">
                  Work Sumary
                </th>
                <th scope="col" className="py-3 "></th>
                <th scope="col" className="py-3 "></th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-2">
                <td scope="row" className="py-2  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Job Title
                    </p>{' '}
                    <p>{list1['Job Title']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      User Type
                    </p>{' '}
                    <p>{list1['User Type']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Job Description
                    </p>{' '}
                    <p>{list1['Job Description']}</p>
                  </div>
                </td>
              </tr>
              <tr className="py-2">
                <td scope="row" className="py-2  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Employee ID
                    </p>{' '}
                    <p>{list1['Employee ID']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Department
                    </p>{' '}
                    <p>{list1.Department}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Skill
                    </p>{' '}
                    <p>{list1.Skill}</p>
                  </div>
                </td>
              </tr>
              <tr className="py-2">
                <td scope="row" className="py-2  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Hired Date
                    </p>{' '}
                    <p>{list1['Hired Date']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Office
                    </p>{' '}
                    <p>{list1.Office}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Education
                    </p>{' '}
                    <p>{list1.Education}</p>
                  </div>
                </td>
              </tr>
              <tr className="py-2">
                <td scope="row" className="py-2  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Termination Date
                    </p>{' '}
                    <p>CEO</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Performance Review
                    </p>{' '}
                    <p>CEO</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Language
                    </p>{' '}
                    <p>CEO</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" border-2 border-[#004B8F] my-4 "></div>
        <div className="overflow-x-auto relative">
          <table className="w-full  text-left ">
            <thead className=" ">
              <tr>
                <th scope="col" className="py-3  font-bold text-[16px] line-[19px] text-[#004B8F] font-[Inter]">
                  Work Sumary 2
                </th>
                <th scope="col" className="py-3 "></th>
                <th scope="col" className="py-3 "></th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-2">
                <td scope="row" className="py-2 w-[26%]  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Date
                    </p>{' '}
                    <p>{list2['Date']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Detail
                    </p>{' '}
                    <p>{list2['Detail']}</p>
                  </div>
                </td>
              </tr>
              <tr className="py-2">
                <td scope="row" className="py-2  font-medium">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      History
                    </p>{' '}
                    <p>{list2['History']}</p>
                  </div>
                </td>
                <td scope="row" className="py-2 ">
                  <div>
                    <p className="font-[Inter] non-italic font-medium text-left text-[16px] text-[#004B8F] line-[19px]">
                      Action
                    </p>{' '}
                    <p>{list2.Action}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
Page.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout
      parentTab={[
        { text: 'Attendance Tracking', url: '/employee/AttendanceTracking', active: false },
        { text: 'My Profile', url: '/employee/MyProfile/PersonalInfo', active: true },
        { text: 'Leave Request', url: '/employee/LeaveRequest', active: false },
      ]}
      childTab={[
        { text: 'Personal Info', url: '/employee/MyProfile/PersonalInfo', active: false },
        { text: 'Staff Info', url: '/employee/MyProfile/StaffInfo', active: true },
        { text: 'SalaryReport', url: '/employee/MyProfile/SalaryReport', active: false },
      ]}
    >
      {page}
    </AppLayout>
  )
}
