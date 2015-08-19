class FoodsController < ApplicationController
  def index
    @foods = Food.all
    gon.food_truck = @foods
    render 'foods'
  end
end
