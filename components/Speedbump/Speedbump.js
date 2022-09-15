import styles from "./Speedbump.module.css";

export default function Speedbump() {
  return (
    <div id="speedbump" className={styles.modal} tabIndex={-1} role="dialog">
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>
              You Are Continuing to Another Website
            </h2>
            <p className={styles.modalSubtitle}>
              UFB Direct does not endorse the information, content, presentation
              or accuracy of any other website and claims no responsibility for
              it.
            </p>
          </div>
          <div className={styles.modalBody}>
            <p>You will now be directed to:</p>
            <p id="insert-url" className={styles.siteLink}>
              www.fdic.gov
            </p>
          </div>
          <div className={styles.modalFooter}>
            <a
              role="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
              title="Continue"
              target="_blank"
              id="continue"
            >
              Continue
            </a>
            <a
              role="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              data-dismiss="modal"
              aria-label="Close"
              title="Go Back"
              id="close"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
