import { Modal } from 'antd'

const ModalConfirm = ({ title, handle }) => {
  Modal.confirm({
    title,
    centered: true,
    onOk() {
      handle()
    },
  })
}

export default ModalConfirm
