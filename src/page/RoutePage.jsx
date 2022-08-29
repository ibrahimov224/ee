import React, {usePageControl} from "react";
import { withStyles, styles } from '@ellucian/react-design-system/core/styles';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Home";

const RoutePage = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/page/:pageId">
                    <Home />
                </Route> 
            </Switch>
        </Router>
    );
};

/* const RouterPage = (props) => {
    const { classes } = props;
    const { setPageTitle } = usePageControl();

    setPageTitle("Props and Hooks");

    return (
        <div className={classes.card}></div>
    );
}; */

RoutePage.propTypes = {
    classes: PropTypes.object.isRequired,
    pageInfo: PropTypes.object
};

export default withStyles(styles)(RoutePage);