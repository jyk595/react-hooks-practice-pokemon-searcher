import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({individualData}) {
  const [showFront, setShowFront] = useState(false);

  function clickCard(event) {
    setShowFront(!showFront);
  }

  return (
    <Card key={individualData.id} onClick={clickCard}>
      <div>
        <div className="image">
          <img src={showFront ? individualData.sprites.back : individualData.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{individualData.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {individualData.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
