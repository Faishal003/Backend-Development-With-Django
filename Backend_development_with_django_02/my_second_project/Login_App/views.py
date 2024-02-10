from django.shortcuts import render

# Create your views here.
def index(request):
    dict = {}
    return render(request, 'Login_App/index.html', context=dict)