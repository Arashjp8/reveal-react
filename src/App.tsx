import RevealWrapper from "./components/RevealWrapper";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";

const App = () => {
    return (
        <RevealWrapper>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
        </RevealWrapper>
    );
};

export default App;
