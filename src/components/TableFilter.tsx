import _ from "lodash";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItemProps,
  Icon,
  Label,
} from "semantic-ui-react";

export interface FilterItem {
  category: string;
  text?: string;
}

interface TableFilterProps {
  locations: Set<string>;
  setFilters: (filters: FilterItem[]) => void;
}

export const TableFilter = ({
  locations,
  setFilters: setFiltersFunc,
}: TableFilterProps) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  useEffect(() => {
    setFiltersFunc(filters);
  }, [setFiltersFunc, filters]);

  let locationOptions: DropdownItemProps[] = [];
  locations.forEach((loc) => {
    locationOptions.push({
      key: loc,
      text: loc,
      value: loc,
    });
  });
  locationOptions = _.sortBy(locationOptions, ["text"]);

  const renderFilterOptions = () => {
    return (
      <Dropdown
        placeholder="Location"
        multiple
        selection
        closeOnChange
        options={locationOptions}
        onChange={(e, { value }) => {
          setFilters(
            (value as []).map((loc: string) => {
              return { category: "location", text: loc };
            })
          );
        }}
        value={
          filters
            .filter((o) => o.category === "location")
            .map((o) => o.text) as string[]
        }
      />
    );
  };

  let filtersAppliedText = `${filters.length} filters active`;
  if (filters.length === 1) {
    filtersAppliedText = `${filters.length} filter active`;
  }

  return (
    <>
      <div>
        <Button icon size="tiny" onClick={() => setOpen(!open)}>
          <Icon name="filter" /> Filter
        </Button>
        {filters.length > 0 ? (
          <>
            <Label circular color="blue" size="tiny">
              {filtersAppliedText}
            </Label>
            <Label
              circular
              size="tiny"
              onClick={() => setFilters([])}
              style={{ cursor: "pointer" }}
            >
              Clear
            </Label>
          </>
        ) : null}
      </div>
      <div
        style={{
          marginTop: open ? "1rem" : "auto",
          visibility: open ? "visible" : "hidden",
          maxHeight: open ? "100px" : 0,
          opacity: open ? 1 : 0,
          transition: "opacity 200ms, max-height 200ms",
        }}
      >
        {renderFilterOptions()}
      </div>
    </>
  );
};
