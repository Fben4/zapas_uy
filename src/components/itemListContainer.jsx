import ItemCount from "./itemCount";

const ItemListContainer = () => {

    const onAdd = (quantity) => {
        alert('seleccionaste ' + quantity + ' productos');

    }
    return (
        
        <div>
            <ItemCount initiate={1} stock={5} onAdd={onAdd} />
        </div>
        
    )
}

export default ItemListContainer;
