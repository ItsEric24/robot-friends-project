/* eslint-disable react/prop-types */
import Card from "./Card";

function CardList({ robots }) {
  return (
    <>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            email={robot.email}
            id={robot.id}
          />
        );
      })}
    </>
  );
}
export default CardList;
