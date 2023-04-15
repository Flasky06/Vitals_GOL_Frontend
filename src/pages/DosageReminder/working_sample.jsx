import React, { useState } from "react";

function DosageForm() {
  const [numOfDosageTimes, setNumOfDosageTimes] = useState(1);

  const handleNumOfDosageTimesChange = (event) => {
    const num = parseInt(event.target.value);
    if (!isNaN(num)) {
      setNumOfDosageTimes(num);
    } else {
      setNumOfDosageTimes(1);
    }
  };

  const generateTimeInputs = () => {
    const inputs = [];
    for (let i = 0; i < numOfDosageTimes; i++) {
      inputs.push(
        <div key={i}>
          <label htmlFor={`time-${i}`}>{`Time ${i + 1}: `}</label>
          <input type="time" id={`time-${i}`} name={`time-${i}`} />
        </div>
      );
    }
    return inputs;
  };

  return (
    <div>
      <label htmlFor="dosage-times">Number of Dosage Times: </label>
      <input
        type="number"
        id="dosage-times"
        name="dosage-times"
        value={numOfDosageTimes}
        min="0"
        onChange={handleNumOfDosageTimesChange}
      />
      <br />
      {generateTimeInputs()}
    </div>
  );
}

export default DosageForm;
