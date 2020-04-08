import React, {useState} from "react";
const base = {initial: "Waiting", cancel: "Cancel", ok: "OK"};

function Home() {

  const [message, setMessage] = useState(base.initial);

  function onLaunchClick(event) {
    event.preventDefault();
    setMessage(base.initial);
  }

  function onOkClick(event) {
    event.preventDefault();
    setMessage(base.ok);
  }

  function onCancelClick(event) {
    event.preventDefault();
    setMessage(base.cancel);
  }

  return (
    <div className="container mt-5">

      <div>
        <h2 className="text-center mb-5">{message}</h2>
      </div>

      <div className="text-center">
        <button className="btn btn-success" data-toggle="modal" data-target="#modal"
                onClick={onLaunchClick}>
          Launch demo modal
        </button>
      </div>


    </div>
  )
}

export default Home;