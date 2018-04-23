var horizontalStatus = {
  rainy:{
    ios:"ios-rainy",
    android:"md-rainy"
  },
  cloud:{
    ios:"ios-cloudy",
    android:"md-cloudy"
  },
  thunderstorm:{
    ios:"ios-thunderstorm",
    android:"md-thunderstorm"
  },
  sunny:{
    ios:"ios-sunny",
    android:"md-sunny"
  },
}
var horizontalFlatListData = [
  {
    hour:"1 AM",
    status:horizontalStatus.rainy,
    degrees:57,
  },
  {
    hour:"2 AM",
    status:horizontalStatus.cloud,
    degrees:46,
  },
  {
    hour:"3 AM",
    status:horizontalStatus.cloud,
    degrees:45,
  },
  {
    hour:"4 AM",
    status:horizontalStatus.thunderstorm,
    degrees:46,
  },
  {
    hour:"5 AM",
    status:horizontalStatus.sunny,
    degrees:21,
  },
  {
    hour:"6 AM",
    status:horizontalStatus.cloud,
    degrees:53,
  },
  {
    hour:"7 AM",
    status:horizontalStatus.thunderstorm,
    degrees:31,
  },
  {
    hour:"8 AM",
    status:horizontalStatus.cloud,
    degrees:36,
  },
  {
    hour:"9 AM",
    status:horizontalStatus.sunny,
    degrees:26,
  },
  {
    hour:"10 AM",
    status:horizontalStatus.sunny,
    degrees:62,
  }
];

export {horizontalStatus};
export {horizontalFlatListData};
