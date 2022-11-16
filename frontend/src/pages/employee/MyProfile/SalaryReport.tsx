import React from 'react'
import AppLayout from 'src/containers/app-layout'

interface SalaryReportInterface {
    date: string,
    paidPrecense: number,
    paidLeave: number,
    gross: string
}

const salaryReports = [
    {
        date: '01/01/2022',
        paidPrecense: 1,
        paidLeave: 22,
        gross: '500000vnd'
    }
]
export default function Page() {
    return (
        <>
            <div className='w-full '>
                <div className='flex flex-row px-12'>
                    <div className='basis-1/6 h-[60px] text-white py-2  mt-8 text-center border-[2px] border-[#004B8F] flex flex-row'>
                        <div className='bg-white py-2 px-2 text-[#004B8F] mr-4'>September 2022</div>
                        <div className='bg-white py-2 px-2 text-[#004B8F]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>
                    <div className='basis-1/6 h-[38px] text-white py-2  mt-8 text-center'></div>
                    <div className='basis-1/6 h-[38px] text-white py-2 mt-8 text-center'></div>
                    <div className='basis-1/6 h-[38px] text-white py-2  mt-8 text-center'></div>
                    <div className='basis-1/3 bg-white py-2 text-[#004B8F] mt-8 flex flex-col'>
                        <div className='p-2'>Bank number:  123456789</div>
                        <div className='p-2'>Bank : VCB</div>
                        <div className='p-2'>Bank Name: Long Long Long</div>
                    </div>
                </div>
                <div className='px-12 flex flex-row mt-8'>
                    <div className='basis-1/6 bg-[#004B8F] text-white py-2 font-bold px-4 text-[12px]'>Date</div>
                    <div className='basis-1/6 bg-[#004B8F] text-white py-2 font-bold px-4 text-[12px]'>Paid Precense</div>
                    <div className='basis-1/6 bg-[#004B8F] text-white py-2 font-bold px-4 text-[12px]'>Paid Leave</div>
                    <div className='basis-1/6 bg-[#004B8F] text-white py-2 font-bold px-4 text-[12px]'>Gross</div>
                    <div className='basis-1/3 bg-[#004B8F] text-white py-2 font-bold px-4 text-[12px]'>Action</div>
                </div>
                {
                    salaryReports.map((salaryReport: SalaryReportInterface) => (
                        <div className='px-12 flex flex-row mt-8'>
                            <div className='basis-1/6 bg-white px-4 text-[12px]'>{salaryReport.date}</div>
                            <div className='basis-1/6 bg-white px-4 text-[12px]'>{salaryReport.paidPrecense}</div>
                            <div className='basis-1/6 bg-white px-4 text-[12px]'>{salaryReport.paidLeave}</div>
                            <div className='basis-1/6 bg-white px-4 text-[12px]'>{salaryReport.gross}</div>
                            <div className='basis-1/3 bg-white px-4 text-[12px] flex flex-row'>
                                <div className='w-[160px] text-center text-white bg-[#004B8F] px-12 py-2 mr-8'>View</div>
                                <div className='w-[160px] text-center text-white bg-[#004B8F] px-12 py-2'>Download</div>
                            </div>



                        </div>
                    ))
                }
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
                { text: 'Staff Info', url: '/employee/MyProfile/StaffInfo', active: false },
                { text: 'SalaryReport', url: '/employee/MyProfile/SalaryReport', active: true },
            ]}
        >
            {page}
        </AppLayout>
    )
}
