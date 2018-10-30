import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
//import GridContainer from "components/Grid/GridContainer.jsx";
//import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import Card from "components/Card/Card.jsx";
//import CardHeader from "components/Card/CardHeader.jsx";
//import CardAvatar from "components/Card/CardAvatar.jsx";
//import CardBody from "components/Card/CardBody.jsx";
//import CardFooter from "components/Card/CardFooter.jsx";


import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Cadastro from '../Cadastro/Cadastro'
//import { Grid } from "@material-ui/core";
//import CadastroCli from '../CadastroCli/CadastroCli'

//import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
      marginLeft: "300px"
    }
  }

class Dashboard extends React.Component {
  handleClick(e) {
    console.log(this)
  }
  

  render() {
    const { classes } = this.props;
    return (
      <GridItem>
        <h3>Cadastrar Produt</h3>
      <Router>
        <Link to={`/Cadastro`}>
        <Button  className={classes.cardCategoryWhite} variant="fab" color="primary" aria-label="Add" /*onClick={(e) => this.handleClick(e)}*/>
            <Route path="/Cadastro" component={Cadastro} />
        </Button>
        </Link>
      </Router>
      </GridItem>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
