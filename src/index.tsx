import { render } from "preact";
import "./style.css";
import { Calculator } from "./components/Calculator/Calculator";

export function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

render(<App />, document.getElementById("app"));
