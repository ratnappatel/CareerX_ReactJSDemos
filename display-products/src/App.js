import './App.css';
import ItemList from './ItemList';
//import ProductListBS from './ProductListBS';

function App() {
  const products=[
    {
      "id": 101,
      "img":"../assets/surfExcel.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    },
    {
      "id": 102,
      "img":"../assets/surfExcel.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    },
    {
      "id": 103,
      "img":"../assets/surfExcel.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    }
  ]
  return (
    <div >
      <ItemList></ItemList>
       {/*  { products.map(p=>{
          return(
          <div key={p.id} className="product">
            <img src={p.img} alt={p.title}></img>
            <h5>{p.title}</h5>
            <p>{p.desc}</p>
            <h6>{p.price}</h6>
          </div>)
        })}  */}
        <hr></hr>
        {/* <ProductListBS prds={products}></ProductListBS>      */}
    </div>
  );
}

export default App;
