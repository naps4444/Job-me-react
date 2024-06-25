 import Modal from "react-bootstrap/Modal";
import sm from '../assets/successmodal.png'
import { Link } from "react-router-dom";

const SuccessModal = ({showModal, setShowModal}) => {
  return (
    <div>
      <Modal centered show= {showModal} onHide={()=> setShowModal(false)} >
          <Modal.Body>
            <div className="sm">

            <h1>Application Successful!</h1>

            <img src={sm} alt="" />


            <Link to='/joblisting' className="text-decoration-none text-black">
                <div>
                    <p>Proceed back to Job listings></p>
                </div>
            
            </Link>


            

            </div>
          </Modal.Body>
      </Modal>
    </div>
  );
};

export default SuccessModal;
