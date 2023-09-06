import { Container } from "react-bootstrap";
import NavBare from "./components/NavBare";
import Header from "./components/Header";
import Catecory from "./components/catecory";
import ItemsList from "./components/ItemsList";
import {Items} from "./data"
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(Items);
// get all category uniqe
  const allCat = ["الكل",...new Set(Items.map((i) => i.category))]

  // filter by cetecory
  const filterCategory = (cat) =>{
    if(cat === "الكل"){
      setItemsData(Items)
    }else{
      setItemsData(Items.filter(item => item.category === cat))
    }
  }

  // filter by word
  const filterWord = (word) =>{
    if(word !== ""){
     const newArr =  Items.filter((item) => item.title === word)
     setItemsData(newArr)
    }
  }
  return (
    <div >
        <NavBare filterWord={filterWord}/>
      <Container>
        <Header/>
        <Catecory filterCategory={filterCategory} allCat={allCat}/>
        <ItemsList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
