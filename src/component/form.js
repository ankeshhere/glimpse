import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { addUser , uploadFile} from '../database/userFunctions';


const useStyles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    //   width : 500
    },
  },
});




class Form extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            age:'',
            place:'',
            selectedFile:''
        }

        this.handleChange = this.handleChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
    }


    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // handleSubmit() {
    // console.log("Name: " + this.state.name);
    // }

    handleSubmit = (event) => {
    event.preventDefault();

    const user = {
        name: this.state.name,
        age: this.state.age,
        place: this.state.place
    }
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("Place: " + user.place);

    addUser(user).then(res => {
        if (!res.error) {
            // if(true){
            alert("Success")
        }
    })

    }

    onFileUpload = (event) => {
        event.preventDefault();
        // const file = event.target.files[0]
        var formData = new FormData()
        formData.append("file",this.state.selectedFile)
    
        uploadFile(formData).then(res => {
            if (!res.error) {
                // if(true){
                alert("Success")
            }
        })
        }


        onFileChange = event => { 
     
            // Update the state 
            this.setState({ selectedFile: event.target.files[0] }); 
           
          }; 



    render(){
    const { classes } = this.props;
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <Box display="flex" flexDirection="column">
                <Box display="flex" width = {0.5} flexDirection="row" p={2} mx={5}>
                    <Grid item xs={12}>
                        <TextField onChange ={this.handleChange} name = "name" fullWidth id="fullName" label="Full Name" />
                    </Grid>
                </Box>
                <Box display="flex"  flexDirection="row" p={2} mx = {5}>
                    <TextField onChange ={this.handleChange} name = "age" id="age"  label="Age" />
                    <TextField onChange ={this.handleChange} name = "place" id="place"  label="Place" /> 
                </Box>
                <Box display="flex" p={2} mx = {6}>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
                <Box display="flex" p={2} mx = {6}>
                <input type="file" onChange={this.onFileChange} /> 
                </Box>
                <Box display="flex" p={2} mx = {6}>
                <button onClick={this.onFileUpload}> 
                
                  Upload! 
                </button> 
                </Box>
            </Box>   
        </form>
    )
}
}

export default withStyles(useStyles)(Form);