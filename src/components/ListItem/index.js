import React from 'react';

function ListItem({title, svg, subheading}) {
    return (
        <div className='mb-4 flex-row nowrap'>
            <img
                src={svg}
                alt=''
                className='svg'
            />

            {subheading ? (
                <div className='pl-3'>
                    <h5 className='text-secondary'>{title}</h5>
                    <p className='text-secondary italic-small'>{subheading}</p>
                </div>
            ) : (
                <h5 className='text-secondary pl-3'>{title}</h5>
            )}
        </div>
    )
}

export default ListItem;