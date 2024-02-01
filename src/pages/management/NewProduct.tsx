// IMPORTS -
import { ChangeEvent, useState } from "react";
import Sidebar from "../../components/Sidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  console.log("TESTING: ", photo);

  // IMAGE -
  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="productManagement">
        <article>
          <form encType="multipart/form-data">
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price}
                required
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                onChange={(e) => setStock(Number(e.target.value))}
                value={stock}
                required
              />
            </div>

            <div>
              <label>Image</label>
              <input
                type="file"
                onChange={imageHandler}
                required
                accept="image/*"
              />
            </div>

            <button type="submit">Create product</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
