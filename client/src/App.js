import React, {useState,useEffect} from "react";
import {
  Container,
  AppBar,
  Typography,
  // Groe,
  Grid,
  Grow,
} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from './styles';
import img from "./images/15.png";

export default function App() {
  const [currentId,setCurrentId]=useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} varient="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={img} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
