
### For Example this call 

```
{hostname}/api/v1/GetCityWeather
```
### with the following query parameters
```
city : "London"
```
### You will get something like this

```
{
	"city": "London",
	"lat": 51.5085,
	"lon": -0.1257,
	"timezone": "Europe/London",
	"timezone_offset": 0,
	"current": {
		"dt": 1667851539,
		"sunrise": 1667804658,
		"sunset": 1667838244,
		"temp": 14.25,
		"feels_like": 14,
		"pressure": 1001,
		"humidity": 87,
		"dew_point": 12.12,
		"uvi": 0,
...
}
```
