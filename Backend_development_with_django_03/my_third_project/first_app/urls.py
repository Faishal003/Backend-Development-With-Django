from first_app import views
from django.urls import path

app_name = 'first_app'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]