import { useState } from "react";
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

const Store = (props) => {
    const { products } = props;
    const [layout, setLayout] = useState('view_list');
    const onSwitch = () => {
        return layout === 'view_list' ? setLayout('view_module') : setLayout('view_list');
    }
    
    return <>
        <IconSwitch icon={layout} onSwitch={() => onSwitch()}/>

        {layout === 'view_list' && (
            <div className="g-4 m-4">
                <ListView items={products} />
            </div>
        )}
        {layout === 'view_module' && (
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                <CardsView cards={products} /> 
            </div>
        )}
    </>
}

export default Store