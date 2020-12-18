import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        const commentsRendered = comments.map((comment) => {
            let dateToDisplay = new Date(comment.date);
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            return (
                <li key={comment.id}>
                    {comment.comment} <br />
                -- {comment.author} , {dateToDisplay.toLocaleDateString("en-US", options)}
                </li>
            );
        });
        if (comments != null && comments.length > 0) {
            return (
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {commentsRendered}
                </ul>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

export default DishDetail;
