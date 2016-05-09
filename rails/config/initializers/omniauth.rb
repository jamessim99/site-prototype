# The above example assumes that your provider keys and secrets are stored in environmental variables.
# Use the figaro gem (or dotenv or secrets.yml or equivalent) to accomplish this.
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  #provider :github,        ENV['GITHUB_KEY'],   ENV['GITHUB_SECRET'],   scope: 'email,profile'
  #provider :facebook,      ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  #provider :google_oauth2, ENV['GOOGLE_KEY'],   ENV['GOOGLE_SECRET']
end