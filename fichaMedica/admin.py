from django.contrib import admin
from .models import Doctor, Secretaria, Paciente

# Registrar Doctor en el Admin
@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "nombre", "apellido", "email")
    search_fields = ("user__rut", "user__first_name", "user__last_name", "user__email")
    
    def nombre(self, obj): return obj.user.first_name
    def apellido(self, obj): return obj.user.last_name
    def email(self, obj): return obj.user.email

# Registrar Secretaria en el Admin
@admin.register(Secretaria)
class SecretariaAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "nombre", "apellido", "email")
    search_fields = ("user__rut", "user__first_name", "user__last_name", "user__email")
    
    def nombre(self, obj): return obj.user.first_name
    def apellido(self, obj): return obj.user.last_name
    def email(self, obj): return obj.user.email

# Registrar Paciente en el Admin
@admin.register(Paciente)
class PacienteAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "nombre", "apellido", "prevision", "telefono")
    search_fields = ("user__rut", "user__first_name", "user__last_name", "telefono", "user__email")
    
    def nombre(self, obj): return obj.user.first_name
    def apellido(self, obj): return obj.user.last_name
