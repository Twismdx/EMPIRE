import styles from "./Modal.module.css"
import { useRef } from "react"
import { useGlobalContext } from "./Context"

const Modal = ({ onClose }) => {
  const { dayRate,setDayRate,nightRate,setNightRate,satRate,setSatRate,vipRate,setVipRate } = useGlobalContext()

  const dayRef = useRef(null)
  const nightRef = useRef(null)
  const satRef = useRef(null)
  const vipRef = useRef(null)

  const handleSave = (e) => {
    setDayRate(dayRef.current.value)
    setNightRate(nightRef.current.value)
    setSatRate(satRef.current.value)
    setVipRate(vipRef.current.value)
  }

  return (
    <div className={styles.lightMode}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.settings}>Settings</div>
          <button className={styles.iconsLight} onClick={onClose}>
          </button>
        </div>
        <div className={styles.inputs}>
          <b className={styles.dayRate}>Day Rate</b>
          <b className={styles.dayRate}>Night Rate</b>
          <b className={styles.dayRate}>{`Fri & Sat Rate`}</b>
          <b className={styles.dayRate}>VIP Rate</b>
        </div>
        <div className={styles.inputs1}>
          <input
            className={styles.inputLight}
            type="number"
            placeholder={dayRate}
            maxLength
            ref={dayRef}
            defaultValue={dayRate}
            minLength
            id="Day Rate"
          />
          <input
            className={styles.inputLight}
            type="number"
            placeholder={nightRate}
            maxLength
            defaultValue={nightRate}
            ref={nightRef}
            minLength
            id="Night Rate"
          />
          <input
            className={styles.inputLight}
            type="number"
            placeholder={satRate}
            defaultValue={satRate}
            maxLength
            ref={satRef}
            minLength
            id={`Fri & Sat Rate`}
          />
          <input
            className={styles.inputLight}
            type="number"
            placeholder={vipRate}
            defaultValue={vipRate}
            maxLength
            ref={vipRef}
            minLength
            id="VIP Rate"
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonLight} onClick={() => onClose()}>
            <div className={styles.button}>Cancel</div>
          </button>
          <button className={styles.buttonLight1} onClick={handleSave}>
            <div className={styles.button1}>Save</div>
          </button>
        </div>
      </div>
    </div >
  )
}

export default Modal
