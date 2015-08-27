class FavoritesController < ApplicationController
  def create
    if current_user
      p "*" * 80
      p params
      @favorite = Favorite.new(
        user_id: current_user.id,
        food_id: params[:id]
        )
      @favorite.save
    end
    redirect_to '/'
  end

  def delete
    if current_user
      Favorite.where(food_id: params[:id], user_id: current_user.id).delete_all
    end
    redirect_to '/'
  end

end
