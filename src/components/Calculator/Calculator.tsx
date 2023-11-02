import { h } from "preact";
import { evaluate } from "mathjs";
import styles from "./Calculator.module.css";
import { signal, computed } from "@preact/signals";
import { Button } from "../Button/Button";

const KEYS = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "C",
  "+",
];

const inputValue = signal("");
const result = computed(() => {
  if (inputValue.value === "") return "";
  try {
    return evaluate(inputValue.value);
  } catch (e) {
    return "Error";
  }
});

export function Calculator() {
  const handleClick = (key: string) => {
    if (key === "C") {
      inputValue.value = "";
      return;
    }
    inputValue.value += key;
  };

  const handleBackspace = () => {
    inputValue.value = inputValue.value.slice(0, -1);
  };

  return (
    <div className={styles.Calculator}>
      <input value={inputValue} type="text" readonly />
      <Button onClick={handleBackspace}>{"<"}</Button>
      <div className={styles.result}>={result}</div>
      {KEYS.map((key) => (
        <Button onClick={() => handleClick(key)}>{key}</Button>
      ))}
    </div>
  );
}
