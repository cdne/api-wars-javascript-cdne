import requests


def get_api(api):
    return requests.get(api).json();
