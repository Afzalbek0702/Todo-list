import React, { useState } from "react";

const Todoupdate = ({ editinp: editInp, active, setActive, value }) => {
	const [inp, setInp] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		editInp(inp);
		setInp("");
		setActive((prev) => !prev);
	}
	return (
		<form className={`inputdiv ${active ? "active" : "disable"}`}>
			<input
				defaultValue={value}
				type="text"
				className="inp"
				placeholder="Update Todo"
				onChange={(e) => setInp(e.target.value)}
			/>
			<button onClick={handleSubmit} className="add" type="submit">
				Add
			</button>
		</form>
	);
};

export default Todoupdate;
