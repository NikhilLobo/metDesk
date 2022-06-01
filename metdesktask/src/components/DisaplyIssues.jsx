import { Button, Tooltip } from "antd";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
const DisplayIssues = ({ setIssue, model }) => {
  const {
    data: issues,
    isPending,
    error,
  } = useFetch(
    `https://api-staging.metdesk.com/get/metdesk/powergen/v2/issues?model=${model}`
  );
  useEffect(() => {
    if (issues.length !== 0) {
      setIssue(issues[0]);
    }
  }, [issues, setIssue]);
  return (
    <>
      {error && <div>{error} issues</div>}
      {isPending && <div>Loading...</div>}
      {!error &&
        issues?.map((issue, index) => (
          <Tooltip
            title={new Date(issue).toLocaleString()}
            color="green"
            trigger="click"
            key={index}
          >
            <Button onClick={() => setIssue(issue)}>{issue}</Button>
          </Tooltip>
        ))}
    </>
  );
};

export default DisplayIssues;
