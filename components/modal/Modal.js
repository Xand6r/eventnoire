import { CloseOutlined } from "@ant-design/icons";
import Send from "../../public/images/eventSend.svg";
import Image from "next/image";
import styles from "./Modal.module.scss";

function Modal(props) {
  const cancel = () => {
    props.onCancel();
  };
  return (
    <div className={styles.modal_container__wrapper}> 
      <div className={styles.modal_container}>
        <CloseOutlined className={styles.send_cancel} onClick={cancel} />
        <div className={styles.modal_send}>
          <Image src={Send} width={73.23} height={89.82} alt="" />
        </div>
        <h4 className={styles.modal_success}>Successful!</h4>
        <p className={styles.modal_text}>
          Your details have been successfully submitted
        </p>
        <p className={styles.mobile_modal}>
          Your details have been <br /> successfully submitted
        </p>
      </div>
    </div>
  );
}

export default Modal;
