import React from 'react';
import { Button,Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Container, Modal,ModalBody,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors } from 'react-redux-form'





class CommentForm extends Component(props){
    constructor(props){
        super(props);
        this.state={
            ModalOpen:false
        }
        
        
    }
    render(){
        return(
            <Modal>
                <ModalHeader>Submmit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm>

    
                    </LocalForm>
                </ModalBody>
            </Modal> 
        )
    }

}



function RenderDish({dish}){
    if(dish!=null){
        return(
            <Card>
                <CardImg top src={dish.image} alt="dish.name"/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );       
    }else{
        return(
            <div></div>
        )        
    }
}

function RenderComments({comments}){
    if(comments!=null){
        const comm=  comments.map(commentdish=>{
          //  let cdate=new Date(commentdish.date)
            return(
                <li>
                    <p>{commentdish.comment}</p> 
                    <p>-- {commentdish.author} , {/*cdate.toDateString()*/}
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentdish.date)))} </p>
                </li>             
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                  {comm} 
                </ul>                          
            </div>
        )
    }else{
        return(
            <div>nada</div>
        )
    }
}
const DishDetail=(props)=>{
    return(
        <Container>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <Button >Submit Comment</Button>
                    </div>
                </div>           
        </Container>
    )
}


export default DishDetail;