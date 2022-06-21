class Game < ApplicationRecord
  validates :title, :tagline, :description, :year, :designer, :artist, 
    :publisher, :min_players, :max_players, :min_playtime, :max_playtime,
    :age, presence: true
  
end
