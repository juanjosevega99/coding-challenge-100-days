code = {'A': '.-','B': '-...','C': '-.-.','D': '-..','E': '.','F': '..-.','G': '--.','H': '....','I': '..','J': '.---','K': '-.-','L': '.-..','M': '--','N': '-.','O': '---','P': '.--.','Q':'--.-','R': '.-.','S':'...','T': '-','U': '..-','V':'...-','W':'.--','X': '-..-','Y': '-.--','Z': '--..','1': '.----','2':'..---','3': '...--','4': '....-','5':'.....','6': '-....','7': '--...','8':'---..','9':'----.','0': '-----','.':'.-.-.-',',':'--..--',':': '---...',';':'-.-.-.','?':'..--..','!': '-.-.--','"':'.-..-.',"'": '.----.','+': '.-.-.','-':'-....-','/': '-..-.','=': '-...-','_': '..--.-','$': '...-..-','@': '.--.-.','&': '.-...','(': '-.--.',')': '-.--.-'}

phrase = input('enter your phrase to translate: ')
phrase = phrase.upper()
translate = []

for letter in phrase:
    value = code.get(letter)
    translate.append(value)
translate = ' '.join(translate)
print(translate)