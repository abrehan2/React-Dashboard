// IMPORTS -
import {Hourglass} from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="wrapper">
      <Hourglass
        visible={true}
        height="50"
        width="50"
        wrapperStyle={{}}
        wrapperClass="loader"
        colors={["#061826", "#f26419"]}
      />
    </div>
  );
}

export default Loader;