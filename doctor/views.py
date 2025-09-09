from django.shortcuts import render

def doctor_view(request):
    return render(request, 'formulario/doctor.html')
