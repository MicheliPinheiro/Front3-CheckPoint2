import ScheduleForm from './../ScheduleForm/ScheduleForm'
import styles from "./ScheduleFormModal.module.css"
import { useTheme } from "./../../Hooks/useTheme"

const ScheduleFormModal = () => {

  const {theme} = useTheme()

  return (
    <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className={theme === 'dark' ? `modal-content ${styles.DarkModal}` : `modal-content`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Selecione dentista, paciente, data e hora</h1>
            <button type="button" className={theme === 'dark' ? `btn-close ${styles.closeButtonDark}` : `btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ScheduleFormModal;