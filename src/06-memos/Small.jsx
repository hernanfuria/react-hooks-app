import React from 'react';

export const Small = React.memo(({value}) => {
    console.log('small dibujado')
    return (
        <small>{value}</small>
    )
})
