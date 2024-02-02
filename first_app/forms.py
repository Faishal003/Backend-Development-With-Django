from django import forms
from django.core import validators
from first_app.models import Album, Musician

class MusicianForm(forms.ModelForm):
    class Meta:
        model = Musician
        exclude = ["last_name"]
        # include = ["first_name", "instrument"]
