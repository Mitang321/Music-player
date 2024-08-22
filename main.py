import base64
import requests

# Replace with your actual Client ID and Client Secret
CLIENT_ID = '10c90f8a85a34d1c97352fe53d6f5fb8'
CLIENT_SECRET = 'ffb3f01d10be43d3a84cff69767a8fa4'

# Encode Client ID and Secret
credentials = f"{CLIENT_ID}:{CLIENT_SECRET}"
encoded_credentials = base64.b64encode(credentials.encode()).decode()

# Spotify API token endpoint
token_url = "https://accounts.spotify.com/api/token"

# Request headers and body
headers = {
    "Authorization": f"Basic {encoded_credentials}",
    "Content-Type": "application/x-www-form-urlencoded"
}
body = {
    "grant_type": "client_credentials"
}

# Send request
response = requests.post(token_url, headers=headers, data=body)

# Print response
if response.status_code == 200:
    token_data = response.json()
    print(f"Access Token: {token_data['access_token']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
