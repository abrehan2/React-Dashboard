// IMPORTS -
import Sidebar from '../../components/Sidebar';

const NewProduct = () => {



  
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="productManagement">

<article>
  <form>

<h2>New Product</h2>
<div>
  <label>
    Name
  </label>
  <input type="text" placeholder='Name'/>
</div>


  </form>

</article>



      </main>
    </div>
  );
}

export default NewProduct