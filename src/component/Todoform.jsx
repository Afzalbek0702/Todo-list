import React, { useState } from "react";

import "./todo.css";
const Todoform = (props) => {
	const [newItems, setNewItems] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		props.addTodo(newItems);
		setNewItems("");
	}
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

export default Todoform;
