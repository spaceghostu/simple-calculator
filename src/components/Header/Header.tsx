import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <img
        width="150"
        height="40.5"
        src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
        alt="[=] Equal Experts"
      ></img>
      <h1 className="Typography H1">Simple Calculator</h1>
    </div>
  );
};
