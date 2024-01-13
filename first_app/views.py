from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Musician, Album
# Create your views here.

def index(request):
    musician_list = Musician.objects.order_by('first_name')
    diction = {'text':'This is the list of Musicians.', 'musician':musician_list}
    return render(request, 'first_app/index.html', context=diction)
