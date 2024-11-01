import { useParams } from "react-router-dom";
import React from "react";
export default function ProducDetail() {
const { id } = useParams();

  return (
    <div>
                  <h1>Produc Detail</h1>
                  <p>Detail for Product ID:{id}</p>
    </div>
  );
}

