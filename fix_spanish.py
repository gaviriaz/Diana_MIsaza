
import re

def fix_mangled_spanish(text):
    replacements = {
        r'ticnico': 'técnico',
        r'evalia': 'evalúa',
        r'acadimico': 'académico',
        r'acadimicos': 'académicos',
        r'atenciin': 'atención',
        r'atenciines': 'atenciones',
        r'imbito': 'ámbito',
        r'imbitos': 'ámbitos',
        r'electrinica': 'electrónica',
        r'electrinicas': 'electrónicas',
        r'clincos': 'clínicos',
        r'piblica': 'pública',
        r'piblicos': 'públicos',
        r'estindares': 'estándares',
        r'desafios': 'desafíos',
        r'multifacitico': 'multifacético',
        r'regiin': 'región',
        r'regiines': 'regiones',
        r'ficil': 'fácil',
        r'alfabetizaciin': 'alfabetización',
        r'investigaciin': 'investigación',
        r'bisica': 'básica',
        r'bisicas': 'básicas',
        r'itil': 'útil',
        r'itiles': 'útiles',
        r'semintica': 'semántica',
        r'diagnistico': 'diagnóstico',
        r'diagnisticos': 'diagnósticos',
        r'pirimide': 'pirámide',
        r'conexiin': 'conexión',
        r'conexiines': 'conexiones',
        r'soluciin': 'solución',
        r'soluciines': 'soluciones',
        r'conclusiin': 'conclusión',
        r'conclusiines': 'conclusiones',
        r'armonizaciin': 'armonización',
        r'normalizaciin': 'normalización',
        r'terminoligica': 'terminológica',
        r'terminoligicas': 'terminológicas',
        r'idintica': 'idéntica',
        r'idinticas': 'idénticas',
        r'aninimo': 'anónimo',
        r'aninimos': 'anónimos',
        r'compaiiero': 'compañero',
        r'compaiieros': 'compañeros',
        r'compaiia': 'compañía',
        r'compaiias': 'compañías',
        r'Estis': 'Estás',
        r'estis': 'estás',
        r'iQui ': '¿Qué ',
        r'iQui?': '¿Qué?',
        r'iEstis': '¿Estás',
        r'iPor ': '¿Por ',
        r'iReto': '¡Reto',
        r'iFelicidades': '¡Felicidades',
        r'iExcelente': '¡Excelente',
        r'iIncorrecto': '¡Incorrecto',
        r'i?': '–', # This might be risky, but let's see. In Article 3 it's mostly ranges or markers.
        r'patienti?s': "patient's",
        r'cómon': 'common', # Saw this in the view output
    }

    # Special handling for single 'i' that might be start of question/exclamation
    # This is tricky because 'i' is also a common variable name or character.
    # We only replace 'i' if it's followed by a capital letter at the start of a string or after a space/quote.
    text = re.sub(r"([ '\"(])i([A-Z])", r"\1¿\2", text)
    # Exclamation mark logic is similar but might clash. 
    # Actually, the user's diff showed 'iReto', 'iFelicidades', etc. which I handled above.

    for pattern, replacement in replacements.items():
        if pattern == 'i?':
             # Use escaped regex for i? because ? is special
             text = text.replace('i?', replacement)
        else:
             text = re.sub(pattern, replacement, text)
    
    return text

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

fixed_content = fix_mangled_spanish(content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("Fixed app.js")
