import React, { useState } from "react"
import Modal from "react-modal"
import pic from "../images/paintings/20150126_151135.jpeg"

const Modals = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div>
        <h1> this is the modal example</h1>
        <button onClick={() => setModalOpen(true)}>Modal Button</button>
        {/* //ignore-prettier */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={{
            overlay: { backgroundColor: `grey` },
          }}
        >
          <h2>modal title</h2>
          <p>modal body</p>
          <div>
            <button onClick={() => setModalOpen(false)}>modal close</button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Modals
