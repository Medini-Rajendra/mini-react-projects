import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiSelection];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId == -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiSelection(cpyMultiple);
  };

  return (
    <div className="flex gap-5 flex-col justify-center items-center h-screen w-screen">
      <button
        className={`py-2.5 px-5 text-white font-bold text-xl cursor-pointer ${
          enableMultiSelection ? "bg-cyan-900" : "bg-custom-color"
        }`}
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="w-500">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="bg-custom-color mb-2.5 py-2.5 px-5"
              key={dataItem.id}
            >
              <div
                className="flex text-white justify-between items-center"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h1 className="text-xl font-bold">{dataItem.question}</h1>
                {selected === dataItem.id ||
                multiSelection.indexOf(dataItem.id) !== -1 ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )}
              </div>
              {selected === dataItem.id ||
              multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="text-white h-auto">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
