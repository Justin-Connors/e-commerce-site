import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Typography, Avatar, Grid } from "@mui/material";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Profile = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  const classes = useStyles();
  return (
    <div>
          <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar className={classes.avatar} src="/path/to/profile-image.jpg" />
              </Grid>
              <Grid item>
                <Typography variant="h4">John Doe</Typography>
                <Typography variant="subtitle1">Software Developer</Typography>
              </Grid>
            </Grid>
          </div>
    </div>
  );
};

export default Profile;
