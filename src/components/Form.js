import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Form(props) {
  return (
    <form onSubmit={props.sendData} className="form">
      <h3>{props.label}</h3>
      {props.value.name && <p>{props.value.name}</p>}
      <input
        className="input"
        value={props.type ? "" : props.value}
        onChange={e => props.setValue(props.type ? e.target.files[0] : e.target.value)}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"} />
      {props.type && <input value={props.link} onChange={e => props.setLink(e.target.value)} className="input" placeholder="link za reklamu" />}

      <Button variant="primary" type="submit">SEND</Button>
    </form>
  );
}

export default Form;
