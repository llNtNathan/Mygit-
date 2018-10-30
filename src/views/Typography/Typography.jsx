import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import Search from "@material-ui/icons/Search";

import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

//import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";


import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import UserProfile from '../Cliente/Cliente.jsx'

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
function TypographyPage(props) {
  const { classes } = props;
  return (

    
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Router>
        <Link to={`/cliente`}>
          <Button color="primary">
          cliente
          </Button>
          <Route path="/cliente" component={UserProfile} />
        </Link>
      </Router>
    </GridItem>
    <GridItem md={8}>
      <div>
          <CustomInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }}
          />
          <Button color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
        </div>
      </GridItem>
  </GridContainer>
  );
}

export default withStyles(style)(TypographyPage);
