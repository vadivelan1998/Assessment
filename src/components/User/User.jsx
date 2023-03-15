import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, getUser } from "../../redux/user/userAction";

import "./User.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const User = () => {
  const [filter, setFilter] = useState("");
  const [userData, setUserData] = useState({});
  const [usernameFilter, setUsernameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const rowActionHandler = (e) => {
    setData(e);
    handleClickOpen();
  };
let handleInput=(e)=>{
  setUserData({ ...userData,[e.target.name]:e.target.value})
}
let handleSubmit=(e)=>{
e.preventDefault()
dispatch(add(userData))
}
  return (
    <Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          variant="h4"
        >
          {data?.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="h5" gutterBottom>
            Address:
          </Typography>
          <Typography ml={4} gutterBottom>
            Street : {data?.address?.street}
          </Typography>
          <Typography ml={4} gutterBottom>
            City : {data?.address?.city}
          </Typography>
          <Typography ml={4} gutterBottom>
            Zipcode : {data?.address?.zipcode}
          </Typography>
          <Typography sx={{ width: "500px" }} gutterBottom>
            Phone : {data?.phone}
          </Typography>
          <Typography gutterBottom>
            Website :{" "}
            <a href={"https://" + data?.website} target="_blank">
              {data?.website}
            </a>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          name="id"
          type="text"
          placeholder="id"
        />
        <input type="submit" value="add" />
      </form>

      <div className="table">
        <br />
        <br />
        <input
          style={{ marginLeft: "10px" }}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="filter by name"
          name=""
          id=""
        />
        <input
          style={{ marginLeft: "10px" }}
          onChange={(e) => {
            setUsernameFilter(e.target.value);
          }}
          type="text"
          placeholder="filter by username"
          name=""
          id=""
        />
        <input
          style={{ marginLeft: "10px" }}
          onChange={(e) => {
            setEmailFilter(e.target.value);
          }}
          type="text"
          placeholder="filter by email"
          name=""
          id=""
        />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user
              ?.filter((e) => e.name.toLowerCase().includes(filter))
              .filter((e) => e.username.toLowerCase().includes(usernameFilter))
              .filter((e) => e.email.toLowerCase().includes(emailFilter))
              .map((e, i) => {
                return (
                  <>
                    <tr
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => {
                        rowActionHandler(e);
                      }}
                    >
                      <Tooltip title={e.id} placement="bottom">
                        <td>{e?.id}</td>
                      </Tooltip>
                      <Tooltip title={e.name} placement="bottom">
                        <td>{e?.name}</td>
                      </Tooltip>
                      <Tooltip title={e.username} placement="bottom">
                        <td>{e?.username}</td>
                      </Tooltip>
                      <Tooltip title={e.email} placement="bottom">
                        <td>{e?.email}</td>
                      </Tooltip>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
