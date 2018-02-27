var rootNode = document.getElementById("root");

function filesTree(obj) {

    function isObjectEmpty(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }
    
    if (isObjectEmpty(obj)) return;
    let ul = document.createElement("ul");
    for (var key in obj) {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let i = document.createElement("i");
        let p = document.createElement("p");
        if (obj[key].folder === true) {
            i.innerHTML = "folder";
            i.className = "material-icons folder";
            div.className = "folder";
        } else {
            i.innerHTML = "insert_drive_file";
            i.className = "material-icons file";
            div.className = "file";
        } 
        p.innerHTML = obj[key].title;
        div.appendChild(i);
        div.appendChild(p);
        li.appendChild(div);
        if  (obj[key].children === false || obj[key].children === null) {
            var emptyItem = document.createElement("li");
            emptyItem.innerHTML = "Folder is empty";
            emptyItem.className = "empty-item";
            emptyItem.style.display = "none";
            li.appendChild(emptyItem);
            ul.appendChild(li);
        }
        var childrenUl = filesTree(obj[key].children);
        if (childrenUl) li.appendChild(childrenUl);
        ul.appendChild(li);
        div.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("show");
            this.nextElementSibling.style.display = "block";
            if (i.innerHTML === "folder") {  
                i.innerHTML = "folder_open";
            } else {
                i.innerHTML = "folder";  
                this.nextElementSibling.style.display = "none"; 
            }
        });
    }
    return ul;
}

rootNode.appendChild(filesTree(structure));