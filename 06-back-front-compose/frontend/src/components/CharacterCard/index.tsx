import { Character } from '../../types';
import './CharacterCard.css';

export default function CharacterCard(props: { character: Character }) {
  return <div>
    <img className="CharacterCard-image" src={props.character.image} alt={props.character.name}/>
    <h2>{props.character.name}</h2>
    <small>{props.character.species} / {props.character.source}</small>
    <p>{props.character.description}</p>
  </div>;
}
