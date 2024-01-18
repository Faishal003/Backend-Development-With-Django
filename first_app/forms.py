from django import forms

class user_form(forms.Form):
    user_name = forms.CharField(label='User Name', max_length=100)
    user_email = forms.EmailField(label='Email', max_length=100)