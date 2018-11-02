import React from "react";
// @material-ui/core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
//import Search from "@material-ui/icons/Search";

import Button from "components/CustomButtons/Button.jsx";
import Todo from 'views/Lista/todo.jsx';
//import CustomInput from "components/CustomInput/CustomInput.jsx";

//import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";



import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import UserProfile from '../Cliente/Cliente.jsx'

function TypographyPage(props) {;
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
      <Todo />
    </GridItem>
     
     {/*<GridItem md={8}>
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
          </GridItem>*/}
   </GridContainer>
  );
}

export default(TypographyPage);
