import { Button, Tooltip } from "antd";
import useFetch from "../hooks/useFetch";
const DisplayForecast = ({ issue, model }) => {
  const {
    data: forecasts,
    isPending,
    error,
  } = useFetch(
    `https://api-staging.metdesk.com/get/metdesk/powergen/v2/dtgs?model=${model}&element=combined&interval=model&issue=${issue}`
  );

  return (
    <>
      {error && <div>{error} forcasts</div>}
      {isPending && <div>Loading...</div>}
      {!error &&
        [...forecasts]?.reverse().map((issue, index) => (
          <Tooltip
            title={new Date(issue).toString()}
            trigger="click"
            color="green"
            key={index}
          >
            {" "}
            <Button>{index}</Button>
          </Tooltip>
        ))}
    </>
  );
};

export default DisplayForecast;
