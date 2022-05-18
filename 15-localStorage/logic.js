const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('dishes')) || [];


const populate = (items, itemsList) => {
    if (!(items instanceof Array)) return false;
    console.log(items)

    itemsList.innerHTML = items.map((item, index) => {
        return `      
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? 'checked' : ''} />
                <label for="item${index}">${item.t}</label>
            </li>
        `
    }).join('');
};


const addItem = e => {
    e.preventDefault();
    const t = e.target.querySelector('[name="item"]').value,
        item = {
            t,
            done: false
        };
    items.push(item);
    populate(items, itemsList);
    localStorage.setItem('dishes', JSON.stringify(items));
    e.target.reset();


};

const done = e => {
    if (!e.target.matches('input')) return;
    const elem = e.target,
        idx = elem.dataset.index;
    items[idx].done = !elem.dataset.index

    localStorage.setItem('dishes', JSON.stringify(items));
};


addItems.addEventListener('submit', addItem);


document.onload = populate(items, itemsList)