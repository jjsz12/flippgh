import _ from "lodash";
import moment, { Moment } from "moment";
import { ReactNode, useRef, useState } from "react";
import { Button, Label, Modal, Table } from "semantic-ui-react";

export const Calendar = () => {
  const [addlRows, setAddlRows] = useState<any[]>([]);
  const nextWeekStartDayOffset = useRef(28);

  const now = moment();

  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState<ReactNode>();

  const renderDaySquare = (day: string, pastDay: boolean) => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#DDDDDD",
            padding: "2px",
          }}
        >
          {day}
        </div>
        <div
          style={{
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: pastDay
              ? `repeating-linear-gradient(
              135deg,
              #BBBBBB,
              #BBBBBB 10px,
              #DDDDDD 10px,
              #DDDDDD 20px
            )`
              : undefined,
          }}
        >
          <div style={{ padding: 4 }}>
            <Label circular color="green">
              League
            </Label>
            <Label circular color="blue">
              Tourney
            </Label>
            <Label circular color="yellow">
              Event
            </Label>
          </div>
        </div>
      </>
    );
  };

  const getHeaderFn = (date: string) => {
    return () => {
      setHeader(date);
      setContent(
        <>
          <div>
            <Label circular color="green" style={{ margin: 4 }}>
              League
            </Label>
            Some league info
          </div>
          <div>
            <Label circular color="blue" style={{ margin: 4 }}>
              Tourney
            </Label>
            Some tourney info
          </div>
          <div>
            <Label circular color="yellow" style={{ margin: 4 }}>
              Event
            </Label>
            Some event info
          </div>
        </>
      );
      setOpen(true);
    };
  };

  const renderCalendarRow = (startDay: Moment, firstRow: boolean = false) => {
    const cells: any[] = [];
    let i = 0;
    while (i < 7) {
      cells.push(
        <Table.Cell
          key={startDay.format("YYYYMMDD")}
          style={{ padding: 0 }}
          className="calendar-day-cell"
          onClick={getHeaderFn(startDay.format("dddd, MMMM Do"))}
        >
          {(firstRow && cells.length === 0) || startDay.date() === 1
            ? renderDaySquare(startDay.format("MMM DD"), startDay.isBefore(now))
            : renderDaySquare(startDay.format("DD"), startDay.isBefore(now))}
        </Table.Cell>
      );
      startDay.add(1, "day");
      i++;
    }
    return <Table.Row key={startDay.format("YYYYMMDD")}>{cells}</Table.Row>;
  };

  const renderModal = () => {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
      </Modal>
    );
  };

  return (
    <>
      <Table columns={7} unstackable textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Su</Table.HeaderCell>
            <Table.HeaderCell>M</Table.HeaderCell>
            <Table.HeaderCell>T</Table.HeaderCell>
            <Table.HeaderCell>W</Table.HeaderCell>
            <Table.HeaderCell>Th</Table.HeaderCell>
            <Table.HeaderCell>F</Table.HeaderCell>
            <Table.HeaderCell>Sa</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderCalendarRow(moment().day(0), true)}
          {renderCalendarRow(moment().day(7))}
          {renderCalendarRow(moment().day(14))}
          {renderCalendarRow(moment().day(21))}
          {addlRows}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell
              colSpan={7}
              style={{ borderTop: "1px solid #CCCCCC", padding: "8px" }}
            >
              <Button
                onClick={() => {
                  setAddlRows([
                    ...addlRows,
                    renderCalendarRow(
                      moment().day(nextWeekStartDayOffset.current)
                    ),
                    renderCalendarRow(
                      moment().day(nextWeekStartDayOffset.current + 7)
                    ),
                  ]);
                  nextWeekStartDayOffset.current =
                    nextWeekStartDayOffset.current + 14;
                }}
              >
                Show more weeks
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {renderModal()}
    </>
  );
};
