import { Button } from "semantic-ui-react";

interface MatchplayButtonProps {
  link?: string;
}

function MatchplayButton({ link }: MatchplayButtonProps) {
  return (
    <Button
      primary
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginBottom: "0.5rem" }}
    >
      Go to Matchplay
    </Button>
  );
}

export default MatchplayButton;
