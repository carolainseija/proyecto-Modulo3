import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Grid } from "@material-ui/core";
import "./App.css";
const fetch = require("node-fetch");

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function App(props) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);

  //fetch
  const seeUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const dataUser = await response.json();
    setUsers(dataUser);
  };

  //userEffect
  useEffect(() => {
    seeUsers();
  }, []);

  //songs

  const herMusic = async (user) => {
    console.log('el usuario que clickeo',user);
    setSongs(user);
   alert("usuario que  clickeo:" + " " + user.name);
     console.log('song one artist:', user.favoriteSongs[0].artist);
    console.log('album:', user.favoriteSongs[0].album);

  };
/*
  const handleClick = async (e, usuario) => {
    e.preventDefault();
    console.log("Se hizo click en el usaurio ", usuario);
    setSongs(usuario);
  };*/
  /*const seeUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const dataUser = await response.json();
    setUsers(dataUser);
    console.log('users:', dataUser);
    console.log('songs:', dataUser[0].favoriteSongs[0].artist);

  };*/

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <h1 className="nameTitle">{props.title}</h1>
          <div className="logoMateify"></div>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">
                      {" "}
                      <AccountCircleIcon /> {props.name}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <FormatColorTextIcon /> {props.nickName}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <CheckCircleOutlineIcon /> {props.age}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      <MailIcon /> {props.mail}{" "}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((dataUser) => (
                    <StyledTableRow key={dataUser._id}>
                      <StyledTableCell component="th" scope="row">
                        {dataUser.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <button onClick={(e) => herMusic(dataUser)}>
                          {" "}
                          <LibraryMusicIcon />
                        </button>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {dataUser.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {dataUser.age}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {dataUser.mail}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div class="secondTable">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">
                      {" "}
                      {props.nameSong}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {props.album}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {props.duration}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      {props.artist}{" "}
                    </StyledTableCell>

                    {/* <StyledTableCell align="left"> <MailIcon/> {props.songs} </StyledTableCell>*/}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((dataUser) => (
                    <StyledTableRow key={dataUser._id}>
                      <StyledTableCell component="th" scope="row">
                        name
                      </StyledTableCell>
                      <StyledTableCell align="left">
                      album
                      </StyledTableCell>
                      <StyledTableCell align="left">
                       {dataUser.favoriteSongs.duration}
                        duracion
                      </StyledTableCell>
                      <StyledTableCell align="left">
                       etc
                      </StyledTableCell>
                    </StyledTableRow>
                 ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
