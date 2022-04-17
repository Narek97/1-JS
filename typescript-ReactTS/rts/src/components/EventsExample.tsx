import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef?.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  return (
    <div>
      <input value={value} type="text" onChange={changeHandler} />
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      />
      <div
        style={{ width: 200, height: 200, background: "red", marginTop: 15 }}
      />
    </div>
  );
};

export default EventsExample;
