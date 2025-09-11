from django import forms
from .models import Cita
from datetime import date

class CitaForm(forms.ModelForm):
    class Meta:
        model = Cita
        fields = ['paciente', 'doctor', 'fecha', 'hora', 'motivo']
        widgets = {
            'fecha': forms.DateInput(attrs={'type': 'date', 'min': date.today().strftime('%Y-%m-%d')}),
            'hora': forms.TimeInput(attrs={'type': 'time'}),
            'motivo': forms.Textarea(attrs={'rows':2}),
        }

    def clean_fecha(self):
        fecha = self.cleaned_data['fecha']
        if fecha < date.today():
            raise forms.ValidationError("No se puede agendar una cita en el pasado.")
        return fecha
