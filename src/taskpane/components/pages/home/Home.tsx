import * as React from "react";
import Header from "./Header";
import HeroList from "./HeroList";
import { Button, ButtonType } from "office-ui-fabric-react";
import { useHistory } from "react-router";

interface IProps {
  title: string;
}

export const Home: React.FC<IProps> = props => {
  const history = useHistory();
  const handleFetchData = () => {
    history.push("/fetch");
  };
  return (
    <>
      <Header logo="assets/logo-filled.png" title={props.title} message="TextRazor" />
      <HeroList message="Simple test to fetch data!" items={[]}>
        <Button
          className="ms-welcome"
          buttonType={ButtonType.hero}
          iconProps={{ iconName: "ChevronRight" }}
          onClick={handleFetchData}
        >
          Fetch Component
        </Button>
      </HeroList>
    </>
  );
};
