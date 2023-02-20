import React from 'react'
import './UserDashboard.css'
// import { useState } from 'react'
import UserSidebar from './Components/UserSidebar'
import Product from './MintAPI'
import { Link } from 'react-router-dom'
function ncard(val) {
  
    return (
      <tr>
        <th scope="row">{val.id}</th>
        <td className="mint-image " width={1}>
          <img src={val.image} alt="" className=" rounded fluid" height={40} />{' '}
        </td>
        <td>{val.name}</td>
        {/* <td>{val.des}</td> */}
        <td>{val.price}</td>
        {/*  d-flex justify-content-between */}
        {/* <td className="">
          <button type="button" className="btn btn-outline-info me-2 mt-2">
           Edit
          </button>
          <button type="button" className="btn btn-danger mt-2">
            Delete
          </button>
        </td> */}
      </tr>
    )
  }
const UserDashboard = () => {
//     const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)
let wAddressLocalget = JSON.parse(localStorage.getItem('wAddressLocal'));
console.log(wAddressLocalget);
if (wAddressLocalget !== null) {
    return (
        <div className="container user-dashboard-page">
            <div className=" user-sidebar">
                <UserSidebar />

            </div>
            <div className=" user-main container ms-3">
          <div className="heading">
            <h3>
              All Created NFTs
            </h3>
            <p>All created NFTs are listed below</p>
          </div>
          {/* <div className="add_btn ">
            <button className="btn btn-primary mb-2" onClick={handleShow}>
              Add New
            </button>
          </div> */}
          <table className="table">
            <thead>
              <tr className="table-light">
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                {/* <th scope="col">Desciption</th> */}
                <th scope="col">Price</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>{Product.map(ncard)}</tbody>
          </table>
          <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <Link class="page-link" href="#" tabindex="-1">Previous</Link>
    </li>
    <li class="page-item active"><Link class="page-link" href="#">1<span class="sr-only">(current)</span></Link></li>
    <li class="page-item ">
      <Link class="page-link" href="#">2 </Link>
    </li>
    <li class="page-item"><Link class="page-link" href="#">3</Link></li>
    <li class="page-item">
      <Link class="page-link" href="#">Next</Link>
    </li>
  </ul>
</nav>
    
        </div>
        </div>
    )}
    else{
      console.log("NO")
      return(
        <div className="container">
  <p>You don't have permissions to access this page. Please connect your wallet.</p>
        </div>
      
        
      )
    }
}

export default UserDashboard
