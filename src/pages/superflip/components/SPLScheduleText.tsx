import { SPLTimesTable } from "./SPLTimesTable";

export const SPLScheduleText = () => {
  return (
    <>
      <h3>Summer 2023 Season Schedule</h3>
      <p>
        <b>Qualifying:</b>
        <SPLTimesTable type="qualifying" />
        <ul>
          <li>Week 1: Monday 7/10 @ Pins Mechanical Co. Pittsburgh</li>
          <li>Week 2: Monday 7/17 @ Pins Mechanical Co. Pittsburgh</li>
          <li>Week 3: Monday 7/24 @ Pins Mechanical Co. Pittsburgh</li>
          <li>Week 4: Monday 7/31 @ Pins Mechanical Co. Pittsburgh</li>
          <li>Week 5: Monday 8/7 @ Pins Mechanical Co. Pittsburgh</li>
          <li>Week 6: Monday 8/14 @ Pins Mechanical Co. Pittsburgh</li>
        </ul>
        <b>Finals:</b>
        <SPLTimesTable type="finals" />
        <ul>
          <li>
            Week 7 (Finals session 1): Monday 8/21 @ Pins Mechanical Co.
            Pittsburgh
          </li>
          <li>
            Week 8 (Finals session 2): Monday 8/28 @ Pins Mechanical Co.
            Pittsburgh <i>*if necessary</i>
          </li>
        </ul>
      </p>
    </>
  );
};
