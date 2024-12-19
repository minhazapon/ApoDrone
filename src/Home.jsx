import BuyNow from "./home file/BuyNow";
import Camera from "./home file/Camera";
import Clients from "./home file/Clients";
import Drone from "./home file/Drone";
import Exprience from "./home file/Exprience";
import HomeBanner from "./home file/HomeBanner";
import Our from "./home file/Our";
import Sign from "./home file/Sign";
import Structure from "./home file/Structure";
import Ultra from "./home file/Ultra";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Exprience></Exprience>
            <BuyNow></BuyNow>
            <Camera></Camera>
            <Structure></Structure>
            <Our></Our>
            <Drone></Drone>
            <Clients></Clients>
            <Ultra></Ultra>
            <Sign></Sign>
            
        </div>
    );
};

export default Home;