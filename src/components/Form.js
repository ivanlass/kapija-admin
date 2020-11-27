import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Form(props) {
  return (
    <form onSubmit={props.sendData}>
        <p>{props.label}</p>
        <input 
        value={props.type ? "" : props.value} 
        onChange={e => props.setValue( props.type ? e.target.files[0] : e.target.value)} 
        placeholder={props.placeholder} 
        type={props.type ? props.type : "text"}/>
        
        <Button variant="primary" type="submit">SEND</Button>
    </form>
  );
}

export default Form;
