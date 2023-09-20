import { Input } from "reactstrap";
import { useLocation, Link } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";
import { Container, Form, Button } from "reactstrap";

export default function SignIn() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <Container className="small-container">
      <h1 className="my-3" style={{ color: "#e80a4d" }}>
        Sign In
      </h1>
      <Form>
        <FormGroup className="mb-3" controlId="email">
          <Label>Email</Label>
          <Input type="email" required />
        </FormGroup>
        <FormGroup className="mb-3" controlId="password">
          <Label>Password</Label>
          <Input type="password" required />
        </FormGroup>
        <div className="mb-3">
          <Button
            type="submit"
            className="sign-in"
            style={{ backgroundColor: "blue" }}
          >
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create your account.</Link>
        </div>
      </Form>
    </Container>
  );
}
