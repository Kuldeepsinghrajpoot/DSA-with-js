const button = {
    label: "Click me",
    click: function() {
        console.log(this.label);
    }
};

const boundClick = button.click.bind(button);
document.getElementById("myButton").addEventListener("click", boundClick);
