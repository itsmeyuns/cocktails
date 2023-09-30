import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it is a dead end</h1>
          <Link to="/">
            <button className="btn">Back Home</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error;
