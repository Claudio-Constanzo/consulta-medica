from django.shortcuts import render

def registro_view(request):
    return render(request, 'formulario/registro.html')

def doctor_view(request):
    return render(request, 'formulario/doctor.html')

def fichaMedica_view(request):
    return render(request, 'formulario/fichaMedica.html')