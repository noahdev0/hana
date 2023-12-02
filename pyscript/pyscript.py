import csv
import pip

try:
    import requests
except ImportError:
    pip.main(['install', 'requests'])
    import requests

def api_to_csv(api_url, csv_file_path):
    response = requests.get(api_url)
    data = response.json()

    with open(csv_file_path, 'w', newline='') as csvfile:
        fieldnames = ['Name', 'Last Name', 'Date of Birth']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for item in data:
            writer.writerow({'Name': item['name'], 'Last Name': item['last_name'], 'Date of Birth': item['dob']})

api_to_csv()