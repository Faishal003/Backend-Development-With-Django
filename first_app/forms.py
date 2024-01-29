from django import forms

class user_form(forms.Form):
    user_name = forms.CharField(label='User Name', max_length=100, widget=forms.TextInput(attrs={'placeholder':'Enter your name', 'style':'width:300px'}))
    user_dob = forms.DateField(label = 'Date of Birth', widget=forms.TextInput(attrs={'type':'date'}))
    user_email = forms.EmailField(label='Email', max_length=100)