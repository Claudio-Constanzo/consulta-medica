from django.shortcuts import render, redirect
from .forms import CitaForm

def agendar_cita_view(request):
    if request.method == 'POST':
        form = CitaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('cita-confirmacion')  # página de confirmación
    else:
        form = CitaForm()
    return render(request, 'agendarHora/agendar.html', {'form': form})

def confirmacion_cita_view(request):
    return render(request, 'agendarHora/confirmacion.html')

