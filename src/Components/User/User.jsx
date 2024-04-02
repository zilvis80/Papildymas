import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
  faSignature,
  faQuoteRight,
  faAddressCard,
  faCity,
  faMapLocationDot,
  faMapPin,
  faLocationDot,
  faRoad,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

import './User.scss';

function User() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/2'
        );

        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading && <Spinner className='spinner-size' animation='grow' />}
      {!loading && user && (
        <>
          <div className='user' onClick={handleShow}>
            {user?.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title>{user?.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h5>General</h5>
              <p>
                <FontAwesomeIcon icon={faUser} />
                {user?.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                {user?.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                {user?.phone}
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} />
                {user?.website}
              </p>

              <h5>company</h5>
              <p>
                <FontAwesomeIcon icon={faSignature} />
                {user?.company?.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faAddressCard} />
                {user?.company?.bs}
              </p>
              <p>
                <FontAwesomeIcon icon={faQuoteRight} />
                {user?.company?.catchPhrase}
              </p>

              <h5>address</h5>
              <p>
                <FontAwesomeIcon icon={faCity} />
                {user?.address?.city}
              </p>
              <div className='geo'>
                <FontAwesomeIcon icon={faMapLocationDot} />
                geo:
                <p>
                  <FontAwesomeIcon icon={faMapPin} />
                  lat: {user?.address?.geo.lat}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapPin} />
                  lng: {user?.address?.geo.lng}
                </p>
              </div>
              <p>
                <FontAwesomeIcon icon={faRoad} />
                {user?.address?.street}
              </p>
              <p>
                <FontAwesomeIcon icon={faBuilding} />
                {user?.address?.suite}
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                {user?.address?.zipcode}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
      {!loading && !user && <div>No User</div>}
    </>
  );
}

export default User;
