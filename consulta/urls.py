"""
URL configuration for consulta project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
""" 
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from formulario.views import registro_view

from fichaMedica.views import ficha_medica_view
from home.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('registro/', registro_view, name='registro'), ##ruta de formulario de registro
    path('fichamedica/', ficha_medica_view, name='ficha_medica'), ##ruta de ficha medica
    path('', home ) # ruta que se utiliza para vizualizar el inicio de la pagina
]

if settings.DEBUG:
    from django.conf import settings
    from django.conf.urls.static import static
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) ##sirve para cargar archivos estaticos en modo desarrollo
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) ##sirve para cargar archivos multimedia en modo desarrollo 
