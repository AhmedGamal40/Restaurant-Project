import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

function ItemsList({itemsData}){
    return(
        <Row>
            <Zoom>

            {
                itemsData.length >=1 ? (
                    itemsData.map((item,index)=>{
                        return(

                                <Col sm="12" className="mb-3" key={index}>
                                    <Card className="d-flex flex-row" style={{backgroundColor:"#F8F8F8"}}>
                                    <Card.Img className="image-item" style={{width:"252px" , height:"180px" ,borderRadius:"5px"}} variant="top" src={item.imgUrl} />
                                    <Card.Body>
                                    <Card.Title className="d-flex justify-content-between">
                                        <div  className="item-title">{item.title}</div>
                                        <div  className="item-price">{item.price}</div>
                                    </Card.Title>
                                    <Card.Text className="py-2">
                                        <div className="item-describtion">{item.description}</div>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                        )
                    })
                    
                    ) :<h2 className="text-center">لا توجد قائمه</h2>
                }
                </Zoom>
        </Row>
    )
}

export default ItemsList;