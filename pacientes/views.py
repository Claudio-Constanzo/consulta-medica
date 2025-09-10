from django.shortcuts import render

def pacientes_view(request):
    return render(request, 'formulario/pacientes.html')
