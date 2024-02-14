from django.urls import path
from Login_App import views

app_name = 'Login_App'

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
]