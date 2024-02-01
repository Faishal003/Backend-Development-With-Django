from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Musician, Album
from first_app import forms
# Create your views here.

def index(request):
    musician_list = Musician.objects.order_by('first_name')
    diction = {'text':'This is the list of Musicians.', 'musician':musician_list}
    return render(request, 'first_app/index.html', context=diction)

def from_view(request):
    new_form = forms.user_form()
    diction = {'test_form':new_form, 'heading_1':"This from is creating usign django library"}

    if request.method == 'POST':
        new_form = forms.user_form(request.POST)
        diction.update({'test_form':new_form})

        if new_form.is_valid():
            diction.update({'number_filed': 'Fields are matched.'})
            diction.update({'form_submitted': 'yes'})
    return render(request, 'first_app/form.html', context=diction)