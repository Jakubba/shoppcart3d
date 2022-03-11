import React, {useState} from "react";
import ProductCard from "./ProductCard";
import data from "./data";
import './App.scss';


const Products = () => {
    const [search,setSearch] = useState("");
    const searchText = (event) => {
        setSearch(event.target.value);
    }
    let dataSearch = data.productData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().includes(search.toString())
        )
    })

    return(
        <div className="catalog catalog-mobile">
            <section className="products-container products-container-mobile">
                <div className="row justify-content-center cart-mobile">
                    <div className="col-12 mb-5">
                        <div className="mb-3 col4 mx-auto">
                            <input type = "text"
                                   placeholder="Search..."
                                   className="form-control"
                                   value = {search}
                                   onChange={searchText.bind(this)}
                            />
                        </div>

                    </div>
                    {dataSearch.map((item, index)=>{
                        return(<ProductCard
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                        )
                    })}


                </div>
            </section>

        </div>
    )
}

export default Products;