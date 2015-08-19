# Food Truck SF
### Food Truck SF is a service that tells the user what type of food trucks might be found near a specific location on a map.

The data is available on [DataSF:Food Trucks](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat?)

The original challenge is from Uber's Coding Challenge list: https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md

## Outline
1. Currently, all food trucks are seeded in the database. The datas are collected and sorted in the seed file.
2. Set up postgreSQL to import and safe the data from the API
3. Google map render the all food trucks when the page loaded
4. When the user type their addresses, it will narrow down the search result within the area only.
5. The list is showing all the foodtrucks in the SF area. It does not sync with the map search result.
6. The list is paginated by 15 search result in the page
![Alt FoodTruckSF Screenshot](https://github.com/sarahkwak/foodtrucksf/blob/master/app/assets/images/foodtrucksf.png)

## Future Wishlist
* Each list has link to 'yelp' so user can review their ratings
* the list will only show the narrowed result once the user put address
* re-size the map so it doesn't break the flow of the page.
* The InfoWindow on the map has a link to yelp so user can click within the map
* User can login with yelp and leave a review of the food truck
* User can save favorite truck lists
* User receive the alert when the favorite food truck tweeted

#### The app is deployed at [The FoodTruck SF](https://thefoodtrucksf.herokuapp.com).
