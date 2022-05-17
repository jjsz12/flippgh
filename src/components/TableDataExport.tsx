import moment from "moment";
import { Button, Icon } from "semantic-ui-react";

const download = (content: BlobPart[], filename: string) => {
  try {
    const blob = new Blob(content, { type: "text/csv" });
    const element = window.document.createElement("a");
    element.href = window.URL.createObjectURL(blob);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } catch (err) {
    console.error(err);
  }
};

interface TableDataExportProps {
  generateData: () => string[];
  filenamePrefix: string;
}

export const TableDataExport = ({
  generateData,
  filenamePrefix,
}: TableDataExportProps) => {
  return (
    <Button
      icon
      size="tiny"
      onClick={() => {
        const content = generateData();
        download(
          content,
          filenamePrefix + "_" + moment().format("YYYY-MM-DD") + ".csv"
        );
      }}
      style={{ marginTop: "0.5rem" }}
    >
      <Icon name="file excel outline" /> Export
    </Button>
  );
};
