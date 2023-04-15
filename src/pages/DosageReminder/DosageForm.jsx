import React, { useState } from "react";

function DosageForm() {
  const [dosageName, setDosageName] = useState("");
  const [dosageTimes, setDosageTimes] = useState([]);
  const [numOfDosageTimes, setNumOfDosageTimes] = useState("");

  const handleNumOfDosageTimesChange = (event) => {
    const numOfDosageTimes = parseInt(event.target.value);
    if (!isNaN(numOfDosageTimes)) {
      setNumOfDosageTimes(numOfDosageTimes);
      const newDosageTimes = Array(numOfDosageTimes).fill("");
      setDosageTimes(newDosageTimes);
    } else {
      setNumOfDosageTimes("");
      setDosageTimes([]);
    }
  };

  const handleDosageTimeChange = (event, index) => {
    const newDosageTimes = [...dosageTimes];
    newDosageTimes[index] = event.target.value;
    setDosageTimes(newDosageTimes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dosageReminderInformation = {
      dosageName: dosageName,
      dosageTimes: dosageTimes,
    };
    // console.log(dosageTimes);
    // console.log(dosageName);
    console.log(dosageReminderInformation);
    // You can send the dosage times to the backend here
  };

  const handleDosageName = (event) => {
    event.preventDefault();
    setDosageName(event.target.value);
  };

  const dosageTimeInputs = dosageTimes.map((dosageTime, index) => (
    <div key={index} className="time-input-form-group mb-5 mr-5">
      <label className="font-bold capitalize">Dosage Time {index + 1}:</label>
      <input
        className="dosage-reminder-time p-3"
        type="time"
        value={dosageTime}
        onChange={(event) => handleDosageTimeChange(event, index)}
      />
    </div>
  ));

  return (
    <form onSubmit={handleSubmit} className="dosage-reminder-form">
      <div>
        <div className="dosage-reminder-form-group-main mb-3">
          <label className="font-bold capitalize" htmlFor="d-name">
            medicine name
          </label>
          <input
            className="p-2"
            type="text"
            name=""
            id="d-name"
            value={dosageName}
            onChange={handleDosageName}
            placeholder="enter the name of the medicine"
          />
        </div>
        <div className="dosage-reminder-form-group-main mb-3">
          <label className="font-bold capitalize">
            Number of Dosage Times:
          </label>
          <input
            className="p-2"
            type="number"
            min={0}
            max={20}
            value={numOfDosageTimes}
            onChange={handleNumOfDosageTimesChange}
          />
        </div>
      </div>
      <div className="all-time-inputs flex flex-wrap">{dosageTimeInputs}</div>
      <button
        type="submit"
        className="dosage-input-submit font-bold uppercase block p-3"
      >
        Submit dosage information
      </button>
    </form>
  );
}

export default DosageForm;
