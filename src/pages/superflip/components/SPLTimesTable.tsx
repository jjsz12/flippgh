interface SPLTimesTableProps {
  type: "qualifying" | "finals";
}

export const SPLTimesTable = ({ type }: SPLTimesTableProps) => {
  if (type === "qualifying") {
    return (
      <table
        style={{
          border: "1px solid black",
          marginLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <tr>
          Check-in starts at <b>7:00pm</b>; must be checked in by <b>7:30pm</b>
        </tr>
        <tr>
          First round starts at <b>7:30pm</b> sharp!
        </tr>
      </table>
    );
  }
  if (type === "finals") {
    return (
      <table
        style={{
          border: "1px solid black",
          marginLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <tr>
          Check-in starts at <b>6:00pm</b>; must be checked in by <b>6:30pm</b>
        </tr>
        <tr>
          First round starts at <b>6:30pm</b> sharp!
        </tr>
      </table>
    );
  }
  return <></>;
};
