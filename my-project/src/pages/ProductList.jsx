import { Link } from "react-router-dom";

const products =[
  {id: 1, name: "Ten"},
  {id: 2, name: "Tang"},
  {id: 3, name: "First"},
  {id: 4, name: "Best"}, 
];


export default function ProductList() {
  return (
    <div>
     <h1> ProductList</h1> 
     <ul>
      {products.map((product)=> (
        <li key = {product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
     </ul>
      </div>
  )
}

