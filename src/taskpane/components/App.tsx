import * as React from "react";
import { HeroListItem } from "./pages/home/HeroList";
import Progress from "./utils/Progress";
import { FetchData } from "./pages/fetch/FetchData";
/* global Button Header, HeroList, HeroListItem, Progress, Word */
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  listItems: HeroListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/fetch" component={FetchData} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
