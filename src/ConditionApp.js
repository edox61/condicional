import React, { useState } from "react";

const ConditionApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setCondition(!condition)}>Toggle</button>
      {/* { condition ? <h1>True</h1> : <h1>False</h1> } */}
      {condition && <h1>True</h1>}
    </div>
  );
};
export default ConditionApp;
