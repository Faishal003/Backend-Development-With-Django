from django import forms

class user_form(forms.Form):
    boolean_field = forms.BooleanField(required=False)
    char_field = forms.CharField(max_length=15, min_length=5)
    # choice_field = forms.ChoiceField(choices=[('','SELECT OPTION'),(1, 'one'), (2, 'two'), (3, 'three')])
    #convert the choice field into a radio button
    # choice_field = forms.ChoiceField(choices=[('a', 'a'), ('b', 'b'), ('c', 'c')], widget=forms.RadioSelect)
    #convert the choice field into a multiple choice field
    choice_field = forms.MultipleChoiceField(choices=[(1, 'one'), (2, 'two'), (3, 'three')], required= False, widget=forms.CheckboxSelectMultiple)