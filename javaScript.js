const container = document.querySelector('.container');

for(let i = 0; i < 16; i ++)
{
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.display = 'flex';
    for(let j = 0; j < 16; j++)
    {
        const column = document.createElement('div');
        column.classList.add('column');
        column.setAttribute('style', 'width: 50px; height: 50px; border: 1px solid black;');
        row.appendChild(column);
    }
    container.appendChild(row);
}

const grids = document.querySelectorAll('.column');
grids.forEach((grid) => {
    grid.addEventListener('mouseenter', () => {
        grid.style.background = 'black';
    });
});