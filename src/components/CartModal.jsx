import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const CartModal = ({show1,handleClose1}) => {
  return (
    <Offcanvas show={show1} onHide={handleClose1} placement='start' >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default CartModal
