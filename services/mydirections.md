# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=CN+Tower&destination=Harbourfront+Centre&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJydISiio1K4gRlUBlxQfjf3Q",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.64239449999999,
               "lng" : -79.38270249999999
            },
            "southwest" : {
               "lat" : 43.6393666,
               "lng" : -79.38665709999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "0.6 km",
                  "value" : 583
               },
               "duration" : {
                  "text" : "3 mins",
                  "value" : 208
               },
               "end_address" : "235 Queens Quay W, Toronto, ON M5J 2G8, Canada",
               "end_location" : {
                  "lat" : 43.6393666,
                  "lng" : -79.38270249999999
               },
               "start_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "start_location" : {
                  "lat" : 43.641677,
                  "lng" : -79.38665709999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 229
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 43.64239449999999,
                        "lng" : -79.3840129
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "owjiGrepcNCGEGEMKSCGAEAE?AAAACAECICG?EACCG?CACAE?EACAC?CAE?CAECMCQE_@Ky@K{@Iu@Ga@AOEYCQE_@"
                     },
                     "start_location" : {
                        "lat" : 43.641677,
                        "lng" : -79.38665709999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 354
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 43.6393666,
                        "lng" : -79.38270249999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLower Simcoe St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}{jiG`uocN~Ai@~@Y`@KRE`AS`@ILGZMRINGZMp@[ZM`@UZKHCNIPA"
                     },
                     "start_location" : {
                        "lat" : 43.64239449999999,
                        "lng" : -79.3840129
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "owjiGrepcNc@gASo@Ie@q@uFS}AE_@~Ai@`Be@tAYn@QzAm@jCkAXMPA"
         },
         "summary" : "Bremner Blvd and Lower Simcoe St",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
