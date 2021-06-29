import {memo} from 'react';

// previous
/*const Small = ({value}) => {
    console.log('me volvi a mostrar :(')

    return (
        <small>
            {value}
        </small>
    );
};*/

const Small = memo(({value}) => {
    console.log('me volvi a mostrar :(')

    // useMemo es el que quiero memorizar
    //solo se dispara si las propiedades cambian
    return (
        <small>
            {value}
        </small>
    );
});

export default Small;
