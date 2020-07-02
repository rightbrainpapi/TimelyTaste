import React, { Component} from 'react'


class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Darnell'
    }
  }


loopListings = () => {

  var {listingsData} = this.props

  if(listingsData == undefined || listingsData.length == 0){
    return 'Sorry your filter did not match any listing'
  }

  return listingsData.map((listing, index) => {
    //THIS IS THE BOX VIEW
    if (this.props.globalState.view == 'box'){
      return (
        <div className='col-md-3' key={index}>
          <div className='listing'> 
  
            <div className='listing-img' style={{background: `url("${listing.image}")`}}>
  
                <span className='address'>{listing.address}</span>
  
                <div className='details'>
  
                    
  
                <div className='col-md-3'> 
                    <div className='user-img'></div>
                </div>
   
  
                <div className='col-md-9'>
                    <div className='user-details'>
                      <span className='user-name'>Nina Smith</span>
                      <span className='post-date'> 05/05/2017</span>
  
                    </div>
  
  
                    <div className='listing-details'>
                      <div className='floor-space'>
                        <i className="far fa-square"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
  
  
                      <div className='bedrooms'>
                        <i className="fas fa-bed"></i> 
                        <span>{listing.rooms} bedrooms</span> 
                      </div>  
                    </div>
                    <div className='view-btn'>
                      View Listing
                    </div>
                </div>
  
  
                </div>
            </div>
  
  
            <div className='bottom-info'>
                <spam className='price'>${listing.price} / month </spam>
                <spam className='location'><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state} </spam>
            </div>
          </div>
        
          </div>)
    } else {
      //THIS IS THE LONG VIEW
      return (
        <div className='col-md-12 col-lg-6' key={index}>
          <div className='listing'> 
  
            <div className='listing-img' style={{background: `url("${listing.image}")`}}>
  
                <span className='address'>{listing.address}</span>
  
                <div className='details'>
  
                    
  
                <div className='col-md-3'> 
                    <div className='user-img'></div>
                </div>
  
  
                <div className='col-md-9'>
                    <div className='user-details'>
                      <span className='user-name'>Nina Smith</span>
                      <span className='post-date'> 05/05/2017</span>
  
                    </div>
  
  
                    <div className='listing-details'>
                      <div className='floor-space'>
                        <i className="far fa-square"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
  
  
                      <div className='bedrooms'>
                        <i className="fas fa-bed"></i> 
                        <span>{listing.rooms} bedrooms</span> 
                      </div>  
                    </div>
                    <div className='view-btn'>
                      View Listing
                    </div>
                </div>
  
  
                </div>
            </div>
  
  
            <div className='bottom-info'>
                <spam className='price'>${listing.price} / month </spam>
                <spam className='location'><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state} </spam>
            </div>
          </div>
        
  
  
          </div>)}
  })
}

  render () {
    return (
       <section id='listings'>

          <section className='search-area'>
            <input type='text' name='search'onChange={this.props.change}/>
          </section>

          <section className='sortby-area'>
            <div className='results'>390 Results found</div>
            <div className='sort-options'> 

              <select name='sortby' className='sortby' onChange={this.props.change}>
               
                <option value='price-dsc'> Lowest Price </option>  
                <option value='price-asc'> Highest Price </option>
              </select>

              <div className='view'>
              <i className="fa fa-th-list"  onClick={this.props.changeView.bind(null, 'long')}></i>
              <i className="fa fa-th" onClick={this.props.changeView.bind(null, 'box')} ></i>
              {/* <i className="fa fa-th-list" aria-hiddden='true'></i>
              <i className="fa fa-th" aria-hiddden='true'></i> */}
              </div>
            
            </div>

          </section>

          <section className='listings-results'>


{this.loopListings()}
          </section>

          <section id='pagination'>
            <ul className='pages'>
              <li>Prev</li>
              <li className='active'>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Next</li>
            </ul>
          </section>

       </section> 
    )
  }
}

export default Listings;