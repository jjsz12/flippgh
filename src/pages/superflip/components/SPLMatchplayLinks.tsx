import MatchplayButton from "../../../components/MatchplayButton";

interface SPLMatchplayLinksProps {
  title?: string;
  randomGroupsLink?: string;
  tieredGroupsLink?: string;
}

export const SPLMatchplayLinks = ({
  title,
  randomGroupsLink,
  tieredGroupsLink,
}: SPLMatchplayLinksProps) => {
  return (
    <>
      {title ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        Random Groups:
        <MatchplayButton link={randomGroupsLink} primary compact />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        Tiered Groups:
        <MatchplayButton link={tieredGroupsLink} primary compact />
      </div>
    </>
  );
};
