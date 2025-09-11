from django.urls import path
from . import views

app_name = "cuenta"

urlpatterns = [
    path('login/', views.login_view, name='login'),
]