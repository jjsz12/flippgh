import { Placeholder } from "semantic-ui-react";

interface TextPlaceholderProps {
  count?: number;
  width?: string;
}

function TextPlaceholder({ count = 5, width = "100%" }: TextPlaceholderProps) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    lines.push(<Placeholder.Line length="very long" key={i} />);
  }

  return (
    <div style={{ width: width }}>
      <Placeholder style={{ width: width }}>{lines}</Placeholder>
    </div>
  );
}

export { TextPlaceholder };
