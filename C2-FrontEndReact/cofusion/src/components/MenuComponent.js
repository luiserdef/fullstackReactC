import React, {Component} from 'react';
import {Card,CardImg, CarImgOverlay, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
    }

onDishSelect(dish){
    this.setState({selectedDish:dish})
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
        )
    }else{
        return(
         <div></div>   
        )        
    }
}

    render(){
        return(
            <div className="container">
                <div className="row">
                {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish}/>
                  {/*this.renderDish(this.state.selectedDish)*/}
                </div>
            </div>
        );     
    };

}
export default Menu;