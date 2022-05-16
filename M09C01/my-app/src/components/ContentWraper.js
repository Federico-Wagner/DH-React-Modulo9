import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWraper() {
    return (
      <div className="App">
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <TopBar></TopBar>
            <ContentRowTop></ContentRowTop>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
  
  export default ContentWraper;
  