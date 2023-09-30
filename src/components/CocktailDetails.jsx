import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCocktailById } from "../features/cocktail/cocktailActions";
import Loader from "./Loader";

function TestComp() {
  const { loading, error, message, singleCocktail } = useSelector(
    (state) => state.cocktail
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  function isNotEmpty(value) {
    return (
      (typeof value === "string" && value.trim() !== "") ||
      (typeof value === "object" && Object.keys(value).length !== 0)
    );
  }

  useEffect(() => {
    if (id) {
      dispatch(getCocktailById(id));
    }
    if (error) {
      console.log(message);
    }
  }, [dispatch, id, error, message]);

  if (loading) {
    return (
      <div className="section">
        <Loader />
      </div>
    );
  }

  if (!isNotEmpty(singleCocktail)) {
    return (
      <div className="section">
        <h2 className="msg">no matched searches...</h2>
      </div>
    );
  }

  if (isNotEmpty(singleCocktail)) {
    const {
      strDrink,
      strDrinkThumb,
      strCategory,
      strGlass,
      strAlcoholic,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = singleCocktail;

    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];

    return (
      <div className="section">
        <header>
          <Link to="/cocktails">
            <button className="btn">Back Home</button>
          </Link>
        </header>
        <div className="drink">
          <img src={strDrinkThumb} alt={strDrink} className="img" />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {strDrink}
            </p>
            <p>
              <span className="drink-data">category :</span> {strCategory}
            </p>
            <p>
              <span className="drink-data">info :</span> {strAlcoholic}
            </p>
            <p>
              <span className="drink-data">glass :</span> {strGlass}
            </p>
            <p>
              <span className="drink-data">instructons :</span>{" "}
              {strInstructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item},</span> : null;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestComp;
