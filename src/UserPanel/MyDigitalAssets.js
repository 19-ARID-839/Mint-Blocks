import React from 'react'
import UserSidebar from './Components/UserSidebar'
import Product from './MintAPI'
import { Link } from 'react-router-dom'
function ncard(val) {
  return (
    <tr>
      <th scope="row">{val.id}</th>
      <td className="mint-image img-fluid" width={1}>
        <img src={val.image} alt="" height={40} />{' '}
      </td>
      <td>{val.name}</td>

      <td>{val.price}</td>
      <td>
        <button type="button" className="btn btn-success">
          Resell
        </button>
      </td>
    </tr>
  )
}
const MyDigitalAssets = () => {
  let wAddressLocalget = JSON.parse(localStorage.getItem('wAddressLocal'));
  console.log(wAddressLocalget);
  if (wAddressLocalget !== null) {
  return (
    <div>
      <div className="container user-dashboard-page">
        <div className=" user-sidebar">
          <UserSidebar />
        </div>
        <div className="user-main container ms-3">
          <div className="heading">
            <h3 className="">
            My Digital Assets
            </h3>
            <p>All purchased NFTs are listed below</p>
          </div>
          <table className="table">
            <thead>
              <tr className="table-light">
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{Product.map(ncard)}</tbody>
          </table>
          {/* <Stack spacing={2} className="ms-5">
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack> */}
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

export default MyDigitalAssets
