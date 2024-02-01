from django import forms
from django.core import validators

# def even_validator(value):
#     if value % 2 != 0:
#         raise forms.ValidationError('Number is not even')

class user_form(forms.Form):
    # number_filed = forms.IntegerField(validators=[even_validator])
    user_email = forms.EmailField()
    user_vmail = forms.EmailField()

    def clean(self):
        all_clean_data = super().clean()
        user_email = all_clean_data['user_email']
        user_vmail = all_clean_data['user_vmail']

        if user_email != user_vmail:
            raise forms.ValidationError('Make sure emails match')