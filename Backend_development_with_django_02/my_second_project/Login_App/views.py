from django.shortcuts import render
from Login_App.forms import UserForm, UserInfoForm

# Create your views here.
def index(request):
    dict = {}
    return render(request, 'Login_App/index.html', context=dict)

def register(request):
    user_form = UserForm()
    user_info_form = UserInfoForm()
    dict = {'user_form': user_form, 'user_info_form': user_info_form}
    return render(request, 'Login_App/register.html', context=dict)
