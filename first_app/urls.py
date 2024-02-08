from django.urls import path
from first_app import views
from django.contrib import admin

app_name = 'first_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('album_list/<int:artist_id>/', views.album_list, name='album_list'),
    path('musician_form/', views.musician_form, name='musician_form'),
    path('album_form/', views.album_form, name='album_form'),
    path('edit_artist/<int:artist_id>/', views.edit_artist, name='edit_artist'),

]