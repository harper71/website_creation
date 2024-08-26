const todoList = [
	{
		name: 'make dinner',
		dueDate: '2024-08-19'
	},
	{
		name: 'bake cake',
		dueDate: '2024-08-19'
	}
];
function renderTodo() {
let todeListHtml = '';
for (let index = 0; index < todoList.length; index++) {
	const elementsObject = todoList[index];
	const { name, dueDate } = elementsObject;
	const html = `	
		<div>${name}</div>
		<div>${dueDate}</div> 
		<button class="delete-css" onclick="
			todoList.splice(${index}, 1);
			renderTodo();
		">Delete</button>
	`;
	todeListHtml += html;
}

console.log(todeListHtml);
document.querySelector('.js-todo-list')
	.innerHTML = todeListHtml;
}


function addTodo() {
	const inputElement = document.querySelector('.js-input');
	const dueDateElement = document.querySelector('.js-date-input');
	const dueDate = dueDateElement.value;
	const name = inputElement.value;

	todoList.push({
		name,
		dueDate
	});
	console.log(todoList);
	inputElement.value = '';
	
	renderTodo();	
}

const addButtonElement = document.querySelector('.js-add-button');
addButtonElement.addEventListener('click', () => {
	addTodo();
})