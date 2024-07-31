import { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-500">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="bg-custom-color mb-2.5 py-2.5 px-5" key={dataItem.id}>
                            <div className="flex text-white justify-between items-center" onClick={() => handleSingleSelection(dataItem.id)}>
                                <h1 className="text-xl font-bold">{dataItem.question}</h1>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id? (
                                <div className="text-white h-auto">{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ): (
                    <div>No data found</div>
                )}
            </div>
        </div>
    )
}