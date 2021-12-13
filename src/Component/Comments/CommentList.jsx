import React, { useState, useEffect, useRef } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axiosInstance from "../../api/EsteemAPI";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";



const INITIAL_HEIGHT = 46;

export default function CommentList() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [isExpanded, setIsExpanded] = useState(true);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([])

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState(user.username);
  const [room, setRoom] = useState("General");

  const client = new W3CWebSocket("ws://127.0.0.1:8000/ws/chat/" + room + "/");

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  


  const onButtonClicked = (e) => {
    client.send(
      JSON.stringify({
        type: "message",
        message: value,
        name: name,
      })
    );

    // THis causes an error
    axiosInstance.post(`comments/all/`, {
      comment: value,
      user: name,
  })
  .then((res) => {
      console.log(res.status)
  })
    setValue("")
    e.preventDefault();
  };

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("send the form data somewhere");
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axiosInstance.get("comments/all/")
      setComments(response.data)
    }
    fetchComments()

    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply! ", dataFromServer.type);
      if (dataFromServer) {
       
        setMessages([
          ...messages,
          {
            msg: dataFromServer.message,
            name: dataFromServer.name,
          },
        ]);
      }
    };
  }, [])


  return (
    <Container component="main" maxWidth="xs">
      {isLoggedIn ? (
        <div 
        >

          Room Name: {room}
          <Paper
          >
            {messages.map((message) => (
              <>
                <Card>
                  <CardHeader
                    avatar={<Avatar className="avatar">R</Avatar>}
                    title={message.name}
                    subheader={message.msg}
                  />
                </Card>
              </>
            ))}
          </Paper>
          <form className="form" noValidate onSubmit={onButtonClicked}>
            <TextField
              id="outlined-helperText"
              label="Make a comment"
              defaultValue="Default Value"
              variant="outlined"
              value={value}
              fullWidth
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Start Chatting
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <CssBaseline />
          <div className="paper">
             <Typography component="h1" variant="h5">
               Team Chat
             </Typography>
            <form
              className="form"
              noValidate
              onSubmit={() => setIsLoggedIn(true)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Chatroom Name"
                name="Chatroom Name"
                autoFocus
                value={room}
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Username"
                label="Username"
                type="Username"
                id="Username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Start Chatting
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}
