from django.db import models
from django.conf import settings

#importacion de modelo de user que trae Django
from django.contrib.auth.models import AbstractUser
# Create your models here.      


User = settings.AUTH_USER_MODEL  # Usamos el modelo User personalizado

# Doctor
class Doctor(models.Model):
        
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="doctor")
    # Si prefieren agregar más campos para el doctor, como especialidad o fecha de registro, podemos añadirlos aquí.
    def __str__(self):
        return f"Dr. {self.user.get_full_name()}"

# Secretaria
class Secretaria(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="secretaria")
    def __str__(self):
        return f"Secretaria: {self.user.get_full_name()}"

# Paciente
class Paciente(models.Model):
    PREVISION = [
        ("FONASA","FONASA"), ("ISAPRE","ISAPRE"),
        ("PARTICULAR","PARTICULAR"), ("OTRA","OTRA"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="paciente")
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length=150)
    telefono = models.CharField(max_length=20)
    prevision = models.CharField(max_length=20, choices=PREVISION)

    def __str__(self):
        return f"Paciente: {self.user.get_full_name()}"


