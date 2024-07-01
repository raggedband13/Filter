const FilterItem = document.querySelectorAll('.filter_item');
const blockCol = document.querySelectorAll('.col-4');

FilterItem.forEach (filter => {
    filter.addEventListener('click', () => {
        FilterItem.forEach (filter => {
            filter.classList.remove('active');
        })
        filter.classList.add('active');

        const blockFilter = filter.dataset.color;

        blockCol.forEach (block => {
            const blockColor = block.dataset.color;

            if(blockFilter == 'all' || blockFilter == blockColor) {
                block.classList.remove('hidden');
            } else {
                block.classList.add('hidden');
            }
        })
    })
})

