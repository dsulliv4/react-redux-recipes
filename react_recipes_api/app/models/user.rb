class User < ApplicationRecord
  has_many :meals
  has_secure_password
end
