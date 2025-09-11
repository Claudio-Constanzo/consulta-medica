from django.db import models
from django.conf import settings
from formulario.models import Paciente, Doctor

User = settings.AUTH_USER_MODEL

class Cita(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    fecha = models.DateField()
    hora = models.TimeField()
    motivo = models.CharField(max_length=200, blank=True)
    creada_en = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['fecha', 'hora']

    def __str__(self):
        return f"{self.paciente.user.get_full_name()} con {self.doctor.user.get_full_name()} - {self.fecha} {self.hora}"
