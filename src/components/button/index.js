import React from "react";
import { Button } from "reactstrap";

const WsButton = props => <Button color={props.type}>{props.children}</Button>;

export default WsButton;
