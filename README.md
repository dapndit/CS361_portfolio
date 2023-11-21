# CS361 - FitLocker 
FitLocker webapp

## Microservice - Event Checker
The microservice takes a newly created event and checks if it is overlapping with any other pre-existing events. The newly created event must be flagged as 1, while the rest are flagged as 0. Microservice returns the eventid of all events that overlap, [] otherwise.

### Requesting Data 
To request data, a post request must be sent to the following url: (http://127.0.0.1:9345/get_events).
Within the post request the data must be provided as a JSON object in the following formatting:

[{
    "eventid": "NUMBERS",
    "name": "EVENTNAME",
    "date_start": "yyyy-mm-dd",
    "date_end": "yyyy-mm-dd",
    "time_start": "hh:mm:ss",
    "time_end": "hh:mm:ss",
    "flag": "0" The flag value is 0 if its not the newly inputted value to be checked, value 1 if it is the value to be checked.
  }]

Example request:
```
import requests
import json

url = 'http://127.0.0.1:9345/get_events'
data = [
  {
    "eventid": "4456",
    "name": "event1",
    "date_start": "2023-08-26",
    "date_end": "2023-08-26",
    "time_start": "9:00:00",
    "time_end": "9:45:00",
    "flag": "0"
  },
  {
    "eventid": "3369",
    "name": "event2",
    "date_start": "2023-08-26",
    "date_end": "2023-08-26",
    "time_start": "9:30:00",
    "time_end": "10:15:00",
    "flag": "1"
  }
]

response = requests.post(url, json=data)
```

### Receiving Data
The microservice returns data in the form of a JSON object. 
Refer to the following code:
```
if response.status_code == 200:
    result = response.json()
    print(json.dumps(result, indent=2))
else:
    print(f"Error:{response.status_code}")
    print(response.text)
```

### UML Sequence Diagram
![uml](https://github.com/dapndit/CS361_portfolio/assets/107951591/7a4ffc9d-5939-4ab6-92a1-46cd5da8618a)

