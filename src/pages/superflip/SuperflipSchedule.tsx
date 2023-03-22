import ContentContainer from "../../components/ContentContainer";

export const SuperflipSchedule = () => {
  return (
    <ContentContainer>
      <h1>Superflip Pinball League (SPL)</h1>
      <h3>Spring 2023 Season Schedule</h3>
      <p>
        <i>
          <b>Qualifying: </b>Check-in starts at <b>7:00pm</b>; first round
          starts at <b>7:30pm</b> sharp!
        </i>
        <ul>
          <li>Week 1: Monday 4/3</li>
          <li>Week 2: Monday 4/10</li>
          <li>Week 3: Monday 4/17</li>
          <li>Week 4: Monday 4/24</li>
          <li>Week 5: Monday 5/1</li>
          <li>Week 6: Monday 5/8</li>
        </ul>
        <i>
          <b>Finals: </b>Check-in starts at <b>6:00pm</b>; first round starts at{" "}
          <b>6:30pm</b> sharp!
        </i>
        <ul>
          <li>Week 7 (Finals session 1): Monday 5/15</li>
          <li>
            Week 8 (Finals session 2): Monday 5/22 <i>*if necessary</i>
          </li>
        </ul>
      </p>
    </ContentContainer>
  );
};
