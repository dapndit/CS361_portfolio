from flask import Flask, jsonify, request
import json
from datetime import datetime
import time

app = Flask(__name__)

@app.route('/get_events', methods=['POST'])
def get_events():

    data = request.get_json()
    print("Request received - checking overlap")

# f = open('data.json')

# data = json.load(f)

    val_check = ""                          # {"name": "event4", "date_start": "2023-08-26", "date_end": "2023-08-26", 
                                        #     "time_start": "9:30:00", "time_end": "10:15:00","flag": "1"}
    pos = 0


    def convert_dates(date_obj):
        date_conv = datetime.strptime(date_obj, "%Y-%m-%d").date()
        return date_conv

    def convert_times(time_str):
        time_conv = datetime.strptime(time_str, "%H:%M:%S").time()
        return time_conv

    for var in data:                                                # converts str to date and time objects using helper function
        var['date_start'] = convert_dates(var['date_start'])
        var['date_end'] = convert_dates(var['date_end'])
        var['time_start'] = convert_times(var['time_start'])
        var['time_end'] = convert_times(var['time_end'])


    for var in data:
        pos+=1                                # finds the item to be checked for overlap, removes it from the data array
        if var['flag'] == '1':                # adds it to val check array
            val_check = var
            data.pop(pos-1)


    check_start_time = val_check['time_start']
    check_end_time = val_check['time_end']
    check_start_date = val_check['date_start']
    check_end_date = val_check['date_end']

    overlap_dict = []

            #cst = check start time, cet = check end time, csd = check start date, ced = check end date
    for events in data:
        if events['date_start'] == check_start_date and events['date_end'] == check_end_date:           # for same day events
            if events['time_start'] <= check_start_time < events['time_end'] or events['time_start'] < check_end_time <= events['time_end']:
                events['flag'] = '1'
                overlap_dict.append(events['eventid'])

        if events['date_start'] <= check_start_date < events['date_end'] or events['date_start'] < check_end_date <= events['date_end']:
                events['flag'] = '1'
                overlap_dict.append(events['eventid'])

    time.sleep(3)
    print("Sending final results")
    return jsonify(overlap_dict)

if __name__ == '__main__':
    app.run(port=9345, debug=True)