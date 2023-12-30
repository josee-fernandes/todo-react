import { useState } from "react";

import { Check } from "phosphor-react";

import styles from "./Task.module.css";

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleIsChecked() {
    setIsChecked((oldIsChecked) => !oldIsChecked);
  }

  return (
    <li className={styles.task}>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" checked={isChecked} readOnly />
        <button className={styles.check} onClick={handleToggleIsChecked}>
          {isChecked && <Check />}
        </button>
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
    </li>
  );
}
