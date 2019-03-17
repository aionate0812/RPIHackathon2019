import axios from 'axios'
const tripAPI = () =>{
  return axios.get('https://api.tripadvisor.com/api/partner/2.0/location/48739/restaurants?key=39da9761-5995-4fff-847b-bd49a0e08b8a')
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