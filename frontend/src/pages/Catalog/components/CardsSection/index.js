import Card from "../Card";

import './CardsSection.scss';

const CardsSection = ({ cards }) => {
  
  return (
    
    <div className="cards__section">
      {cards.map((card) => 
        <Card key={card.id} {...card} />
      )}
    </div>
  )
}

export default CardsSection;
