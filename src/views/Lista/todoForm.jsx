import React from 'react'
//import Grid from 'views/template/grid'
import Grid from "@material-ui/core/Grid";
import 'views/template/custom.css'
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
        <div className='todoForm'>
            <Grid>
                <CustomInput id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} />
                {/*<Button color="primary"
                    onClick={props.handleAdd}>
                    
                </Button>*/}
                <Button color="primary"
                    onClick={props.handleSearch}>
                </Button>
                    
                {/*</Button>
                <Button color="primary"
                    onClick={props.handleClear}>
                </Button>*/}
            </Grid>
        </div> 
    )
}
