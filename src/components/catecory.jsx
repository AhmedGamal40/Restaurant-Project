import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";



function Catecory({filterCategory , allCat }){
    const handelFilter = (cat)=>{
        filterCategory(cat)
    }
    return(
        <Row className="my-2 mb-5">
            <Col sm="12" className="d-flex justify-content-center">
                <Roll>

                {
                    allCat.length >=1 ? (
                        allCat.map((cat,index)=>{
                            return(
                                    <div>
                                    <button style={{border:"1px solid #b45b35"}} className="btn mx-2" onClick={()=>handelFilter(cat)}>{cat}</button>
                                    </div>
                            )
                        })
                    ) : null
                }
                </Roll>
            </Col>
        </Row>
    )
}

export default Catecory;