import { Col, Row } from "reactstrap";
import RollsCard from "./RollsCard";
import { selectAllRolls } from './rollsSlice';

import { useSelector } from "react-redux";

const RollsList = () => {
  const rolls = useSelector(selectAllRolls);

  return (
    <Row className="ms-auto">
      {rolls.map((roll) => {
        return (
          <Col 
            md="5" 
            className="m-4" 
            key={roll.id}
          >
             <RollsCard roll={roll} /> 
          </Col>
        );
      })}
    </Row>
  );
};

export default RollsList;



