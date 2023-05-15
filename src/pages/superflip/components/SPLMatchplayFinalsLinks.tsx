import MatchplayButton from "../../../components/MatchplayButton";

const aDivLink = "https://next.matchplay.events/tournaments/103751";
const bDivLink = "https://next.matchplay.events/tournaments/103753";
const xDivLink = "https://next.matchplay.events/tournaments/103754";

export const SPLMatchplayFinalsLinks = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        SPL Spring 2023 Finals Links
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "2rem" }}>A Division:</span>
        <MatchplayButton link={aDivLink} primary compact />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "2rem" }}>B Division:</span>
        <MatchplayButton link={bDivLink} primary compact />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "2rem" }}>X Division:</span>
        <MatchplayButton link={xDivLink} primary compact />
      </div>
    </>
  );
};
