import BuyNow from "./home file/BuyNow";
import Camera from "./home file/Camera";
import Exprience from "./home file/Exprience";
import HomeBanner from "./home file/HomeBanner";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Exprience></Exprience>
            <BuyNow></BuyNow>
            <Camera></Camera>
            
        </div>
    );
};

export default Home;