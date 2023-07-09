import ShopCard from './ShopCard';

const CardsView = (props) => {
    const { cards } = props;
    return (
        // eslint-disable-next-line array-callback-return
        cards.map(card => {
            return (
                <ShopCard card={card} />
            )
        })
    )
}
  
export default CardsView