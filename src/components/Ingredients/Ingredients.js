import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import "./Ingredients.css";

const ingredients = (props) => {
	let ingredients = props.ingredients.map(ingredient => {
		return(
			<Ingredient key = {ingredient} name = {ingredient} />
		);
	});

	return(
		<ul className = "Ingredients">
			{ingredients}
		</ul>
	)
};

export default ingredients;