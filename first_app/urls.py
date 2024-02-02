from django.urls import path
from first_app import views
from django.contrib import admin

app_name = 'first_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('form/', views.from_view, name='form'),
]