import React from 'react'
import AppLayout from 'src/containers/app-layout'
export default function Page() {
    return (
        <>
            <div className='w-[1086px] h-[586px] flex flex-row'>
                <div className='w-[602px] flex flex-col'>
                    <div className='w-[271px] h-[38px] text-[16px] font-bold text-[#004B8F] text-center leading-[19.36px] ml-[101px] mt-[25px] mb-[13px]'>Profile Picture</div>
                    <img className='w-[373px] h-[373px] ml-[50px] rounded-full' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                </div>
                <div className='w-[494px]'>
                    <div className='mt-[25px] flex flex-row'>
                        <div className='w-[178px] h-[38px] mr-[78px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Basis Info</div>
                        <div className='text-white w-[178px] h-[37.39px] text-[16px] font-bold leading-[19.36px] border-[1.5px] border-[#004B8F] text-center py-[7.95px] gap-[14.96px] bg-mainColor'>Save</div>
                    </div>
                    <div className='mt-[13px] w-[178px]'>
                        <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Name</div>
                        <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' type='text' />
                    </div>
                    <div className='mt-[13px] flex flex-row'>
                        <div className='w-[178px] mr-[78px]'>
                            <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Gender</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                        <div className='w-[178px]'>
                            <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Date of Birth</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                    </div>
                    <div className='mt-[13px] flex flex-row'>
                        <div className='w-[178px] mr-[78px]'>
                            <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Birth Place</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                        <div className='w-[178px]'>
                            <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Martial Status</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                    </div>
                    <div className='mt-[13px] w-[178px]'>
                        <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Email</div>
                        <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                    </div>
                    <div className='w-[434px] h-[2px] bg-mainColor mt-[25px]'></div>
                    <div className='mt-[25px] flex flex-row'>
                        <div className='w-[258px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Contact Info</div>
                    </div>
                    <div className='mt-[13px] flex flex-row'>
                        <div className='w-[178px] mr-[78px]'>
                            <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Mobile Phone</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                        <div className='w-[178px]'>
                            <div className='w-[200px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Emergency Phone</div>
                            <input className='w-[178px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                        </div>
                    </div>
                    <div className='mt-[13px] w-[178px]'>
                        <div className='w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2'>Address</div>
                        <input className='w-[434px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px] p-4 border-mainColor border-2 outline-mainColor' />
                    </div>
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
                { text: 'Personal Info', url: '/employee/MyProfile/PersonalInfo', active: true },
                { text: 'Staff Info', url: '/employee/MyProfile/StaffInfo', active: false },
                { text: 'SalaryReport', url: '/employee/MyProfile/SalaryReport', active: false },
            ]}
        >
            {page}
        </AppLayout>
    )
}
