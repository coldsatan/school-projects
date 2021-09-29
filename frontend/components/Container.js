import classnames from "classnames";

export default function Container({ children, property }) {
  return (
    <div className={classnames("container mx-auto", property)}>{children}</div>
  );
}
