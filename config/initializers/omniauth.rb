OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, 470924959752424, 'b423329efad22c461b6ac121c58417a8'
end