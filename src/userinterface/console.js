UserInterface.model({
	name: "consoru.console",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		id: "console",
		className: "position-fixed bottom-0 right-0 width-100 z-index-3",
		children: [
			{
				tagName: "div",
				className: "tab-content background-color-mineshaft"
			},
			{
				tagName: "div",
				className: "bar background-color-silver display-grid grid-auto-flow-column",
				children: [
					{
						tagName: "div",
						className: "tabs display-grid justify-content-flexstart grid-auto-column-maxcontent grid-auto-flow-column"
					},
					{
						tagName: "div",
						className: "display-grid justify-content-flexend grid-auto-column-maxcontent grid-auto-flow-column",
						children: [
							{
								className: "closeBtn border-width-0 background-color-silver hover-color-tosca",
								tagName: "button",
								textContent: "x"
							}
						]
					}
				]
			}
		]
	}
})
