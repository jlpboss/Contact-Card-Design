let renderer = {
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
    },
    makeContainer: function (id, where, containerClass = "container", rowClass = "row", colClass = "col") {
        this.makeTag("div", id + "Cont", where, containerClass)
        this.makeTag("div", id + "Row", id + "Cont", rowClass)
        this.makeTag("div", id + "Col", id + "Row", colClass)
    },
    setAtrubute: function (tagId, atrubute, value){
        let tag = document.getElementById(tagId);
        tag.setAttribute(atrubute, value);
    },
    drawImage: function (imgLink, id, where, classAttribute, altText){
        renderer.makeTag("img", id, where, classAttribute)
        renderer.setAtrubute(id, "src", imgLink)
        renderer.setAtrubute(id, "alt", altText)
    }
};

let card = {
    makeCard: function(){
        //renderer.makeContainer("topImg", "div1", "container justify-content-center", "row justify-content-center", "col-9 justify-content-center")
        renderer.makeTag("div", "mainCard", "div1", "card text-center h5 cardStuff")
        renderer.drawText("Jett Penington's Contact Info", "mainCard", "textStyle")
        renderer.drawImage("img/New Discord pfp.jpg", "roundImg", "mainCard", "circ poke justify-content-center", "Jetts_Avatar")
        
        renderer.makeContainer("links", "mainCard", "container", "row", "col-4 d-flex justify-content-center")
        renderer.makeTag("a", "githubA", "linksCol","")
        renderer.setAtrubute("githubA", "href", "https://github.com/jlpboss")
        renderer.drawImage("img/Github.png", "githubImg", "githubA", "icon", "githubLink")
        
        renderer.makeTag("div", "linksCol2", "linksRow", "col-4 d-flex justify-content-center")
        renderer.makeTag("a", "emailA", "linksCol2","")
        renderer.setAtrubute("emailA", "href", "mailto:jettpennington@gmail.com")
        renderer.drawImage("img/Email.png", "emailImg", "emailA", "icon", "emailLink")
        
        renderer.makeTag("div", "linksCol3", "linksRow", "col-4 d-flex justify-content-center")
        renderer.makeTag("a", "phoneA", "linksCol3","")
        renderer.setAtrubute("phoneA", "href", "tel:+8596933417")
        renderer.drawImage("img/Phone.png", "phoneImg", "phoneA", "icon", "phoneLink")
    }
}

card.makeCard();