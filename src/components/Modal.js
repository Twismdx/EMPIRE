import styles from "./Modal.module.css";
import { useRef } from "react";
import { useGlobalContext } from "./Context";

const Modal = ({ onClose }) => {
  const { dayRate, setDayRate, nightRate, setNightRate, satRate, setSatRate, vipRate, setVipRate } = useGlobalContext()

  const dayref = useRef(null)
  const nightref = useRef(null)
  const satref = useRef(null)
  const vipref = useRef(null)

  const handleSave = (e) => {
    setDayRate(dayref.current.value)
    setNightRate(nightref.current.value)
    setSatRate(satref.current.value)
    setVipRate(vipref.current.value)
  }

  return (
    <div className={styles.lightModeCreatAnEventde}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.settings}>Settings</div>
          <button className={styles.iconsLight} onClick={onClose}>
            <img
              className={styles.vuesaxoutlinecloseCircleIcon}
              alt=""
              src="/vuesaxoutlineclosecircle.svg"
            />
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
            type="text"
            placeholder={dayRate}
            maxLength
            ref={dayref}
            minLength
            id="Day Rate"
          />
          <input
            className={styles.inputLight}
            type="text"
            placeholder={nightRate}
            maxLength
            ref={nightref}
            minLength
            id="Night Rate"
          />
          <input
            className={styles.inputLight}
            type="text"
            placeholder={satRate}
            maxLength
            ref={satref}
            minLength
            id={`Fri & Sat Rate`}
          />
          <input
            className={styles.inputLight}
            type="text"
            placeholder={vipRate}
            maxLength
            ref={vipref}
            minLength
            id="VIP Rate"
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonLight}>
            <div className={styles.button}>Cancel</div>
          </button>
          <button className={styles.buttonLight1} onClick={handleSave}>
            <div className={styles.button1}>Save</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
