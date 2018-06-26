import React, {Component} from "react";
import Recipe from "./Recipe/Recipe";
import Button from "../UI/Button/Button";
import "./Recipes.css";
import Modal from "../UI/Modal/Modal";

class recipes extends Component {	

	render() {
		let recipes = <h3>No Current Recipes</h3>;
		if (this.props.recipes) {
		recipes = this.props.recipes.map((recipe) => {
			return(
				<div className = "Recipe"  key = {recipe.key}>
					<Recipe name = {recipe.name} ingredients = {recipe.ingredients}/>
					{!this.props.show ? <Button clicked = {() => this.props.clicked(recipe.key)} name = "Edit Recipe"/> : null}
					{!this.props.show ? <Button clicked = {() => this.props.delete(recipe.key)} name = "Delete Recipe"/> : null}
					<Modal 
						show = {this.props.show}
						editing = {recipe.editing}
						confirm = {() => this.props.confirm(recipe.key)}
						recipeName = {this.props.recipeName}
						ingredients = {this.props.ingredients}
						changeRecipe = {this.props.updateName}
						changeIngredients = {this.props.updateIngredients}/>
				</div>
			);
		});
		}

		return(
			<div>
				{recipes}
			</div>
		);
	}
}

export default recipes