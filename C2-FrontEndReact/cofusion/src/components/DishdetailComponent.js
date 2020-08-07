import React, {Component} from 'react';
import {Card,CardImg, CardText, CardBody, CardTitle, Row} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

renderDish(dish){
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

renderComments(dish){
    if(dish!=null){
        const comm= dish.comments.map(commentdish=>{
            let cdate=new Date(commentdish.date)
            return(
                <div key={commentdish.id}>                
                    <p>{commentdish.comment}</p> 
                    <p>-- {commentdish.author} , {cdate.toDateString()} </p>
                </div>                 
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                {comm}                           
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}
render(){
    return(
    <Row>
         <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDishshow)}
         </div>
         <div className="col-12 col-md-5 m-1">
             {this.renderComments(this.props.selectedDishshow)}  
         </div>
    </Row> 
    )

}

}
export default DishDetail;