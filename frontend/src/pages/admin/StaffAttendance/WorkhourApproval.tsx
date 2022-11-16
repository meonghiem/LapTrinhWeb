import { Button, Input, Modal, Table, Tabs } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import ModalConfirm from 'src/common/components/modal-confirm/ModalConfirm'
import AppLayout from 'src/containers/app-layout'
import { useLayoutStore } from 'src/stores/hooks'

const statusRequest = ['Pending Request', 'Completed Request']

interface RequestDataType {
  key: string
  no: string
  requestType: string
  requestDate: string
  adjustType: string
  amount: string
  reason: string
}

const data: RequestDataType[] = [
  {
    key: '1',
    no: '1',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'REST',
    amount: '01:23',
    reason: 'Quên rest',
  },
  {
    key: '2',
    no: '2',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'BACK',
    amount: '02:45',
    reason: 'Quên back',
  },
  {
    key: '3',
    no: '3',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '4',
    no: '4',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '5',
    no: '5',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '6',
    no: '6',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '7',
    no: '7',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '8',
    no: '8',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '9',
    no: '9',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
  {
    key: '10',
    no: '10',
    requestType: 'Hour Adjustment',
    requestDate: new Date('1995-12-17T03:24:00').toLocaleString(),
    adjustType: 'OUT',
    amount: '01:59',
    reason: 'Quên out',
  },
]

const WorkhourApproval = () => {
  const [requestDetail, setRequestDetail] = useState<RequestDataType>()
  const { isOpen, close, open } = useLayoutStore()

  const handleOk = () => {
    close()
  }

  const handleCancel = () => {
    close()
  }
  const columns = (type: string) => {
    return [
      { title: 'No', dataIndex: 'no', key: 'no', width: '5%' },
      { title: 'Request Type', dataIndex: 'requestType', key: 'requestType', width: '20%' },
      {
        title: 'Request Date',
        dataIndex: 'requestDate',
        key: 'requestDate',
        width: '20%',
      },
      { title: 'Adjust Type', dataIndex: 'adjustType', key: 'adjustType', width: '10%' },
      { title: 'Amount/hour', dataIndex: 'amount', key: 'amount', width: '10%' },
      { title: 'Reason', dataIndex: 'reason', key: 'reason', width: '10%' },
      {
        key: 'action',

        render(_value: any, record: RequestDataType) {
          return type === 'Pending Request' ? (
            <div className="flex justify-evenly">
              <Button
                type="primary"
                onClick={() => {
                  ModalConfirm({
                    title: 'Do you want to approve',
                    handle: () => {},
                  })
                }}
              >
                Approve
              </Button>
              <Button
                type="default"
                onClick={() => {
                  setRequestDetail(record)
                  open()
                }}
                className="default-cus-primary"
              >
                Disapprove
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button
                type="default"
                className="default-cus-primary"
                onClick={() => {
                  ModalConfirm({
                    title: 'Do you want to cancel',
                    handle: () => {},
                  })
                }}
              >
                Cancel
              </Button>
            </div>
          )
        },
      },
    ]
  }
  return (
    <div className="p-4">
      <Tabs defaultActiveKey="Pending Request">
        {statusRequest.map((s) => {
          return (
            <Tabs.TabPane tab={s} key={s}>
              <Table dataSource={data} columns={columns(s)} scroll={{ y: 400 }} pagination={false} size={'middle'} />
            </Tabs.TabPane>
          )
        })}
      </Tabs>
      <Modal open={isOpen} onCancel={handleCancel} centered closable={false} footer={null}>
        <h3 className="mb-2 text-2xl">Request Detail</h3>
        <div className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-2">
          <div>
            <p className="text-slate-400">Request Type</p>
            <p>{requestDetail?.requestType}</p>
          </div>
          <div>
            <p className="text-slate-400">Request Date</p>
            <p>{requestDetail?.requestDate}</p>
          </div>
          <div>
            <p className="text-slate-400">Adjust Type</p>
            <p>{requestDetail?.adjustType}</p>
          </div>
          <div>
            <p className="text-slate-400">Amount/Hour</p>
            <p>{requestDetail?.amount}</p>
          </div>
          <div>
            <p className="text-slate-400">Reason</p>
            <p>{requestDetail?.reason}</p>
          </div>
        </div>
        <p className="font-bold text-red-500 mt-3">State why you disapprove this request</p>
        <Input.TextArea className="!mt-2" rows={2} />
        <div className="flex justify-end mt-2">
          <Button className="mr-2 w-1/4 default-cus-primary" type="default" onClick={handleCancel}>
            Cancel
          </Button>
          <Button className="w-1/4" type="primary" onClick={handleOk}>
            Send
          </Button>
        </div>
      </Modal>
    </div>
  )
}

WorkhourApproval.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout
      isBox={true}
      parentTab={[
        { text: 'Staff Attendance', url: '/admin/StaffAttendance/Dashboard', active: true },
        { text: 'Staff Information', url: '/admin/StaffInformation/Dashboard', active: false },
        { text: 'Accounting', url: '/admin/Accounting/Dashboard', active: false },
      ]}
      childTab={[
        { text: 'Dashboard', url: '/admin/StaffAttendance/Dashboard', active: false },
        { text: 'Workhour Approval', url: '/admin/StaffAttendance/WorkhourApproval', active: true },
        { text: 'Leave Approval', url: '/admin/StaffAttendance/LeaveApproval', active: false },
      ]}
    >
      {page}
    </AppLayout>
  )
}

export default observer(WorkhourApproval)
