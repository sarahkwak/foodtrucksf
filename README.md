# Favorite Truck SF
### Favorite Truck SF is a service that tells the user what type of food trucks might be found near a specific location on a map.

The data is available on [DataSF:Food Trucks](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat?)

The original app idea is from Uber's Coding Challenge list: https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md

## Outline
1. Currently, all food trucks are seeded in the database. The datas are collected and sorted in the seed file.
2. Set up postgreSQL to import and safe the data from the API
3. Google map render the all food trucks when the page loaded
4. When the user type their addresses, it will narrow down the search result within the area only.
5. The list is showing all the foodtrucks in the SF area. It does not sync with the map search result.
6. The list is paginated by 15 search result in the page
![Alt FoodTruckSF Screenshot](https://github.com/sarahkwak/foodtrucksf/blob/master/app/assets/images/foodtrucksf.png)
7. Once user is login with facebook, user is able to save foodtrucks as favorite and unfavorite.
8. Current_user is also able to leave reviews.
9. All users are able to see the existing reviews.

## Future Wishlist
* Each list has a link to 'yelp' so user can review the ratings - This is impossible! Not many foodtrucks have yelp page so it is impossible to provide consistent level of info for the each truck. 
* The list will only show the narrowed result once the user put an address
* Re-size the map so it doesn't break the flow of the page
* The InfoWindow on the map has a link to 'yelp' so user can click within the map and get the information about the truck
* User can login with 'yelp' and leave a review and post photos
* User can save favorite truck lists
* User receives the alert when the favorite food truck tweeted

#### The app is deployed at [The FoodTruck SF](https://favoritetrucksf.herokuapp.com/).
