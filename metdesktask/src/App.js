// import "./App.css";
import DtgBar from "./components/DtgBar";
import { Layout } from "antd";
const { Header } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="header">
          <DtgBar />
        </Header>
      </Layout>
      <style>
        {`
        .header{
          height: 100px;
        }
        `}
      </style>
    </>
  );
}

export default App;
