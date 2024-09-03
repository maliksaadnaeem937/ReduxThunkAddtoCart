import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return <div className="text-center ">Error Occured {error.message}</div>;
}
