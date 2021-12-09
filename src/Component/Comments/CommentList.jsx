import React, { useState, useEffect, useRef } from "react";
import userPhoto from './../images/userPhoto.jpg'
import useDynamicHeightField from "../useDynamicHeightField";
import './../Comments.css'
import cn from 'classnames'
import Comment from './Comment'
import axiosInstance from "../../api/EsteemAPI";

const INITIAL_HEIGHT = 46;

export default function CommentList() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([])

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);

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
  }, [])

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <div className="header">
          <div className="user">
            <img
              src={userPhoto}
              alt="User avatar"
            />
            <span>{user.username}</span>
          </div>
        </div>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <label htmlFor="comments">What are your thoughts?</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="What are your thoughts?"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Respond
          </button>
        </div>
      </form>
    </div>
  );
}
