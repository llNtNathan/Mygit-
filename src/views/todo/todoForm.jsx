import React from 'react'
//import Grid from 'views/template/grid'
import Grid from "@material-ui/core/Grid";
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
            <Grid>
                <CustomInput id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} md={3} />
                <Button color="primary"
                    onClick={props.handleAdd}>
                    mui-
                </Button>
                <Button color="primary"
                    onClick={props.handleSearch}>
                    sea
                </Button>
                <Button color="primary"
                    onClick={props.handleClear}>
                    can
                </Button>
            </Grid>
        </div> 
    )
}
