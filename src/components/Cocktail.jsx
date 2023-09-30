import { Link } from "react-router-dom";

function Cocktail({
  idDrink,
  strDrink,
  strGlass,
  strAlcoholic,
  strDrinkThumb,
}) {
  return (
    <div className="cocktail-item">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} className="img" />
      </div>
      <div className="cocktail-info">
        <h2>{strDrink}</h2>
        <h3>{strGlass}</h3>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`}>
          <button className="btn">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Cocktail;
