import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({
  size = "tiny",
  color = "black",
  textAlign = "left",
  label,
  value,
}) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: textAlign }}>
        {label}
      </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
