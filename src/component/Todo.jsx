import React, { useState } from "react";

// import './Todo.css';
import "./todo.css";
const Todo = (props) => {
	// 	const [error, setError] = useState("");
	const [newItems, setNewItems] = useState("");
	// 	const [items, setItems] = useState([]);
	// 	const [edit, setEdit] = useState("");
	// 	const [up, setUp] = useState("");
	// 	const [activ, setActiv] = useState(true);
	// console.log(edit);
	// console.log(update);
	// Functions !!!!!!!!!!!!!!

	function handleSubmit(e) {
		e.preventDefault();
		props.addTodo(newItems);
		setNewItems("");
	}

	// function onDelete(id) {
	// 	let res = items.filter((v) => v.id !== id);
	// 	setItems(res);
	// }
	// function onEdit(id, value) {
	// 	setActiv((prev) => !prev);
	// 	console.log(id);
	// 	console.log(value);
	// 	setEdit(value);
	// }
	// function onUpdate() {
	// 	setActiv((prev) => !prev);
	//    setUp(edit)
	//    console.log(edit);
	// }
	// function onChangeEdit(e) {
	// 	setEdit(e.target.value);
	// }

	return (
		<>
			<h1 className="title">Get Things Done!</h1>
			<form onSubmit={handleSubmit} className="inputdiv">
				<input
					value={newItems}
					type="text"
					className="inp"
					placeholder="Enter Todo"
					onChange={(e) => setNewItems(e.target.value)}
				/>
				<button className="add" type="submit">
					Add
				</button>
			</form>
		</>
	);
};

export default Todo;
