import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    addComment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
    errMessage: "",
  };

  updateCommentField = (e) => {
    let addComment = { ...this.state.addComment };
    let currentId = e.currentTarget.id;

    addComment[currentId] = e.currentTarget.value;

    this.setState({ addComment });
  };

  componentDidUpdate = (previousProps) => {
    if (
      previousProps.editedCm.editCounter !== this.props.editedCm.editCounter
    ) {
      this.setState({
        addComment: {
          comment: this.props.editedCm.comment.comment,
          rate: this.props.editedCm.comment.rate,
          elementId: this.propsid,
        },
      });
    }
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      let response;

      if (this.props.editedCm.comment._id) {
        response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.editedCm.comment._id,
          {
            method: "PUT",
            body: JSON.stringify(this.state.addComment),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
            }),
          }
        );
      } else {
        response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/",
          {
            method: "POST",
            body: JSON.stringify(this.state.addComment),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
            }),
          }
        );
      }

      if (response.ok) {
        alert(
          `Comment ${this.props.editedCm.comment._id ? "edited!" : "saved!"}`
        );
        this.props.clearEditCommentState();
        this.setState({
          addComment: {
            comment: "",
            rate: 1,
            elementId: this.props.id,
          },
          errMessage: "",
        });

        this.props.onClick();
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
      });
    }
  };

  render() {
    return (
      <>
        <Form
          className="mt-4"
          onSubmit={this.submitComment}
          style={{
            width: "80%",
            height: "50%",
          }}
        >
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="comment" className="text-dark">
                  Add a Comment
                </Form.Label>

                <Form.Control
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Your comment"
                  value={this.state.addComment.comment}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="rate" className="text-dark">
                  Rate
                </Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.addComment.rate}
                  onChange={this.updateCommentField}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="elementId" className="text-dark">
                  Element ID
                </Form.Label>
                <Form.Control
                  type="text"
                  name="elementId"
                  id="elementId"
                  placeholder="Element ID"
                  value={this.state.addComment.elementId}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="flex justify-content-center mt-5">
            <Button
              variant="success"
              type="submit"
              style={{ fontSize: "20px" }}
            >
              {this.props.editedCm.comment._id ? "Edit" : "Submit"}
            </Button>
          </Row>
        </Form>
      </>
    );
  }
}

export default AddComment;
