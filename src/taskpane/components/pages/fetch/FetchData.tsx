import * as React from "react";
import { TextField, Button, ButtonType } from "office-ui-fabric-react";

export const FetchData: React.FC = () => {
  var axios = require("axios");
  var qs = require("querystring");
  const [extractors, setExtractors] = React.useState("entities,entailments");
  const [text, setText] = React.useState(
    "Spain's stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways and Iberia."
  );
  const [responseData, setResponseData] = React.useState("");

  const h1Styles = {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    right: 0,
    bottom: "2rem",
    padding: "0.5rem",
    fontFamily: "sans-serif",
    fontSize: "1.5rem",
    fontColor: "black",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
  };

  const handleFetchData = async () => {
    const requestBody = {
      extractors: { extractors },
      text: { text }
    };

    const config = {
      headers: {
        "x-textrazor-key": process.env.API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      }
    };

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => setResponseData(data.title));

    // axios
    //   .post(process.env.API_URL, qs.stringify(requestBody), config)
    //   .then(response => response.json())
    //   .then(data => setResponseData(data));
  };

  return (
    <>
      <TextField
        label="Extractors"
        value={extractors}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
          setExtractors(ev.target.value);
        }}
      />
      <TextField
        label="Text"
        value={text}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
          setText(ev.target.value);
        }}
      />
      <br></br>
      <Button
        className="ms-welcome__action"
        buttonType={ButtonType.hero}
        iconProps={{ iconName: "ChevronRight" }}
        onClick={handleFetchData}
      >
        Fetch Data
      </Button>
      <TextField style={h1Styles} label="Result" multiline rows={5} disabled value={responseData} />
    </>
  );
};
