from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Musician, Album
from first_app import forms
from django.db.models import Avg
# Create your views here.

def index(request):
    musicain_list = Musician.objects.order_by('first_name')
    diction = {'title': "Home Page", 'musicain_list': musicain_list}
    return render(request, 'first_app/index.html', context=diction)

def album_list(request, artist_id):
    artist_info = Musician.objects.get(pk=artist_id)
    album_list = Album.objects.filter(artist=artist_id).order_by('name')
    artist_rating = Album.objects.filter(artist=artist_id).aggregate(Avg('num_stars'))

    diction = {'title': "Album List", 'artist_info': artist_info, 'album_list': album_list, 'artist_rating': artist_rating}
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

def edit_artist(request, artist_id):
    artist_info = Musician.objects.get(pk=artist_id)
    form = forms.MusicianForm(instance=artist_info)

    if request.method == 'POST':
        form = forms.MusicianForm(request.POST, instance=artist_info)

        if form.is_valid():
            form.save(commit=True)
            return album_list(request, artist_id)

    diction = {'edit_form': form}
    return render(request, 'first_app/edit_artist.html', context=diction)

def edit_album(request, album_id):
    album_info = Album.objects.get(pk=album_id)
    form = forms.AlbumForm(instance=album_info)
    diction = {}

    if request.method == 'POST':
        form = forms.AlbumForm(request.POST, instance=album_info)

        if form.is_valid():
            form.save(commit=True)
            diction.update({'success_text': "Album Updated!"})
            # return album_list(request, album_info.artist.id)

    diction.update({'edit_form': form})
    diction.update({'album_id': album_id})
    return render(request, 'first_app/edit_album.html', context=diction)

def delete_album(request, album_id):
    album = Album.objects.get(pk=album_id).delete()
    diction = {'delete_text': 'Album Deleted!'}
    return render(request, 'first_app/delete_album.html', context=diction)

def delete_musician(request, artist_id):
    artist = Musician.objects.get(pk=artist_id).delete()
    dictions = {'delete_text': 'Musician Deleted!'}
    return render(request, 'first_app/delete_album.html', context=dictions)