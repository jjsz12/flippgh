import { Icon } from "semantic-ui-react";

function TrophyLegend() {
  const iconStyle = {
    paddingLeft: "1rem",
  };

  return (
    <div style={{ textAlign: "right" }}>
      <b>{"Values"}</b>
      <div style={iconStyle}>
        <Icon name="trophy" color="yellow" key="yellow" />
        {"= 3"}
      </div>
      <div style={iconStyle}>
        <Icon name="trophy" color="grey" key="grey" />
        {"= 2"}
      </div>
      <div style={iconStyle}>
        <Icon name="trophy" color="brown" key="brown" />
        {"= 1"}
      </div>
    </div>
  );
}

export { TrophyLegend };
