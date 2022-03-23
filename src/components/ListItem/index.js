import React from 'react';

function ListItem({title, svg}) {
    return (
        <div className='mb-4 flex-row align-center'>
            <img
                src={svg}
                alt=''
                className='svg'
            />
            <h5 className='text-secondary pl-3'>{title}</h5>
        </div>
    )
}

export default ListItem;