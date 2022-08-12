import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "./card";

function ProjectGridBox(props) {
  const { data } = props;
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMobile(mediaQuery.matches);
    console.log("Reloaded");
  }, []);

  return (
    <Grid
      container
      spacing={2}
      columns={20}
      sx={{
        width: "100%",
        margin: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data.map((item, id) => {
        return (
          <Grid
            item
            sm={20}
            md={10}
            lg={10}
            xl={10}
            key={id}
            sx={{
              width: mobile ? "95.95%" : "48.7%",
            }}
          >
            <Card data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProjectGridBox;
