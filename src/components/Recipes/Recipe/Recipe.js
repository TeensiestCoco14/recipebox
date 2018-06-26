import React from "react";
import Collapsible from "react-collapsible";
import Ingredients from "../../Ingredients/Ingredients";
import "./Recipe.css";

const recipe = (props) => {
	return(
		<Collapsible trigger = {props.name}>
			<Ingredients ingredients = {props.ingredients} />
		</Collapsible>
	);
};

export default recipe;