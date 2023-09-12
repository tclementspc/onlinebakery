import { Alert } from "reactstrap";

export default function MessageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.childre}</Alert>;
}
