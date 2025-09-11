from django.shortcuts import render

def fichaMedica_view(request):
    return render(request, 'fichaMedica/fichaMedica.html')