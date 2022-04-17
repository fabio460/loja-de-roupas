import React, { useState } from 'react'
import './FormLogin.css'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useHistory} from 'react-router-dom'
export default function FormLogin() {
    const h = useHistory() 
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };



  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [email,setEmail] = useState('');
  const handleChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const [errorDesenha,setErroDeSenha] =useState(false)
  const [ erroDeEmail,setErroDeEmail] = useState(false)

  const login={
      email:'fabio@gmail',
      senha:'fabio'
  }
  const salvar = ()=>{
     if(email !== login.email){
         setErroDeEmail(true)
         
     }else{
         setErroDeEmail(false)
         if(values.password !== login.senha){
             setErroDeSenha(true)
        
         }else{
             setErroDeSenha(false)
             alert('compra efetuada com sucesso')
             h.push('/')
             window.location.reload()
         }
     }

    
  }
  return (
    <div className='camposForm'>
            <TextField
                id="outlined-name"
                label="Email"
                value={email}
                error={erroDeEmail}
                onChange={handleChangeEmail}
                sx={{ m: 1, width: '100%' }}
            />      
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    error = {errorDesenha}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <div className='text_cadastrar'>Não é cadastrado? <span id='textoCadrastese'>Cadastre-se</span></div>
            <button type="button" class="btn btn-primary" onClick={salvar}>Savar</button>
    </div>
    
  )
}
