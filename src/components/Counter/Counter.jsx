import { useState } from "react";
import styles from "./Counter.module.css";
import Button from "@mui/material/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <h3>Counter Component</h3>
      <span>Counter: {counter}</span>
      <div className={styles.btnsection}>
        <Button variant="outlined" size="small" onClick={handleIncrement}>
          Incrementar
        </Button>
        <Button variant="outlined" size="small" onClick={handleDecrement}>
          Decrementar
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setCounter(counter * 0)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
