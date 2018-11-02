import React from 'react'
//import Grid from 'views/template/grid'
import GridContainer from "components/Grid/GridContainer.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Icon from '@material-ui/core/Icon';
//import IconButton from 'views/template/iconButton'
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";


export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div>
            <Card>
                    <CardHeader color="primary">
                        <p>Pesquisar cliente</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput id='description' className='form-control'
                                    placeholder='Adicione uma tarefa'
                                    onChange={props.handleChange}
                                    onKeyUp={keyHandler}
                                    value={props.description}
                                    labelText="Tarefa"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem> 
                            <GridItem>
                            <Button color="primary"
                                 onClick={props.handleAdd}>
                                 <Icon>add</Icon>
                            </Button>
                            <Button color="primary"
                                onClick={props.handleClear}>
                                <Icon>layers_clear</Icon>
                            </Button>
                            {/*<Button color="primary"
                    '           onClick={props.handleSearch}>
                            </Button>*/}
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
        </div> 
    )
}
