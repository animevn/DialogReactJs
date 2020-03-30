import React from "react";
import "bootstrap/js/dist/modal"

function Home() {

  return (
    <div className="container mt-5">

      <div>
        <h2 className="text-center mb-5">Text here</h2>
      </div>

      <div className="text-center">
        <button className="btn btn-success" data-toggle="modal" data-target="#modal">
          Launch demo modal
        </button>
      </div>

      <div className="modal fade" id="modal">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-body d-flex flex-column pt-1">
              <div className="container d-flex flex-row justify-content-between px-0 mb-3">
                <h5 className="modal-title">Your choice</h5>
                <button className="close" data-dismiss="modal">
                  <span className="float-right" aria-hidden="true">&times;</span>
                </button>
              </div>

              <h6 className="text-center">Content</h6>

            </div>

            <div className="modal-footer d-flex justify-content-around">
              <button type="button" className="btn btn-danger w-25 px-0" data-dismiss="modal">
                Cancel
              </button>

              <button className="btn btn-success w-25" data-dismiss="modal">
                OK
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;