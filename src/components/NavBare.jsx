import { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function NavBare({filterWord}){
    const [wordSearch , setWordSearch] = useState('')
    const onSearch = ()=>{
        filterWord(wordSearch)
        setWordSearch('')

    }

    return(
        <Row className="m-0">
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#" className="text-danger">مطعم جديد</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="text"
                        placeholder="ابحث...."
                        className="mx-2 bg-white"
                        onChange={(e)=>setWordSearch(e.target.value)}
                        value={wordSearch}
                        />
                        <Button onClick={()=> onSearch()} variant="outline-success" className="bg-white text-danger">ابحث</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                </Row>
    )
}

export default NavBare;