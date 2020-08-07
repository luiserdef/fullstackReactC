import React from 'react';
import {Card,CardImg, CardText, CardBody, CardTitle, Row, Container} from 'reactstrap';

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

function RenderComments({dish}){
    if(dish!=null){
        const comm= dish.comments.map(commentdish=>{
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
            <div></div>
        )
    }
}
const DishDetail=(props)=>{
    return(
        <Container>
    <Row>
         <div className="col-12 col-md-5 m-1">
             <RenderDish dish={props.dish}/>
            {/*this.renderDish(this.props.dish)*/}
         </div>
         <div className="col-12 col-md-5 m-1">
             {/*this.renderComments(props.dish)*/}  
             <RenderComments dish={props.dish}/>
         </div>
    </Row>             
        </Container>
    )
}


export default DishDetail;