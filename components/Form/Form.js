import styles from "./Form.module.css";
import Link from "next/link";

export default function Form() {
  return (
    <div>
      <div className={styles.containerBackground}>
        <div className={`${styles.container} container`}>
          <h2 className={`${styles.header} centeredHeader`}>Email Us</h2>
          <p></p>
          <div className={`${styles.forms} row`}>
            <div className="col-lg col-md-6 col-sm-12">
              <label>First Name</label>
              <div className="mb-3 input-group">
                <input
                  required=""
                  placeholder="First Name"
                  aria-label="First Name"
                  type="text"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="col-lg col-md-6 col-sm-12">
              <label>Last Name</label>
              <div className="mb-3 input-group">
                <input
                  required=""
                  placeholder="Last Name"
                  aria-label="Last Name"
                  type="text"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.forms} row`}>
            <div className="col-lg col-md-6 col-sm-12">
              <label>Email</label>
              <div className="input-group">
                <input
                  required=""
                  placeholder="Email"
                  aria-label="Email"
                  type="email"
                  id="emailInput"
                  className="form-control form-control-lg"
                />
                <div className={`${styles.iconContainer}`} id="loader-spinner">
                  <i className="styles.loader"></i>
                </div>
              </div>
            </div>
            <div
              className={`${styles.marginTopPhone} col-lg col-md-6 col-sm-12`}
            >
              <label>Phone</label>
              <div className="mb-3 input-group">
                <input
                  required=""
                  placeholder="Phone"
                  aria-label="Phone"
                  maxlength="10"
                  minlength="10"
                  type="tel"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.btnContainer} row`}>
            <div className="col-sm-12">
              <button
                type="button"
                className={`${styles.buttonStyle}  btn btn-primary btn-lg`}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="row">
            <div className={styles.disclaimerText}>
              By clicking Submit, you have agreed to these
              <Link
                href="https://www.axosbank.com/-/media/Axos/Documents/Legal/SMS-and-MMS-Disclosure-Axos-Bank.pdf"
                passHref
              >
                <a> Terms and Conditions</a>
              </Link>
              , and you have agreed to receive automated SMS text messages,
              calls, and emails for any purpose including but not limited to
              marketing of products and services by Axos Bank. You understand
              and agree that such messages may be sent via Automatic Telephone
              Dialing System and/or artificial or pre-recorded voice, and that
              such consent is not a condition of receipt of any good or service.
              Mobile carrier messages and data rates may apply. You may opt out
              at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
