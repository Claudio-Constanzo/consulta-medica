from django.urls import path, include
from . import views

app_name = "cuenta"

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('menu-doctor/', views.menuDoctor_view, name='menuDoctor'),
]