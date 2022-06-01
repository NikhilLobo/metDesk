import DisplayIssues from "./DisaplyIssues";
import DisplayForecast from "./DisplayForecast";
import { Row, Menu, Dropdown, Button } from "antd";
import { useState } from "react";
const DtgBar = () => {
  const [issue, setIssue] = useState("");
  const [model, setModal] = useState("ecop");
  const models = {
    1: "ecop",
    2: "eceps",
    3: "gfsop",
    4: "uke4",
    5: "icon",
    6: "arpege",
  };
  const onClick = ({ key }) => {
    setModal(models[key]);
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: "1",
          label: "ecop",
        },
        {
          key: "2",
          label: "eceps",
        },
        {
          key: "3",
          label: "gfsop",
        },
        {
          key: "4",
          label: "uke4",
        },
        {
          key: "5",
          label: "icon",
        },
        {
          key: "6",
          label: "arpege",
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button onClick={(e) => e.preventDefault()}>Select Model</Button>
      </Dropdown>
      <div className="dtg">
        <Row className="divider">
          <DisplayIssues setIssue={setIssue} model={model} />
        </Row>
        <Row>{issue && <DisplayForecast issue={issue} model={model} />}</Row>
      </div>
      <style>
        {`
        .dtg{
          padding: 5px;
          margin: 5px;
        }
        .divider {
            margin: 2px;
        }
        `}
      </style>
    </>
  );
};

export default DtgBar;
