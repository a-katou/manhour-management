from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views.UserView import UserView

urlpatterns = [
    # /users/*
    path('users/'               , UserView.as_view({'post'  : 'list', 'get'  : 'list'})),
    path('users/create/'        , UserView.as_view({'post'  : 'create'})),
    path('users/<int:pk>/'      , UserView.as_view({'get'   : 'retrieve'})),
    path('users/<int:pk>/update', UserView.as_view({'put'   : 'update'})),
    path('users/<int:pk>/delete', UserView.as_view({'delete': 'destroy'})),
]

urlpatterns = format_suffix_patterns(urlpatterns)