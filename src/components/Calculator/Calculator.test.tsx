import { expect } from "expect";
import { h } from "preact";
import { render, fireEvent } from "@testing-library/preact";

import { Calculator } from "./Calculator";

describe("Calculator", () => {
  let component;

  beforeEach(() => {
    component = render(<Calculator />);
  });

  afterEach(() => {
    const { getByText } = component;
    fireEvent.click(getByText("C"));
  });

  it("renders the calculator with all the keys", () => {
    const { getByText } = component;
    const keys = [
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
    keys.forEach((key) => {
      expect(getByText(key)).not.toBeNull();
    });
  });

  it("handles button clicks correctly", () => {
    const { getByText, getByRole } = component;
    const input = getByRole("textbox") as HTMLInputElement;
    const result = getByText("=");

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));

    expect(result.textContent).toBe("=3");
    expect(input.value).toBe("1+2");
  });

  it("handles backspace correctly", () => {
    const { getByText, getByRole } = component;
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("<"));

    expect(input.value).toBe("12");
  });

  it("handles clear correctly", () => {
    const { getByText, getByRole } = component;
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("C"));

    expect(input.value).toBe("");
  });

  it("handles invalid input correctly", () => {
    const { getByText, getByRole } = component;
    const input = getByRole("textbox") as HTMLInputElement;
    const result = getByText("=");

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("/"));

    expect(result.textContent).toBe("=Error");
    expect(input.value).toBe("1//");
  });

  it("handles division by zero correctly", () => {
    const { getByText, getByRole } = component;
    const input = getByRole("textbox") as HTMLInputElement;
    const result = getByText("=");

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("0"));

    expect(result.textContent).toBe("=Infinity");
    expect(input.value).toBe("1/0");
  });
});
