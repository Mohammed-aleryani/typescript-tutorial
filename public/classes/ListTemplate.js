export default class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = () => {
            li.remove();
        };
        li.append(deleteBtn);
        this.container.append(li);
    }
}
