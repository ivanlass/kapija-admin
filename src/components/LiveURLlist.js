import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function LiveURLlive(props) {
    const urlID = props.liveURL[0]._id

    const deleteURL = () => {
        axios.post('http://localhost:5000/live/delete', {
            id: urlID,
        })
            .then(function (response) {
                props.setLiveURL(response.data)
                props.setIsVisible(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <p>{props.liveURL[0].url}</p>
            <Button variant="primary" onClick={deleteURL}>DELETE</Button>
        </>
    );
}

export default LiveURLlive;
