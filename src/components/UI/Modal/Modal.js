import React, {Component} from "react";
import Button from "../Button/Button";
import "./Modal.css"

class Modal extends Component {
	render() {
		let modal = <p></p>;
		if(this.props.adding) {
			modal = (
				<div className = "Modal">
					<h3 id = "name">Enter Recipe Name</h3>
					<input type = "text" value = {this.props.recipeName} onChange = {this.props.changeRecipe}/>
					<h3>Enter ingredients</h3>
					<p id = "ingredients">Please enter ingredients as a comma seperated list</p>
					<input type = "text" value = {this.props.ingredients} onChange = {this.props.changeIngredients} style = {{width: "75%"}}/>
					<br/>
					<br/>
					<Button clicked = {this.props.clicked} name = "Confirm Recipe"/>
				</div>
			);
		} else if (this.props.editing) {
			modal = (
				<div className = "Modal">
					<h3 id = "name">Edit Recipe Name</h3>
					<input type = "text" value = {this.props.recipeName} onChange = {this.props.changeRecipe}/>
					<h3>Edit ingredients</h3>
					<p id = "ingredients">Please edit ingredients as a comma seperated list</p>
					<input type = "text" value = {this.props.ingredients} onChange = {this.props.changeIngredients} style = {{width: "75%"}}/>
					<br/>
					<br/>
					<Button clicked = {this.props.confirm} name = "Confirm Edit"/>
				</div>
			);
		}

		return(
			modal
		);
	}
};

export default Modal;