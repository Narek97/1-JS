import React from "react";

interface TrackProgressInterface {
  left: number;
  right: number;
  onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressInterface> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type={"range"}
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left}/{right}
      </div>
    </div>
  );
};

export default TrackProgress;
