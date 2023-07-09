import ShopItem from './ShopItem';

const ListView = (props) => {
    const { items } = props;
    return (
        // eslint-disable-next-line array-callback-return
        items.map(item => {
            return (
                <ShopItem item={item} />
            )
        })
    )
}
  
export default ListView