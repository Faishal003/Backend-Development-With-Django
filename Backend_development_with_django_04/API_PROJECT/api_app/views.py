from django.shortcuts import render
import requests

# Create your views here.
def index(request):
    user = False
    if request.method == 'POST':
        username = request.POST.get('username')
        url = 'https://api.github.com/users/' + str(username)
        response = requests.get(url)
        user = response.json()
    return render(request, 'index.html', context={'user': user})
