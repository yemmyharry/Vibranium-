import React from 'react';

export const Khal = () => {
    const meal = ['rice','beans', 'semo','yam']
return (
    <div>
        {meal.map(item => 
            <p>{item} is delicious</p>
            )}

    </div>
)

}

