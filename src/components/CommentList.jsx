import React from "react";
import { ListGroup, Badge, Spinner, Alert, Button } from "react-bootstrap";
class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      let comments = await response.json();
      comments = comments.reverse();
      console.log(comments);
      setTimeout(() => {
        this.setState({ comments: comments, loading: false });
      }, 2000);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.submitCounter !== this.props.submitCounter) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
    if (previousProps.deleteCounter !== this.props.deleteCounter) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
  };

  deleteComment = async (commentID) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentID,
        {
          method: "DELETE",
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      if (response.ok) {
        // checking the ok property which stores the successful result of the operation
        alert("Comment deleted successfully");
        this.props.onClick();
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="mb-5">
        {this.state.loading ? (
          <Spinner
            animation="grow"
            variant="success"
            style={{ marginLeft: "45%" }}
          />
        ) : (
          <>
            {this.state.comments.length === 0 ? (
              <Alert variant="warning">No comments to show</Alert>
            ) : (
              <>
                {this.state.comments.map((comment, index) => {
                  let variant = "";

                  switch (comment.rate) {
                    case 1:
                      variant = "danger";
                      break;
                    case 2:
                      variant = "warning";
                      break;
                    case 3:
                      variant = "secondary";
                      break;
                    default:
                      variant = "success";
                      break;
                  }
                  return (
                    <ListGroup key={index}>
                      <ListGroup.Item className="commentDelete text-dark  d-flex justify-content-between align-items-center">
                        {comment.comment}
                        <div className="ml-2 mr-0 d-flex align-items-center">
                          Rate
                          <Badge pill variant={variant} className="ml-1">
                            {comment.rate}
                          </Badge>
                        </div>
                        <span style={{ display: "none" }}>
                          <Button
                            variant="danger"
                            onClick={() => {
                              this.deleteComment(comment._id);
                            }}
                            className="mr-2"
                          >
                            DELETE
                          </Button>
                          <Button
                            variant="info"
                            onClick={() => this.props.editCm(comment)}
                          >
                            EDIT
                          </Button>
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default CommentList;
