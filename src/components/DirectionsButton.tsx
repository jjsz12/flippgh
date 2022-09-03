import { Button } from "semantic-ui-react";

interface DirectionsButtonProps {
  link?: string;
  displayText?: string;
  primary?: boolean;
  compact?: boolean;
}

function DirectionsButton({
  link,
  displayText = "Get Directions",
  primary = false,
  compact = false,
}: DirectionsButtonProps) {
  if (link) {
    return (
      <Button
        primary={primary}
        compact={compact}
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '.25rem'}}
      >
        {displayText}
      </Button>
    );
  }
  return <></>;
}

export default DirectionsButton;
