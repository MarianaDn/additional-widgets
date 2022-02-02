import { Fragment } from "react";
import cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/arrowNext.svg";
import styles from "./Accordion.module.scss";

export const Accordion = ({ id, title, content, active, setActiveIndex }) => (
  <Fragment>
    <button className={styles.button} onClick={() => setActiveIndex(id - 1)}>
      {title}
      <Arrow className={cx(styles.arrow, active[0])} />
    </button>
    <div className={cx(styles.card, active[1])}>
      <p className={styles.content}>{content}</p>
    </div>
  </Fragment>
);
