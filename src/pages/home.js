
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
        <li>
            <Link to="quiz">Take The Quiz</Link>
        </li>
    </div>
  );
}

export default Home;
