from django.urls import path
from first_app import views
from django.contrib import admin

urlpatterns = [
    path('', views.index, name='index'),
]