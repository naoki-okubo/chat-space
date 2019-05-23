require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

# Default value for default_env is {}


  config.fog_directory  = 'chat-space-upload-0000'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/chat-space-upload-0000'
end