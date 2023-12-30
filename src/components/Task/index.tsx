import styles from "./Task.module.css";

export function Task() {
  return (
    <li className={styles.task}>
      <div>
        <button className={styles.check}></button>
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
    </li>
  );
}
