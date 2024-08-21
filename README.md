## Initialize
- Add `Roam.initialize(this, "PUBLISHABLE-KEY")` to onCreate method in MainApplication class

## Android native code
- Create a service class in android module and register the receiver
- Register the service in Manifest file
- Refer to `LocationService.java` file in android module

## Start tracking
- Tracking can be started in different tracking modes
```
// active tracking
Roam.startTracking("ACTIVE");
// balanced tracking
Roam.startTracking("BALANCED");
// passive tracking
Roam.startTracking("PASSIVE");
```
### Custom Tracking Modes

Android: Distance
```
//Update location based on distance between locations.
Roam.startTrackingDistanceInterval(
  "DISTANCE IN METERS",
  "STATIONARY DURATION IN SECONDS",
  Roam.DesiredAccuracy.HIGH,
);
```

Android: Time
```
//Update location based on time interval.
Roam.startTrackingTimeInterval(
  "INTERVAL IN SECONDS",
  Roam.DesiredAccuracy.HIGH,
);
```

IOS
```
// Update location on distance interval
Roam.startTrackingCustom(
  allowBackground,
  pauseAutomatic,
  activityType,
  desiredAccuracy,
  showBackIndicator,
  distanceFilter,
  accuracyFilter,
  updateInterval,
);
```


## Running listener in Headless JS
- Headless JS allows running JS code when the application is terminated. Location listener can be registered in headless JS to receive locations in JS callback independent of app state.
- To register headless JS, please refer to `index.js` file in root