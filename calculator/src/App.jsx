import Wrapper from "./Wrapper";
import ButtonBox from "./ButtonBox";
import Buttons from "./Buttons";
import Display from "./Display";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const btnValues = [
    ["C", "+-", "<", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");
  const [expression, setExpression] = useState("");
  const operations = ["+", "-", "X", "/"];

  useEffect(() => {
    console.log("previous value:", previous);
  }, [previous]);

  const currentValues = (btn) => {
    if (operations.includes(btn)) {
      setPrevious(current);
      setOperator(btn);
      setCurrent("");
    } else if (btn === "=") {
      const result = arithmeticOperations();
      setExpression(`${previous} ${operator} ${current}`);
      setCurrent(String(result));
    } else if (btn === "C") {
      setPrevious("");
      setCurrent("");
      setOperator("");
      setExpression("");
    } else {
      setCurrent((prev) => prev + String(btn));
    }
  };

  const arithmeticOperations = () => {
    if (operator === "+") {
      return Number(previous) + Number(current);
    }

    if (operator === "-") {
      return Number(previous) - Number(current);
    }

    if (operator === "X") {
      return Number(previous) * Number(current);
    }

    if (operator === "/") {
      return Number(previous) / Number(current);
    }
  };

  return (
    <Wrapper>
      <Display
        expression={expression || `${previous} ${operator}`}
        value={current}
      />

      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Buttons
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                currentValues(btn);
                console.log(`${btn} clicked`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
