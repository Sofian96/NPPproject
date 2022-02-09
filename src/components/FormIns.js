import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';


class FormIns extends Component {
  render() {
  return (
    <div className='toutIns'>
       <div id='form'>
            
          <h4>Sign up with your informations</h4>
          <p>Already have an account? <Link className='btn-signin' to='./FormCon'>Sign in</Link></p>
          
            
          <form>             
              <div className='input'>
                <TextInput name="nom" label='Nom :' />
                <TextInput name="prenom" label='Prénom :'/>
                <TextInput name="age" label='Âge :' />
                <TextInput name="pseudo" label='Pseudo officiel :'/>         
                <TextInput name="email" label='E-mail :'/>
                <TextInput type='password' name='mdp' label='Mot de passe :' required/>
                <label id='accord'><input id='accord' type="checkbox" />Je suis d'accord avec les termes.</label>
                <Link className='btn-inscription' to='./Main'>Créer votre compte</Link>
              </div>  
          </form>
        </div>
    </div>
  )
}
}

export default FormIns;
