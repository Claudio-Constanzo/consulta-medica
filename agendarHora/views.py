from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import CitaForm

@login_required
def agendar_cita_view(request):
    if request.method == 'POST':
        form = CitaForm(request.POST)
        if form.is_valid():
            cita = form.save(commit=False)
            cita.paciente = request.user.paciente  # Asignar el paciente actual
            cita.estado = 'Pendiente'  # Estado inicial
            cita.save()
            form.save()
            return redirect('cita-confirmacion')  # página de confirmación
    else:
        form = CitaForm()
    return render(request, 'agendarHora/agendar.html', {'form': form})

def confirmacion_cita_view(request):
    return render(request, 'agendarHora/confirmacion.html')

