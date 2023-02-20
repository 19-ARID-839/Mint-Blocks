import React from 'react'
import UserSidebar from './Components/UserSidebar'
// import { Link } from 'react-router-dom'

const Orders = () => {
  let wAddressLocalget = JSON.parse(localStorage.getItem('wAddressLocal'));
  console.log(wAddressLocalget);
  if (wAddressLocalget !== null) {
  return (
    <div>
       <div className="container user-dashboard-page">
            <div className="user-sidebar">
                <UserSidebar />

            </div>
            <div className="user-main  container ms-3">
        <div className="heading">
            <h3>
              Add New NFT
            </h3>
            <form>
            <div class="form-group">
    <label for="exampleFormControlFile1">Image</label><br/>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>     
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="number" class="form-control" id="price" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Upload</button>
</form>

          </div>
          </div>
        </div>

    </div>
    
  )
}
else{
  console.log("NO")
        
  return(
    <div className="container">
<p>You don't have permissions to access this page. Please connect your wallet.</p>
    </div>
  
    
  )
}

}



export default Orders
