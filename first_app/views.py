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
    new_form = forms.MusicianForm()

    if request.method == 'POST':
        new_form = forms.MusicianForm(request.POST)

        if new_form.is_valid():
            new_form.save(commit=True)
            return index(request)

    diction = {'test_form':new_form, 'heading':'Add Musician'}
    return render(request, 'first_app/form.html', context=diction)