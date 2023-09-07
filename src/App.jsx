import React, { useState } from "react";
import Todo from "./component/Todo";
import Todolist from "./component/Todolist";
import Todoupdate from "./component/Todoupdate";

const App = () => {
   const [todos, setTodos] = useState([]);
   const [editValue, seteditValue] = useState('')
   console.log(editValue);
   const [active, setActive] = useState(false);
	function Addlist(text) {
		let newtodo = {
			id: Math.trunc(Math.random() * 50),
			text: text,
		};
		let todo = [newtodo, ...todos];
		console.log(todo);
		setTodos(todo);
	}
	function onDelte(id) {
		let res = todos.filter((item) => item.id !== id);
		setTodos(res);
		console.log(res);
	}
	function Editbtn(id) {
		
      seteditValue(id)
      setActive(prev=>!prev)
   }
   function EditInp(text) {
      // seteditValue(text)
      // console.log(id);
			let res = todos.filter((v) => {
				if (v.id === editValue) {
					return v.text = text;
				}
			});
			console.log(res);
			// setTodos(res);
   }
	return (
		<div className="wrapper">
			<div className="conteiner">
				<Todo addTodo={Addlist} />
				{todos.map((item, index) => (
					<div key={index}>
                  <Todolist todo={item} delete={onDelte} edit={Editbtn} />
                  <Todoupdate editinp={EditInp} active={active} setActive={setActive} value={ item.text} />
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
