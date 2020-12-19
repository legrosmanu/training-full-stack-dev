import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const RenderDish = ({ dish }) => {
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
};

const RenderComments = ({ comments }) => {
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
};

let DishDetail = (props) => {
    if (props.selectedDish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};


export default DishDetail;
