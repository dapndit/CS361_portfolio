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
    "eventid": "3798",
    "name": "event2",
    "date_start": "2023-08-24",
    "date_end": "2023-08-24",
    "time_start": "9:00:00",
    "time_end": "9:45:00",
    "flag": "0"
  },
  {
    "eventid": "2110",
    "name": "event3",
    "date_start": "2023-07-25",
    "date_end": "2023-07-30",
    "time_start": "11:00:00",
    "time_end": "11:55:00",
    "flag": "0"
  },
  {
    "eventid": "3369",
    "name": "event4",
    "date_start": "2023-07-26",
    "date_end": "2023-07-28",
    "time_start": "9:00:00",
    "time_end": "10:15:00",
    "flag": "1"
  }
]

response = requests.post(url, json=data)

if response.status_code == 200:
    result = response.json()
    print(json.dumps(result, indent=2))
else:
    print(f"Error:{response.status_code}")
    print(response.text)
