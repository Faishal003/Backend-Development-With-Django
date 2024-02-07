from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Musician, Album
from first_app import forms
# Create your views here.

def index(request):
    musicain_list = Musician.objects.order_by('first_name')
    diction = {'title': "Home Page", 'musicain_list': musicain_list}
    return render(request, 'first_app/index.html', context=diction)

def album_list(request, artist_id):
    artist_info = Musician.objects.get(pk=artist_id)
    album_list = Album.objects.filter(artist=artist_id).order_by('name')
    diction = {'title': "Album List", 'artist_info': artist_info, 'album_list': album_list}
    return render(request, 'first_app/album_list.html', context=diction)

def musician_form(request):
    form = forms.MusicianForm()

    if request.method == 'POST':
        form = forms.MusicianForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
    diction = {'title': "Musician Form", 'musician_form': form}
    return render(request, 'first_app/musician_form.html', context=diction)

def album_form(request):
    form = forms.AlbumForm()

    if request.method == 'POST':
        form = forms.AlbumForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)

    diction = {'title': "Album Form", 'album_form': form}
    return render(request, 'first_app/album_form.html', context=diction)