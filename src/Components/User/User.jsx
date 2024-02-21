import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import './User.scss';

function User() {
  const [user, setUser] = useState('');
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
      {loading ? (
        <Spinner className='spinner-size' animation='grow' />
      ) : (
        <>
          <div className='user' onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas
            id='offcanvas'
            show={show}
            onHide={handleClose}
            placement='end'
          >
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title>{user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>
                <FontAwesomeIcon icon={faUser} /> {user.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                {user.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneFlip} />
                {user.phone}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default User;
