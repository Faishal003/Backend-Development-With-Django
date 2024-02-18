from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView

# Create your views here.

#class IndexView(View):
    #inside class define a function then use self as first argument
#    def get(self, request):
#        return HttpResponse("hello world! This is the first app of classed based view.")

class IndexView(TemplateView):
    template_name = 'first_app/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['text_1'] = 'hello world! This is the first app of classed based view.'
        context['text_2'] = 'This is the second text.'
        return context

