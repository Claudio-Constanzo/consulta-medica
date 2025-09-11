from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE = (
        ("ADMIN", "Administrador"),
        ("SECRETARY", "Secretaria"),
        ("DOCTOR", "Doctor"),
        ("PATIENT", "Paciente"),
    )
    rut = models.CharField(max_length=15, unique=True)
    role = models.CharField(max_length=10, choices=ROLE, default="PATIENT")

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name="doctor_formulario")
    def __str__(self):
        return f"Dr(a). {self.user.get_full_name()}"

class Paciente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="paciente_formulario")
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length=150)
    telefono = models.CharField(max_length=20)
    prevision = models.CharField(max_length=20)
    def __str__(self):
        return f"Paciente: {self.user.get_full_name()}"
