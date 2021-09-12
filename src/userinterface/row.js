UserInterface.model({
	name: "consoru.row",
	method: UserInterface.appendChild,
	callback: text => ({
		tagName: "div",
		className: "padding-xxs even-background-color-tundora2",
		textContent: text
	})
})
