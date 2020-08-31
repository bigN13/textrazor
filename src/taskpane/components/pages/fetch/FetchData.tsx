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

    axios
      .post(process.env.API_URL, qs.stringify(requestBody), config)
      .then(response => response.json())
      .then(data => setResponseData(data));
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
      <TextField label="Result" multiline rows={5} disabled value={responseData} />
    </>
  );
};
