import AddForm from "./AddForm";
import InforBanner from "./InforBanner";
import Products from "./ProductAdd";
import Que from "./Que";




const Information = () => {

    
    return (
        <div>

            <InforBanner></InforBanner>
            <Que></Que>
            <AddForm></AddForm>
            <Products></Products>
           
        </div>
    );
};

export default Information;