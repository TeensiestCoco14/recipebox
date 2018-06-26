import React, { Component } from 'react';
import './App.css';
import Recipes from "./components/Recipes/Recipes";
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";

class App extends Component {
		
	state = {
		recipes: [
			{
				name: "Chocolate Chip Cookies",
				ingredients: [
					"Chocolate Chips",
					"Flour",
					"Milk",
					"Eggs",
					"Butter"
				],
				editing: false,
				key: 0
			},
			{
				name: "Spaghetti",
				ingredients: [
					"Pasta Noodles",
					"Red Sauce",
					"Ground Beef"
				],
				editing: false,
				key: 1
			}
		],
		addRecipe: false,
		newRecipe: "",
		showModal: false,
		newIngredients: []
	}

	//Functions for adding new recipe with Modal
	addRecipeHandler = () => {
		this.setState({
			showModal: true, 
			addRecipe: true
		});
	};

	recipeChangedHandler = (event) => {
		this.setState({
			newRecipe: event.target.value
		});
	}

	ingredientChangedHandler = (event) => {
		this.setState({
			newIngredients: event.target.value.split(",")
		});
	}

	confirmRecipeHandler = () => {
		if (this.state.newRecipe !== "" && this.state.newIngredients !== "") {
			this.setState({
				recipes: [
					...this.state.recipes,
					{
						name: this.state.newRecipe,
						ingredients: this.state.newIngredients,
						editing: false,
						key: this.state.recipes.length + 1
					}
				],
				addRecipe: false,
				showModal: false,
				newRecipe: "",
				newIngredients: []
			});
		} else {
			this.setState({
				addRecipe: false,
				showModal: false
			})
		}
	}

	//Functions for editing existing recipes
	editRecipeHandler = (id) => {
		for (let i = 0; i < this.state.recipes.length; ++i) {
			if (id === this.state.recipes[i].key) {
				this.state.recipes[i].editing = true;
				this.setState({
					newRecipe: this.state.recipes[i].name,
					newIngredients: this.state.recipes[i].ingredients
				})
				this.forceUpdate();
			}
		}
		this.setState({
			showModal: true
		});
	}

	confirmEditHandler = (id) => {
		for (let i = 0; i < this.state.recipes.length; ++i) {
			if (id === this.state.recipes[i].key) {
				this.state.recipes[i].editing = false;
				this.state.recipes[i].name = this.state.newRecipe;
				this.state.recipes[i].ingredients = this.state.newIngredients;
				this.forceUpdate();
			} 
		}
		this.setState({
			showModal: false,
			newRecipe: "",
			newIngredients: ""
		});
	}

	//Function for removing a recipe
	deleteRecipeHandler = (id) => {
		let state = [...this.state.recipes];
		for (let i = 0; i < this.state.recipes.length; ++i) {
			if (id === this.state.recipes[i].key) {
				state.splice(i, 1);
				this.setState({recipes: state});
			} 
		}
	}

	render() {
		return (
		<div className="App">
			<Recipes 
				recipes = {this.state.recipes} 
				modalOpen = {this.state.showModal}
				clicked = {this.editRecipeHandler}
				show = {this.state.showModal}
				updateName = {this.recipeChangedHandler}
				updateIngredients = {this.ingredientChangedHandler}
				confirm = {this.confirmEditHandler}
				recipeName = {this.state.newRecipe}
				ingredients = {this.state.newIngredients}
				delete = {this.deleteRecipeHandler}/>
			<Modal 
				adding = {this.state.addRecipe}
				clicked = {this.confirmRecipeHandler}
				recipeName = {this.state.newRecipe}
				ingredients = {this.state.newIngredients}
				changeRecipe = {this.recipeChangedHandler}
				changeIngredients = {this.ingredientChangedHandler}/>
			{!this.state.showModal ? <Button 
				clicked = {this.addRecipeHandler} 
				name = {"Add Recipe"}/> : null}
		</div>
		);
	}
}

export default App;
