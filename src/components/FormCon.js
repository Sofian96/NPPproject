import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';

class FormCon extends Component {
  render() {
  return (
      <div className='Form'>
        <form className='Form-Con'>
            <h4>Déja parmi nous?</h4>
              
              <TextInput placeholder='Pseudo officiel du joueur' label='Pseudo :' />
              <TextInput placeholder='XXXXXXXXX' label='Mot de passe :'/>
              <TextInput placeholder='mattheussofian1@gmail.com' label='E-mail :'/>
              
              <Link className='btn-connexion' to='/Main'> Se connecter</Link>
              <Link className='btn-pascompte' to='/'>Pas encore de compte?</Link>
            </form>
      
      
      
      </div>
  )
}
}

export default FormCon;
