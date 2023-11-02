import { render } from "preact";
import "./style.css";
import "./theme/palette.css";
import "./theme/typography.css";
import "./theme/fonts.css";
import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Calculator />
      </main>
    </div>
  );
}

render(<App />, document.getElementById("app"));
