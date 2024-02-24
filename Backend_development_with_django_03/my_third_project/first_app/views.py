from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Musician, Album

# Create your views here.

#class IndexView(View):
    #inside class define a function then use self as first argument
#    def get(self, request):
#        return HttpResponse("hello world! This is the first app of classed based view.")

class IndexView(ListView):
    context_object_name = 'musician_list'
    template_name = 'first_app/index.html'
    model = Musician

class MusicianDetail(DetailView):
    context_object_name = 'musician'
    model = Musician
    template_name = 'first_app/musician_details.html'

class AddMusician(CreateView):
    model = Musician
    fields = ('first_name', 'last_name', 'instrument')
    template_name = 'first_app/musician_form.html'

