import requests

service_cloud_url = "https://valet-parking-slack-bot-n2mj5hiwyq-lz.a.run.app" 

# TODO: Add a "healthcheck" endpoint to the app,
# since the response to this URL will change and the
# test will fail even though the service is available!
def test_cloud_endpoint():
    want = "no spots for you!"
    response = requests.get(service_cloud_url + "/spots")
    assert response.ok
    assert want.lower() == response.text.lower()    
