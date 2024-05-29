import React from 'react'

const UserPage = () => {
  return (
    <div class="card shadow mb-4 m-4">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>No.</th>
              <th>Fullname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Orang</td>
              <td>Woilah</td>
              <td>hitam@gmail.com</td>
              <td>atmin</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning btn-sm button-edit "
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm button-hapus mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default UserPage