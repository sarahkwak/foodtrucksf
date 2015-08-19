class FoodsController < ApplicationController
  def index
    @foods = Food.all
    @foods_page = Food.paginate(:page => params[:page], :per_page => 15)
    gon.food_truck = @foods
    render 'foods'
  end
end
