const { Component } = require("react");
import {Card,cardTitle} from 'reactstrap'


class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt="dish.name"/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="row">
                <Card>

                </Card>    
            </div>
    )}

}

export default DishDetail