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
from django.urls import path
from formulario.views import registro_view
from doctor.views import doctor_view
from fichaMedica.views import fichaMedica_view
from pacientes.views import pacientes_view
from usuarios.views import usuarios_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('registro/', registro_view, name='registro'), ##ruta de formulario de registro
    path('doctor/', doctor_view, name='doctor'), #Ruta para el formulario de registro de doctores
    path('fichaMedica/', fichaMedica_view, name='fichaMedica'), #Ruta para el formulario de la ficha medica 
    path('pacientes/', pacientes_view, name='pacientes'), #Ruta para el formulario de pacientes
    path('usuarios/', usuarios_view, name='usuarios') #Ruta para el formulario de usuarios

]

if settings.DEBUG:
    from django.conf import settings
    from django.conf.urls.static import static
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) ##sirve para cargar archivos estaticos en modo desarrollo
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) ##sirve para cargar archivos multimedia en modo desarrollo 
