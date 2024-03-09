import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./../../components/loader/Loader";
import { useParams } from "react-router-dom";
function ProductDetailes() {
  const { id } = useParams();
  console.log(id);
  let [average, setAverage] = useState("");
  const [productdetailes, setProductDetailes] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const getProductDetailes = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/${id}/`
      );

      setAverage(data.avgRating);
      console.log(data.product);
      setProductDetailes(data.product);
      setError("");
    } catch (error) {
      console.log(error);
      setError("error to load data");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getProductDetailes();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div>
        {/* content */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center  h-75 w-100">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit  h-100 w-100"
                      src={productdetailes.mainImage.secure_url}
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  {productdetailes.subImages.map((ele) => (
                    <a
                      data-fslightbox="mygalley"
                      key={ele.public_id}
                      className="border mx-1 rounded-2"
                      target="_blank"
                      data-type="image"
                    >
                      <img
                        width={100}
                        height={100}
                        className="rounded-2"
                        src={ele.secure_url}
                      />
                    </a>
                  ))}
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{productdetailes.name}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#ffc107"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#ffc107"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#ffc107"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#ffc107"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#ffc107"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">{average}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="h5">${productdetailes.finalPrice}</span>
                    <span className="text-muted">/per box</span>
                  </div>
                  <p>{productdetailes.description}</p>
                  <div className="row">
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular:</dd>
                    <dt className="col-3">Stock:</dt>
                    <dd className="col-9">{productdetailes.stock}</dd>
                    <dt className="col-3">Price:</dt>
                    <dd className="col-9">{productdetailes.price}</dd>
                    <dt className="col-3">Discount:</dt>
                    <dd className="col-9">{productdetailes.discount}</dd>
                    <dt className="col-3">FinalPrice:</dt>
                    <dd className="col-9">{productdetailes.finalPrice}</dd>
                    <dt className="col-3">Sellers:</dt>
                    <dd className="col-9">{productdetailes.number_sellers}</dd>
                  </div>
                  <hr />
                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      <label className="mb-2">Size</label>
                      <select
                        className="form-select border border-secondary"
                        style={{ height: 35 }}
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    {/* col.// */}
                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Quantity</label>
                      <div className="input-group mb-3" style={{ width: 170 }}>
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          type="text"
                          className="form-control text-center border border-secondary"
                          placeholder={14}
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-warning shadow-0">
                    {" "}
                    Buy now{" "}
                  </a>
                  <a href="#" className="btn btn-primary shadow-0">
                    {" "}
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                  </a>
                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    {" "}
                    <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>

      {/*
   <div className="container p-4">
   <div className="row p-4">
     <div className="start col-6">
      <img src={productdetailes.mainImage.secure_url} className="w-75 h-75"/>

     </div>
     <div className="end col-6">
      <h3>{productdetailes.name}</h3>
      <p>{productdetailes.description}</p>

     </div>

  </div>
</div>
  

  */}
      {error ?? <p>{error}</p>}
    </>
  );
}

export default ProductDetailes;
