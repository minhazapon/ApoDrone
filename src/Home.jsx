import BuyNow from "./home file/BuyNow";
import Camera from "./home file/Camera";
import Exprience from "./home file/Exprience";
import HomeBanner from "./home file/HomeBanner";
import Our from "./home file/Our";
import Structure from "./home file/Structure";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Exprience></Exprience>
            <BuyNow></BuyNow>
            <Camera></Camera>
            <Structure></Structure>
            <Our></Our>
            
        </div>
    );
};

export default Home;