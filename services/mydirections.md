# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?destination=place_id:ChIJv4L-mirL1IkRm36bOhjxjFQ&origin=place_id:ChIJmzrzi9Y0K4gRgXUc3sTY7RU&language=en&mode=walking&unites=metric+Centre&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
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
         "place_id" : "ChIJv4L-mirL1IkRm36bOhjxjFQ",
         "types" : [ "establishment", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.6430704,
               "lng" : -79.37879459999999
            },
            "southwest" : {
               "lat" : 43.6391257,
               "lng" : -79.38718730000001
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "1.2 km",
                  "value" : 1165
               },
               "duration" : {
                  "text" : "15 mins",
                  "value" : 893
               },
               "end_address" : "89 Queens Quay W, Toronto, ON M5J 2V3, Canada",
               "end_location" : {
                  "lat" : 43.6392072,
                  "lng" : -79.37879459999999
               },
               "start_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "start_location" : {
                  "lat" : 43.642855,
                  "lng" : -79.38718730000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "51 m",
                        "value" : 51
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.6429735,
                        "lng" : -79.3865716
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{~jiG|hpcNIo@Ea@AIAMAQ"
                     },
                     "start_location" : {
                        "lat" : 43.642855,
                        "lng" : -79.38718730000001
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 43.642025,
                        "lng" : -79.3869064
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBremner Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTake the stairs\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "q_kiG`epcNB@@??@?@@D?@@?@?B?B@D?B@B@@@@@@@@@@@B@@?NFF@@?@@DA@?@A@?@??@B?LD@?J@TFF@FB@@@@F@@?B?B?DA"
                     },
                     "start_location" : {
                        "lat" : 43.6429735,
                        "lng" : -79.3865716
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "10 m",
                        "value" : 10
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.64197420000001,
                        "lng" : -79.38701130000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "syjiGdgpcNHR"
                     },
                     "start_location" : {
                        "lat" : 43.642025,
                        "lng" : -79.3869064
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "45 m",
                        "value" : 45
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.6417409,
                        "lng" : -79.3867865
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iyjiGxgpcNBCFCD?@A@A@A@CBENS"
                     },
                     "start_location" : {
                        "lat" : 43.64197420000001,
                        "lng" : -79.38701130000001
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 443
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 318
                     },
                     "end_location" : {
                        "lat" : 43.6428562,
                        "lng" : -79.38126659999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{wjiGlfpcNGMEIGMSa@AGA??CACCECKAGAEAEAGACACAE?CAEAC?EAEAC?ECMCQGa@Gi@EYGe@EYAQIg@AKGe@A[M{@QwAG[QqAG]YyBAKOmAImAh@G"
                     },
                     "start_location" : {
                        "lat" : 43.6417409,
                        "lng" : -79.3867865
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 281
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 243
                     },
                     "end_location" : {
                        "lat" : 43.6405199,
                        "lng" : -79.38042779999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eYork St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{~jiG|cocNr@SXILETGlAa@RFTIPIXURIRGTIFA`@GH@VEHCf@I@?"
                     },
                     "start_location" : {
                        "lat" : 43.6428562,
                        "lng" : -79.38126659999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "73 m",
                        "value" : 73
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 43.63996150000001,
                        "lng" : -79.3798276
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eYork St\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "gpjiGt~ncNJIDCDGFGFGLMHIVWFINW"
                     },
                     "start_location" : {
                        "lat" : 43.6405199,
                        "lng" : -79.38042779999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 109
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.6391548,
                        "lng" : -79.37922859999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eHarbour Square\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "wljiG|zncNJKFGTMDGBE^SHGTMl@]"
                     },
                     "start_location" : {
                        "lat" : 43.63996150000001,
                        "lng" : -79.3798276
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 43.6392072,
                        "lng" : -79.37879459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ugjiGdwncNBw@COACA?CCAA?AAC"
                     },
                     "start_location" : {
                        "lat" : 43.6391548,
                        "lng" : -79.37922859999999
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "{~jiG|hpcNSiBAQB@@@@F@@N@JFHFZHJAF@p@NRHP@DAHRJGJEDINSGMMWUi@GMQu@_AcHIq@A[M{@YsBYoB[eCOmAImAh@Gr@Sf@ObBi@RFTIj@_@f@Q\\K`@GH@`@Ih@I^]v@w@Va@RSZUb@Y^Ul@]Bw@ESECCG"
         },
         "summary" : "Bremner Blvd and York St",
         "warnings" : [
            "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
         ],
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
