import { Button } from "semantic-ui-react";

interface DirectionsButtonProps {
  link?: string;
}

function DirectionsButton({ link }: DirectionsButtonProps) {
  if (link) {
    return (
      <Button
        primary
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </Button>
    );
  }
  return <></>;
}

export default DirectionsButton;
