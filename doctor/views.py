from django.shortcuts import render

def doctor_view(request):
    return render(request, 'doctor/doctor.html')

def crudFicha_view(request):
    return render(request, 'doctor/crudFicha.html')
