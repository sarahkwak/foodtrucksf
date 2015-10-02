class FoodsController < ApplicationController
  def index
    @review = Review.new
    @foods = Food.all
    @foods_page = Food.paginate(:page => params[:page], :per_page => 15)
    gon.food_truck = @foods
    render 'foods'
  end

  def search 
    p food = Food.find(params['format'])
    encoded_url = URI.parse(URI.encode('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7833,-122.4167&radius=500000&name='+"#{food.name}"+'&key=AIzaSyD_KqKp2-8MVwetaqx0-cvl4whslAghkKo'))
    response = HTTParty.get(encoded_url)
    if response.parsed_response['results'].length == 0
      render '_nobusiness'
    else
      place_id = response.parsed_response['results'][0]['place_id']
      place_url = URI.parse(URI.encode('https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyD_KqKp2-8MVwetaqx0-cvl4whslAghkKo&placeid='+place_id))
      @response = HTTParty.get(place_url)
      render 'detailedfood'
    end
  end 

end

