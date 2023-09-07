import React from 'react'
import { ImBin2 } from "react-icons/im";
import { PiNotePencilBold } from "react-icons/pi";
function Todolist({ todo, delete: onDelete, edit:onEdit}) {
   return (
			// <div>
			// 	<div key={props.todo.id}>
			// 		<input
			// 			// defaultValue={edit}
			// 			type="text"
			// 			className="inp"
			// 			placeholder="Update Todo"
			// 			// onChange={(e) => onChangeEdit(e)}
			// 		/>
			// 		<button className="add" >
			// 			Update
			// 		</button>
			// 	</div>
			// </div>
			<div className="item">
				<h3>{todo.text}</h3>
				<del className="btns">
					<div className="delbtn" onClick={()=> onDelete(todo.id)}>
						<ImBin2 />
					</div>
					<div className="editbtn" onClick={()=>{onEdit(todo.id)}}>
						<PiNotePencilBold />
					</div>
				</del>
			</div>
		);
}

export default Todolist