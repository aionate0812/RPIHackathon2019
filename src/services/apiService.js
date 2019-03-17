import axios from 'axios'
const tripAPI = () =>{
  return axios.get('http://api.tripadvisor.com/api/partner/2.0/location/48739/restaurants?key=2f5aef9e-d399-4298-9986-ea6305c270a8')
  .then((res)=>{
    return res.data.data.map((e)=>{
      let restaurantInfo = {
        'name': e.name,
        'priceRange': e.price_level,
        'ratingImg': e.rating_image_url,
        'address': e.address_obj.address_string,
        'city': e.address_obj.city,
        'url':e.web_url,
      };
      return restaurantInfo;
    })
  })
}
export default tripAPI;