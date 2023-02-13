import { PropsWithChildren } from "react";
import { Grid } from "semantic-ui-react";
import { useWindowSize } from "../hooks/useWindowSize";

function ContentContainer({ children }: PropsWithChildren<{}>) {
  const size = useWindowSize();
  let style = {};
  if (size.width && size.width > 640) {
    style = {
      marginLeft: "210px",
      padding: "1.5rem",
    };
  } else {
    style = {
      marginTop: "76px",
      padding: "1.5rem",
    };
  }

  return (
    <div style={style}>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          {children}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export { ContentContainer };
export default ContentContainer;
