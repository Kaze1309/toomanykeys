
import { Link } from "react-router-dom";
// function handleClick(event){
//   var ntl = (event.target.value);
//   switch (ntl) {
//     case 10:
//       setupTest(10);
//       return wordBox;
//       break;
//     case 25:
//       setupTest(25);
//       return wordBox;
//     case 50:
//       setupTest(50);
//       return wordBox;
//     case 100:
//       setupTest(100);
//       return wordBox;
//     default:
//       break;
//   }

export function LandingPage() {
  return (
    <>
      <h1 className="main-header">Too-many-Keys</h1>
    
      <h1 className="test-instruction">Choose The Test Size</h1>
      <div className="words">
        <h4 style={{ display: "inline" }}>words : </h4>
        <Link to="tt10">
          <button className="test" value={10}>
            10
          </button>
        </Link>
        <Link to="tt25">
          <button className="test" value={25}>
            25
          </button>
        </Link>
        <Link to="/tt50">
          <button className="test" value={50}>
            50
          </button>
        </Link>

        <Link to="/tt100">
          <button className="test longest" value={100}>
            100
          </button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
