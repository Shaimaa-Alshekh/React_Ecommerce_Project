import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loader from "../../components/loader/Loader";
import { NavLink } from "react-router-dom";
import mystyle from "./product.module.css";
function Products() {
  const [products, setProductss] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?page=1&limit=10`
      );
      console.log(data.products);
      setProductss(data.products);
      setError("");
    } catch (error) {
      console.log(error);
      setError("error to load data");
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      {error ?? <p>{error}</p>}
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h1 className="mt-4 mb-5">
            <strong>Products</strong>
          </h1>
          <div className="row">
            {products.map((ele) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={ele._id}>
                <div className="card border border-danger">
                  <div className="bg-image " data-mdb-ripple-color="light">
                    <img
                      src={ele.mainImage.secure_url}
                      className={mystyle.imgprop}
                    />
                    <a href="#!">
                      <div className="mask">
                        {/*<div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>*/}
                      </div>
                      <div className="hover-overlay ">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body ">
                    <a href className="text-reset text-decoration-none">
                      <h5 className="card-title mb-3 text-truncate ">
                        {ele.name}
                      </h5>
                    </a>

                    <h6 className="mb-3">${ele.finalPrice}</h6>
                    <button className="btn btn-danger btn-sm" type="button">
                      <NavLink
                        to={`/productdetailes/${ele._id}`}
                        className="btn  btn-danger"
                      >
                        Detailes
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
