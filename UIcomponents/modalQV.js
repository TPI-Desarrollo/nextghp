import { useMainState } from '../libs/stateHooks'

import { Modal, useModal } from './modal'
import Noti from './noticiero'
import HallFame from './hallFame'

const ModalQV = () => {
  const [mState, setMainState] = useMainState()
  const mVisibility = mState.modal?.visibility
  const mType = mState.modal?.type
  const closeM = () => {
    setMainState({
      ...mState,
      modal: {
        visibility: false,
        type: 'none'
      }
    })
  }

  return (
    <Modal
      isOpen={mVisibility}
      closeM={closeM}
      title={mType}
    >
      {mType === 'Salon de la Fama' && (
        <HallFame group={'dos'}/>
      )}
      {mType === 'Noticiero' && (
        <Noti/>
      )}
      {mType === 'Ultimas actualizaciones' && (
        <div>Ultimas actualizaciones</div>
      )}
    </Modal>
  )
}
export default ModalQV
