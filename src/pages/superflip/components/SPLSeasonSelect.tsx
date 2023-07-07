import { Dropdown } from "semantic-ui-react";

interface SPLSeasonSelectProps {
  options: { key: string; text: string; value: number }[];
  value: number;
  setValue: (value: number) => void;
}

export const SPLSeasonSelect = ({
  options,
  value,
  setValue,
}: SPLSeasonSelectProps) => {
  return (
    <Dropdown
      selection
      options={options}
      value={value}
      onChange={(_, { value }) => {
        setValue(value as number);
      }}
    />
  );
};
