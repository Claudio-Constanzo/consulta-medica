from django.shortcuts import render

def registro_view(request):
    return render(request, 'formulario/registro.html')



