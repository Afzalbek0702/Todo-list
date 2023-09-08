import React, { useState } from "react";
import Todoform from "./component/Todoform";
import Todolist from "./component/Todolist";
import Todoupdate from "./component/Todoupdate";

const App = () => {
   const [todos, setTodos] = useState([]);
   const [editValue, seteditValue] = useState('')
   const [active, setActive] = useState(false);
	function Addlist(text) {
		let newtodo = {
			id: Math.trunc(Math.random() * 50),
			text: text,
		};
		let todo = [newtodo, ...todos];
		setTodos(todo);
	}
	function onDelte(id) {
		let res = todos.filter((item) => item.id !== id);
		setTodos(res);
	}
	function Editbtn(id) {
		
      seteditValue(id)
      setActive(prev=>!prev)
   }
   function EditInp(text) {
			todos.filter((v) => {
				if (v.id === editValue) {
					return v.text = text;
				}
			});
   }
	return (
		<div className="wrapper">
			<div className="conteiner">
				<Todoform addTodo={Addlist} />
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
