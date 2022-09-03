import { Button } from "semantic-ui-react";

interface MatchplayButtonProps {
  link?: string;
  displayText?: string;
  primary?: boolean;
  compact?: boolean;
}

function MatchplayButton({
  link,
  displayText = "Go to Matchplay",
  primary = false,
  compact = false,
}: MatchplayButtonProps) {
  return (
    <Button
      primary={primary}
      compact={compact}
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '.25rem 0'}}
    >
      {displayText}
    </Button>
  );
}

export default MatchplayButton;
