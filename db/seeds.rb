# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

response = HTTParty.get('https://data.sfgov.org/resource/rqzj-sfat?status=approved')

  for i in 0..response.length-1
      name = response[i]['applicant']
    if response[i]['location']
      longitude = response[i]['location']['longitude']
    else
      longitude = response[i]['address']
    end #
    if response[i]['location']
      latitude = response[i]['location']['latitude']
    else
      latitude = response[i]['address']
    end
    fooditems = (response[i]['fooditems']).gsub(/:/, ',')
    food = Food.create(name: name, longitude: longitude, latitude: latitude, fooditems: fooditems)
    food.save!
  end
  class Food
    def self.dedupe
      grouped = all.group_by {|food| [food.name] }
      grouped.values.each do |uniq|
        first_one = uniq.shift
        uniq.each{ |double| double.destroy } 
      end 
    end 
  end 
  Food.dedupe
