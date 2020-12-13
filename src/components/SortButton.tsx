import React, { useMemo } from "react";

interface Props {
  sortChange: () => void;
  sortAtoB: boolean;
}

const SortButton = ({ sortChange, sortAtoB }: Props) => {
  const containerStyle = useMemo(() => {
    return { display: "flex", justifyContent: "center", padding: 5 };
  }, []);
  return (
    <div style={containerStyle}>
      <button onClick={sortChange}>{"sort " + (sortAtoB ? "⟱" : "⟰")}</button>
    </div>
  );
};

export default SortButton;
