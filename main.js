let renderer {
    clearPage: function () {
        let childNodes = div1.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
            div1.removeChild(childNodes[i]);
        }
    },
    makeTag: function (elem, id, where, classAttribute) {
        let cont = document.createElement(elem);
        let out = document.getElementById(where);
        cont.setAttribute("id", id);
        cont.setAttribute("class", classAttribute);
        out.appendChild(cont);
    },
    drawText: function (text, where, classAttribute = "") {
        let para = document.createElement("p");
        let node = document.createTextNode(text);
        let out = document.getElementById(where);
        para.setAttribute("class", classAttribute);
        para.appendChild(node);
        out.appendChild(para);
    },
    makeEvent: function (listening, event, funct, param = "()") {
        let element = document.getElementById(listening);
        element.addEventListener(event, function () {
            eval(funct + param); 
        });
    }
};