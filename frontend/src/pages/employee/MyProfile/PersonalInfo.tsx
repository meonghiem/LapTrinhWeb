import React from 'react'
import AppLayout from 'src/containers/app-layout'
export default function Page() {
  return (
    <>
      <div>
        <div className="w-[1086px] h-[586px] flex flex-row">
          <div className="w-[602px] flex flex-col">
            <div className="w-[271px] h-[38px] text-[16px] font-bold text-[#004B8F] text-center leading-[19.36px] ml-[101px] mt-[25px] mb-[13px]">
              Profile Picture
            </div>
            <img
              className="w-[373px] h-[373px] ml-[50px] rounded-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
          </div>
          <div className="w-[494px]">
            <div className="mt-[25px] flex flex-row">
              <div className="w-[178px] h-[38px] text-[16px] mr-[78px] font-bold text-[#004B8F] leading-[19.36px] pt-2">
                Basis Info
              </div>
              <div className="w-[178px] h-[37.39px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] border-2 border-[#004B8F] text-center py-[7.95px] gap-[14.96px]">
                Edit
              </div>
            </div>
            <div className="mt-[13px] w-[258px]">
              <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">Name</div>
              <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">Thai Son</div>
            </div>
            <div className="mt-[13px] flex flex-row">
              <div className="w-[178px] mr-[78px]">
                <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">Gender</div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">Male</div>
              </div>
              <div className="w-[178px]">
                <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">
                  Date of Birth
                </div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">10/10/2000</div>
              </div>
            </div>
            <div className="mt-[13px] flex flex-row">
              <div className="w-[178px] mr-[78px]">
                <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">
                  Birth Place
                </div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">Ha Noi</div>
              </div>
              <div className="w-[178px]">
                <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">
                  Martial Status
                </div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">Complicated</div>
              </div>
            </div>
            <div className="mt-[13px] w-[258px]">
              <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">Email</div>
              <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">
                example@gmail.com
              </div>
            </div>
            <div className="w-[434px] h-[2px] bg-mainColor mt-[25px]"></div>
            <div className="mt-[25px] flex flex-row">
              <div className="w-[178px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px] pt-2">
                Contact Info
              </div>
            </div>
            <div className="mt-[13px] flex flex-row">
              <div className="w-[178px] mr-[78px]">
                <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">
                  Mobile Phone
                </div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">9999999999</div>
              </div>
              <div className="w-[178px]">
                <div className="w-[170px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">
                  Emergency Phone
                </div>
                <div className="w-[150px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">9999999999</div>
              </div>
            </div>
            <div className="mt-[13px] w-[258px]">
              <div className="w-[150px] h-[38px] text-[16px] font-bold text-[#004B8F] leading-[19.36px]">Address</div>
              <div className="w-[434px] h-[19px] font-extralight text-[#004B8F] leading-[19.36px]">
                Số 0 Ngõ 0 Phố Không Hà Nội Việt Nam
              </div>
            </div>
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
