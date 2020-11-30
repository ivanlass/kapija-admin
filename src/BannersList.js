import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function BannersList(props) {

    const deleteBanner = (e) => {
        axios.post('http://localhost:5000/banners/delete', {
            id: e.target.dataset.id, name: e.target.dataset.name
        })
            .then(function (response) {
                props.setBanners(response.data)
                props.setIsVisible(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {props.banners.map(banner => {
                console.log(banner.placement)
                if (banner.placement == props.placement) {
                    return (<div className="form banner-container">

                        <h4>{banner.path}</h4>

                        <p>{banner.link}</p>

                        <img width={props.w} src={`http://localhost:5000/${banner.path}`} />
                        <Button className="btn-banners-delete" onClick={deleteBanner} data-id={banner._id} data-name={banner.path}>DELETE</Button>
                    </div>)
                }
            })}
        </>
    );
}

export default BannersList;
