class ReviewsController < ApplicationController

  def create
    @review = Review.new(
      user_id: params[:user_id],
      food_id: params[:id],
      rating: params[:review][:rating],
      comment: params[:review][:comment]
      )
    @review.save!
    redirect_to '/'
  end
end
