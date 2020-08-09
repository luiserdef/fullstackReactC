import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText, BreadcrumbItem, Breadcrumb,
    Button, Modal, ModalHeader, ModalBody, Col, Row, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';


    function RenderDish({selectedDish}){

        if(selectedDish!=null){
            
            return(
                <div className="col-12 col-md-5 mt-1">
                        <Card>
                            <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                            <CardBody>
                                <CardTitle>{selectedDish.name}</CardTitle>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments!=null){
            const coms = comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
            });

            return(
                <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        {coms}
                        <Comment/>
                </div>
            );


        }
    }

 
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                <RenderDish selectedDish={props.dish}/>
                <RenderComments comments={props.comments}/> 
                </div>
            </div>
        );
    }

const maxLengtn = (len)=> (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
class Comment extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModelOpen:false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModelOpen:!this.state.isModelOpen
        });
    }

    handleSubmit(values){
        console.log("Comment is: "+JSON.stringify(values));
        alert("Comment is: "+JSON.stringify(values));
    }

    render(){
        return(
            <>
                <button onClick={this.toggleModal} type="button" class="btn btn-outline-dark"  aria-label="Left Align">
                    <span class="fa fa-pencil fa-lg" aria-hidden="true"> Submit Commnent</span>
                </button>
                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModelOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Col className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>

                            <Col className="form-group mt-2">
                                <Label htmlFor="username">Your Name</Label>
                                <Control.text model=".username" id="username" 
                                        name="username"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={
                                            {
                                                minLength:minLength(3), maxLengtn:maxLengtn(15)
                                            }
                                        }>
                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            minLength:"Must be greater than 2 characters",
                                            maxLengtn:"Must be less than 16 characters"
                                        }}>

                                    </Errors>
                            </Col>

                            <Col className="form-group mt-2">
                               <Label htmlFor="comment">Comment</Label>
                               <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control">

                               </Control.textarea>
                            </Col>

                            <Col className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>

        );
    };
}
        

export default DishDetail;