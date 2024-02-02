// IMPORTS -
import { ChangeEvent, FormEvent, useState } from "react";
import Sidebar from "../../components/Sidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Nike shoes");
  const [price, setPrice] = useState<number>(20000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  // IMAGE -
  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="productManagement">
        <section>
          <strong>Id: dfdccvbvhgf</strong>
          <img src={photo} alt={`Product: ${name}`} />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">Available - {stock} </span>
          ) : (
            <span className="red">Not available</span>
          )}

          <h3>${price}</h3>
        </section>

        <article>
          <form encType="multipart/form-data" onSubmit={submitHandler}>
            <h2>Update Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setNameUpdate(e.target.value)}
                value={nameUpdate}
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
                value={priceUpdate}
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                onChange={(e) => setStockUpdate(Number(e.target.value))}
                value={stockUpdate}
              />
            </div>

            <div>
              <label>Image</label>
              <input type="file" onChange={imageHandler} accept="image/*" />
            </div>

            <button type="submit">Update product</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
