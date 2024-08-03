import { useState, useEffect } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    const setColorUtility = (arrLength) => {
        return Math.floor(Math.random()*arrLength);
    }

    const handleCreateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';

        for (let i=0; i<6; i++) {
            hexColor += hex[setColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRandomRgbColor = () => {
        const r = setColorUtility(256);
        const g = setColorUtility(256);
        const b = setColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor == 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div className="h-screen w-screen" style={{background: color}}>
            <button onClick={()=> setTypeOfColor('hex')} className="bg-white mt-2 mr-1 p-2">Create HEX Color</button>
            <button onClick={()=> setTypeOfColor('rgb')} className="bg-white mr-1 p-2">Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor:handleCreateRandomRgbColor} className="bg-white p-2">Generate Random Color</button>
            <div className="justify-center items-center flex text-2xl text-white mt-9 flex-col">
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
                <h3>{color}</h3>
            </div>
        </div>
    )
}