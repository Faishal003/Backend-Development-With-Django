from django import template

register = template.Library()

@register.filter(name='custom_filters')
def my_filters(value):
    return value + 'this is a string added custom filter'

register.filter('custom_filters', my_filters)