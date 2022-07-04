export class BoardDisplayer{

    createButton(button_display){
        let btn = document.createElement("button")
        btn.innerHTML = button_display
        btn.type = "button"
        btn.onclick = function () {
            alert("Button is clicked");
        };

        document.body.appendChild(btn);
    }
}

let displayer = new BoardDisplayer()
displayer.createButton("hi")