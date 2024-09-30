"use client";

import { useEffect, useState } from "react";

const ProgressBars: React.FC = () => {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) => prev.map((val) => (val < 100 ? val + 10 : 100)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-4 w-full">
      {values.map((value, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between mb-1">
            <span>Estadística {index + 1}</span>
            <span>{value}%</span>
          </div>
          <div className="relative w-full bg-gray-300 rounded-full">
            <div
              className={`absolute top-0 left-0 h-full bg-blue-500 rounded-full`}
              style={{ width: `${value}%`, transition: "width 1s ease-in-out" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
